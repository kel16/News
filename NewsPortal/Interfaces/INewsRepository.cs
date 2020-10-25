﻿using NewsPortal.Data.Models;
using NewsPortal.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Interfaces
{
    public interface INewsRepository
    {
        IQueryable<News> GetNewsByFilter(NewsFilterVM filter);
    }
}
