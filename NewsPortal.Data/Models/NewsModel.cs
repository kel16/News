using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Data.Models
{
    public class NewsModel
    {
        [Key]
        public Guid NewsId { get; set; }
        public string Title { get; set; }
        public string Annotation { get; set; }
        public string Text { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
