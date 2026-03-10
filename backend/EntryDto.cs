// Data Transfer Object for Entry

using System.ComponentModel.DataAnnotations;

namespace CorporateCupPredictor;

public class EntryDto
{
    [Required(ErrorMessage = "Name is required")]
    [MaxLength(200, ErrorMessage = "Name must be less than 200 characters")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    [MaxLength(200, ErrorMessage = "Email must be less than 200 characters")]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Total goals is required")]
    [Range(0, 99, ErrorMessage = "Total goals must be between 0 and 99")]
    public int TotalGoals { get; set; }

    [Required(ErrorMessage = "Men's top scorer is required")]
    [MaxLength(200, ErrorMessage = "Men's top scorer must be less than 200 characters")]
    public string MensTopScorer { get; set; } = string.Empty;

    [Required(ErrorMessage = "Mixed top scorer is required")]
    [MaxLength(200, ErrorMessage = "Mixed top scorer must be less than 200 characters")]
    public string MixedTopScorer { get; set; } = string.Empty;
}
