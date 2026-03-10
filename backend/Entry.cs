// Entry model for database

using System.ComponentModel.DataAnnotations;

namespace CorporateCupPredictor;

public class Entry
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(200)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    [MaxLength(200)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [Range(0, 99)]
    public int TotalGoals { get; set; }

    [Required]
    [MaxLength(200)]
    public string MensTopScorer { get; set; } = string.Empty;

    [Required]
    [MaxLength(200)]
    public string MixedTopScorer { get; set; } = string.Empty;

    public string DonationScreenshot { get; set; } = string.Empty; // Base64 encoded image

    public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
}
