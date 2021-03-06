﻿using System;
using System.ComponentModel.DataAnnotations;

namespace NewsPortal.Data.Models
{
    public class News
    {
        [Key]
        public Guid NewsGuid { get; set; }
        public string Title { get; set; }
        public string Annotation { get; set; }
        public string Text { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ChangeDate { get; set; }
        public News()
        {
            CreateDate = DateTime.UtcNow;
            ChangeDate = DateTime.UtcNow;
        }
    }
}
