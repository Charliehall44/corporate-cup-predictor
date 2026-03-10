// Corporate Cup Predictor API
// .NET 8 Web API + SPA hosting from /backend/wwwroot

using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.OpenApi;                 // enables .WithOpenApi() on Minimal APIs
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using CorporateCupPredictor;                       // your DbContext + models

var builder = WebApplication.CreateBuilder(args);

// ---------------------------
// Services
// ---------------------------

// Swagger / OpenAPI (for docs at /swagger)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new()
    {
        Title = "Corporate Cup Predictor API",
        Version = "v1",
        Description = "API for Corporate Cup 2026 predictions and donations"
    });
});

// CORS (broad for now; can be restricted later)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.SetIsOriginAllowed(_ => true)
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

// SQLite DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? "Data Source=corporatecup.db"));

var app = builder.Build();

// ---------------------------
// One‑time DB ensure
// ---------------------------
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

// ---------------------------
// Swagger (always available; UI at /swagger)
// ---------------------------
app.UseSwagger();
app.UseSwaggerUI(ui =>
{
    ui.SwaggerEndpoint("/swagger/v1/swagger.json", "Corporate Cup Predictor API v1");
    ui.RoutePrefix = "swagger";
});

// ---------------------------
// CORS (before any endpoints that need it)
// ---------------------------
app.UseCors();

// ---------------------------
// Static files + SPA fallback (serve React from wwwroot)
// ---------------------------
var env = app.Environment;

// Ensure WebRootPath is set to "wwwroot" beside the app (publish-safe)
if (string.IsNullOrWhiteSpace(env.WebRootPath))
{
    env.WebRootPath = Path.Combine(env.ContentRootPath, "wwwroot");
}

// Serve static files (if present)
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(env.WebRootPath),
    RequestPath = ""
});

// If SPA exists, use it at '/' and fallback anything non-API/non-static to index.html.
// Otherwise, keep '/' redirecting to Swagger.
var spaIndex = Path.Combine(env.WebRootPath, "index.html");
if (File.Exists(spaIndex))
{
    // Any unmatched route goes to React index.html
    app.MapFallbackToFile("index.html");
}
else
{
    // SPA not published—leave the root landing on Swagger
    app.MapGet("/", () => Results.Redirect("/swagger"))
       .ExcludeFromDescription();
}

// ---------------------------
// Minimal API endpoints
// ---------------------------

// Health
app.MapGet("/api/health", () => Results.Ok(new { status = "healthy", timestamp = DateTime.UtcNow }))
   .WithName("HealthCheck")
   .WithTags("Health")
   .WithOpenApi();

// Entries: list all
app.MapGet("/api/entries", async (AppDbContext db) =>
{
    var entries = await db.Entries
        .OrderByDescending(e => e.SubmittedAt)
        .ToListAsync();

    return Results.Ok(entries);
})
.WithName("GetAllEntries")
.WithTags("Entries")
.WithOpenApi();

// Entries: get by id
app.MapGet("/api/entries/{id:int}", async (int id, AppDbContext db) =>
{
    var entry = await db.Entries.FindAsync(id);
    return entry is null
        ? Results.NotFound(new { message = "Entry not found" })
        : Results.Ok(entry);
})
.WithName("GetEntryById")
.WithTags("Entries")
.WithOpenApi();

// Entries: create
app.MapPost("/api/entries", async (EntryDto entryDto, AppDbContext db) =>
{
    // Validate DTO (DataAnnotations)
    var results = new List<System.ComponentModel.DataAnnotations.ValidationResult>();
    var context = new System.ComponentModel.DataAnnotations.ValidationContext(entryDto);

    if (!System.ComponentModel.DataAnnotations.Validator
        .TryValidateObject(entryDto, context, results, validateAllProperties: true))
    {
        var errors = results.Select(r => r.ErrorMessage).ToList();
        return Results.BadRequest(new { message = "Validation failed", errors });
    }

    // Duplicate email check
    var exists = await db.Entries
        .AnyAsync(e => e.Email.ToLower() == entryDto.Email.ToLower());

    if (exists)
    {
        return Results.BadRequest(new
        {
            message = "An entry with this email already exists. Each person can only submit one entry."
        });
    }

    var entry = new Entry
    {
        Name = entryDto.Name,
        Email = entryDto.Email,
        TotalGoals = entryDto.TotalGoals,
        MensTopScorer = entryDto.MensTopScorer,
        MixedTopScorer = entryDto.MixedTopScorer,
        SubmittedAt = DateTime.UtcNow
    };

    db.Entries.Add(entry);
    await db.SaveChangesAsync();

    return Results.Created($"/api/entries/{entry.Id}", entry);
})
.WithName("CreateEntry")
.WithTags("Entries")
.WithOpenApi();

// Stats
app.MapGet("/api/statistics", async (AppDbContext db) =>
{
    var entries = await db.Entries.ToListAsync();

    if (entries.Count == 0)
    {
        return Results.Ok(new
        {
            totalEntries = 0,
            averageGoals = 0,
            mostPopularMensScorer = "N/A",
            mostPopularMixedScorer = "N/A"
        });
    }

    var totalGoals = entries.Sum(e => e.TotalGoals);
    var averageGoals = Math.Round((double)totalGoals / entries.Count, 2);

    var mensTop = entries.GroupBy(e => e.MensTopScorer)
                         .OrderByDescending(g => g.Count())
                         .FirstOrDefault();

    var mixedTop = entries.GroupBy(e => e.MixedTopScorer)
                          .OrderByDescending(g => g.Count())
                          .FirstOrDefault();

    return Results.Ok(new
    {
        totalEntries = entries.Count,
        averageGoals,
        mostPopularMensScorer = mensTop?.Key ?? "N/A",
        mostPopularMixedScorer = mixedTop?.Key ?? "N/A"
    });
})
.WithName("GetStatistics")
.WithTags("Statistics")
.WithOpenApi();

// Entries: delete
app.MapDelete("/api/entries/{id:int}", async (int id, AppDbContext db) =>
{
    var entry = await db.Entries.FindAsync(id);
    if (entry is null)
        return Results.NotFound(new { message = "Entry not found" });

    db.Entries.Remove(entry);
    await db.SaveChangesAsync();

    return Results.Ok(new { message = "Entry deleted successfully" });
})
.WithName("DeleteEntry")
.WithTags("Entries")
.WithOpenApi();

// ---------------------------
// Run
// ---------------------------
app.Run();
