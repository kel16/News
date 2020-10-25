using NewsPortal.Data.Models;
using NewsPortal.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Interfaces
{
    public interface INewsManager
    {
        IEnumerable<News> GetFilteredNews(NewsFilterVM filter, int page, int quantity);
        News GetNewsByGuid(Guid guid);
    }
}
