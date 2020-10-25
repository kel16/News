using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using NewsPortal.Data.Models;

namespace NewsPortal.Data
{
    /// <summary>
    /// Application database context.
    /// </summary>
    public class DataContext : DbContext 
    {
        /// <summary>
        /// Represents database table for news.
        /// </summary>
        public DbSet<News> News { get; set; }

        /// <summary>
        /// The default DbContext constructor.
        /// </summary>
        /// <param name="options">Database context options.</param>
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<News>()
               .HasKey(n => n.NewsGuid);
            builder.Entity<News>()
                .Property(n => n.NewsGuid)
                .ValueGeneratedOnAdd();
        }
    }
}
