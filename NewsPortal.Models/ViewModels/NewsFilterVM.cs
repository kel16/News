using System;
using System.ComponentModel.DataAnnotations;

namespace NewsPortal.Models.ViewModels
{
    public class NewsFilterVM
    {
        public string Title { get; set; }
        public string Annotation { get; set; }
        public string Text{ get; set; }
        public DateTime? CreateDate { get; set; }
    }
}
