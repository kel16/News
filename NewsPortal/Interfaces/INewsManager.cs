using NewsPortal.Data.Models;
using NewsPortal.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewsPortal.Interfaces
{
    public interface INewsManager
    {
        IEnumerable<News> GetFilteredNews(NewsFilterVM filter, int page, int quantity);
        News GetNewsByGuid(Guid guid);
        Task AddNews(NewsVM news);
        void ChangeNews(Guid guid, NewsVM news);
        void DeleteNews(Guid guid);
    }
}
