using NewsPortal.Data;
using NewsPortal.Data.Models;
using NewsPortal.Interfaces;
using NewsPortal.Models.ViewModels;
using System;
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
                        orderby news.NewsGuid
                        select news;
            return query;
        }

        /// <summary>
        /// Returns news with the given guid.
        /// </summary>
        /// <param name="guid">News search parameter.</param>
        /// <returns>News with guid.</returns>
        public News GetNews(Guid guid)
        {
            return _context.News.Where(d => d.NewsGuid == guid).SingleOrDefault();
        }

        /// <summary>
        /// Adds news to database.
        /// </summary>
        /// <param name="news">News model.</param>
        /// <returns></returns>
        public async Task AddNews(News news)
        {
            await _context.News.AddAsync(news);
        }

        /// <summary>
        /// Updates news information
        /// </summary>
        /// <param name="oldNews">Current entity</param>
        /// <param name="news">Updated view model</param>
        /// <returns></returns>
        public void UpdateNews(News oldNews, NewsVM news)
        {
            oldNews.Title = news.Title;
            oldNews.Annotation = news.Annotation;
            oldNews.Text = news.Text;
            oldNews.ChangeDate = DateTime.UtcNow;
        }

        /// <summary>
        /// Removes news entity from database.
        /// </summary>
        /// <param name="news">News model.</param>
        /// <returns></returns>
        public void DeleteNews(News news)
        {
            _context.News.Remove(news);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }
    }
}
