﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NewsPortal.Interfaces;
using NewsPortal.Models.ViewModels;

namespace NewsPortal.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsManager _newsManager;
        private readonly ILogger<NewsController> _logger;

        public NewsController(INewsManager newsManager, ILogger<NewsController> logger)
        {
            _newsManager = newsManager;
            _logger = logger;
        }

        [HttpPost]
        public JsonResult GetNews(NewsFilterVM filter, int page = 1, int quantity = 10)
        {
            try
            {
                var news = _newsManager.GetFilteredNews(filter, page, quantity);

                return new JsonResult(new { success = true, data = news });
            }
            catch (Exception ex)
            {
                return new JsonResult(new { success = false, msg = ex.Message });
            }
        }
    }
}