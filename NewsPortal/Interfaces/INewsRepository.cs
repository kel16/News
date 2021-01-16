using NewsPortal.Data.Models;
using NewsPortal.Models.ViewModels;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Interfaces
{
    public interface INewsRepository
    {
        IQueryable<News> GetNewsByFilter(NewsFilterVM filter);
        News GetNews(Guid guid);
        Task AddNews(News news);
        void UpdateNews(News oldNews, NewsVM news);
        void DeleteNews(News news);
        void SaveChanges();
        Task SaveChangesAsync();
    }
}
