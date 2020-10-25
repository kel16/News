using NewsPortal.Data;
using NewsPortal.Data.Models;
using NewsPortal.Interfaces;
using NewsPortal.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Repositories
{
    public class NewsRepository : INewsRepository
    {
        private readonly DataContext _context;
        public NewsRepository(DataContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Returns filtered news or a full list of news if none provided.
        /// </summary>
        /// <param name="filter">A model with properties, depending on which news is filtered.</param>
        /// <returns>Filtered news.</returns>
        public IQueryable<News> GetNewsByFilter(NewsFilterVM filter)
        {
            var query = from news in _context.News
                        where filter.Title == null || news.Title.ToLower().Contains(filter.Title.ToLower())
                        && (filter.Annotation == null || news.Annotation.ToLower()
                            .Contains(filter.Annotation.ToLower()))
                        && (filter.Text == null || news.Text.Contains(filter.Text))
                        && (!filter.CreateDate.HasValue || news.CreateDate == filter.CreateDate)
                        orderby news.NewsId
                        select news;
            return query;
        }
    }
}
