// Database context using Entity Framework Core

using Microsoft.EntityFrameworkCore;

namespace CorporateCupPredictor;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Entry> Entries { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Entry entity
        modelBuilder.Entity<Entry>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(200);
            entity.Property(e => e.TotalGoals).IsRequired();
            entity.Property(e => e.MensTopScorer).IsRequired().HasMaxLength(200);
            entity.Property(e => e.MixedTopScorer).IsRequired().HasMaxLength(200);
            entity.Property(e => e.DonationScreenshot).IsRequired();
            entity.Property(e => e.SubmittedAt).IsRequired();

            // Create index on email for faster lookups
            entity.HasIndex(e => e.Email);
            
            // Create index on submitted date for sorting
            entity.HasIndex(e => e.SubmittedAt);
        });
    }
}
