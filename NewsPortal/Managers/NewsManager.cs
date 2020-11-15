using NewsPortal.Data.Models;
using NewsPortal.Interfaces;
using NewsPortal.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Managers
{
    public class NewsManager : INewsManager
    {
        private readonly INewsRepository _newsRepository;

        public NewsManager(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        /// <summary>
        /// Returns paged news.
        /// </summary>
        /// <param name="page">Current page number.</param>
        /// <param name="quantity">Number of items per page.</param>
        /// <returns>Paged News.</returns>
        public IEnumerable<News> GetFilteredNews(NewsFilterVM filter, int page, int quantity)
        {
            var news = _newsRepository.GetNewsByFilter(filter);
            return news.Skip((page - 1) * quantity)
                .Take(quantity)
                .ToList();
        }

        /// <summary>
        /// Returns news with the given guid.
        /// </summary>
        /// <param name="guid">News search parameter.</param>
        /// <returns>News with guid.</returns>
        public News GetNewsByGuid(Guid guid)
        {
            return _newsRepository.GetNews(guid);
        }

        /// <summary>
        /// Adds news to database.
        /// </summary>
        /// <param name="news">News view model.</param>
        /// <returns></returns>
        public async Task AddNews(NewsVM news)
        {
            await _newsRepository.AddNews(new News 
            { 
                Title = news.Title,
                Annotation = news.Annotation,
                Text = news.Text,
            });
            await _newsRepository.SaveChangesAsync();
        }

        /// <summary>
        /// Updates news in database.
        /// </summary>
        /// <param name="guid">Guid of news to update.</param>
        /// <param name="news">Updated view model.</param>
        public void ChangeNews(Guid guid, NewsVM news)
        {
            var oldNews = _newsRepository.GetNews(guid);
            if (oldNews == null)
            {
                throw new Exception("No news to update");
            }
            _newsRepository.UpdateNews(oldNews, news);
            _newsRepository.SaveChanges();
        }

        /// <summary>
        /// Deletes news with the given guid.
        /// </summary>
        /// <param name="guid">News guid.</param>
        /// <returns></returns>
        public void DeleteNews(Guid guid)
        {
            var news = _newsRepository.GetNews(guid);
            if (news == null)
            {
                throw new Exception("News not found");
            }
            _newsRepository.DeleteNews(news);
            _newsRepository.SaveChanges();
        }
    }
}
