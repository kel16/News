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

        public News GetNewsByGuid(Guid guid)
        {
            return _newsRepository.GetNews(guid);
        }
    }
}
