// Corporate Cup Predictor API
// .NET 8.0 Web API with SQLite database

using Microsoft.AspNetCore.OpenApi;                  // enables .WithOpenApi() on Minimal APIs
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using CorporateCupPredictor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
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

// Configure CORS - Allow all origins, methods, headers, and credentials for development
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.SetIsOriginAllowed(_ => true) // Allow any origin in development
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // Required for proxy authentication
    });
});

// Add SQLite database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")
        ?? "Data Source=corporatecup.db"));

var app = builder.Build();

// Ensure database is created
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

// Configure the HTTP request pipeline
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Corporate Cup Predictor API v1");
    c.RoutePrefix = "swagger";
});

// IMPORTANT: UseCors must come before UseAuthorization (if used)
app.UseCors();

// Serve static files from frontend/dist copied to wwwroot (for Railway deployment)
var frontendPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
if (Directory.Exists(frontendPath))
{
    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(frontendPath),
        RequestPath = ""
    });
}

// Health check endpoint
app.MapGet("/api/health", () => Results.Ok(new { status = "healthy", timestamp = DateTime.UtcNow }))
    .WithName("HealthCheck")
    .WithTags("Health")
    .WithOpenApi();

// GET: Get all entries
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

// GET: Get entry by ID
app.MapGet("/api/entries/{id}", async (int id, AppDbContext db) =>
{
    var entry = await db.Entries.FindAsync(id);

    if (entry == null)
    {
        return Results.NotFound(new { message = "Entry not found" });
    }

    return Results.Ok(entry);
})
.WithName("GetEntryById")
.WithTags("Entries")
.WithOpenApi();

// POST: Create new entry
app.MapPost("/api/entries", async (EntryDto entryDto, AppDbContext db) =>
{
    // Validate the DTO
    var validationResults = new List<System.ComponentModel.DataAnnotations.ValidationResult>();
    var validationContext = new System.ComponentModel.DataAnnotations.ValidationContext(entryDto);

    if (!System.ComponentModel.DataAnnotations.Validator.TryValidateObject(
        entryDto, validationContext, validationResults, true))
    {
        var errors = validationResults.Select(r => r.ErrorMessage).ToList();
        return Results.BadRequest(new { message = "Validation failed", errors });
    }

    // Check if email already exists
    var existingEntry = await db.Entries
        .FirstOrDefaultAsync(e => e.Email.ToLower() == entryDto.Email.ToLower());

    if (existingEntry != null)
    {
        return Results.BadRequest(new
        {
            message = "An entry with this email already exists. Each person can only submit one entry."
        });
    }

    // Create new entry
    var entry = new Entry
    {
        Name = entryDto.Name,
        Email = entryDto.Email,
        TotalGoals = entryDto.TotalGoals,
        MensTopScorer = entryDto.MensTopScorer,
        MixedTopScorer = entryDto.MixedTopScorer,
        DonationScreenshot = entryDto.DonationScreenshot,
        SubmittedAt = DateTime.UtcNow
    };

    db.Entries.Add(entry);
    await db.SaveChangesAsync();

    return Results.Created($"/api/entries/{entry.Id}", entry);
})
.WithName("CreateEntry")
.WithTags("Entries")
.WithOpenApi();

// GET: Get statistics
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

    var mensScorers = entries
        .GroupBy(e => e.MensTopScorer)
        .OrderByDescending(g => g.Count())
        .FirstOrDefault();

    var mixedScorers = entries
        .GroupBy(e => e.MixedTopScorer)
        .OrderByDescending(g => g.Count())
        .FirstOrDefault();

    return Results.Ok(new
    {
        totalEntries = entries.Count,
        averageGoals,
        mostPopularMensScorer = mensScorers?.Key ?? "N/A",
        mostPopularMixedScorer = mixedScorers?.Key ?? "N/A"
    });
})
.WithName("GetStatistics")
.WithTags("Statistics")
.WithOpenApi();

// DELETE: Delete entry by ID (admin only)
app.MapDelete("/api/entries/{id}", async (int id, AppDbContext db) =>
{
    var entry = await db.Entries.FindAsync(id);

    if (entry == null)
    {
        return Results.NotFound(new { message = "Entry not found" });
    }

    db.Entries.Remove(entry);
    await db.SaveChangesAsync();

    return Results.Ok(new { message = "Entry deleted successfully" });
})
.WithName("DeleteEntry")
.WithTags("Entries")
.WithOpenApi();

// Root endpoint - redirect to swagger if frontend not available
var frontendIndexPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/index.html");
if (File.Exists(frontendIndexPath))
{
    // SPA fallback - serve index.html for all non-API routes
    app.MapFallbackToFile("index.html", new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(
            Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"))
    });
}
else
{
    // If frontend not built, redirect to swagger
    app.MapGet("/", () => Results.Redirect("/swagger"))
        .ExcludeFromDescription();
}

app.Run();
