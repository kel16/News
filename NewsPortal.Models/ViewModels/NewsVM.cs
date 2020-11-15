using System.ComponentModel.DataAnnotations;

namespace NewsPortal.Models.ViewModels
{
    public class NewsVM
    {
        [Required(ErrorMessage = "News must have a title")]
        public string Title { get; set; }
        [Required(ErrorMessage = "News must have an annotation")]
        public string Annotation { get; set; }
        [Required(ErrorMessage = "News must contain text")]
        [MinLength(50)]
        public string Text { get; set; }
    }
}
