using System.ComponentModel.DataAnnotations;

namespace TkmApi.Model
{
    public class Users
    {
        [Required]
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(200)]
        public string? Name { get; set; }

        [Required]
        [MaxLength(200)]
        public string? Score { get; set; }
    }
}
