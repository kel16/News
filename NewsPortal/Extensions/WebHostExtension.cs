using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NewsPortal.Data;

namespace NewsPortal.Extensions
{
    public static class WebHostExtension
    {
        public static IWebHost Migrate(this IWebHost webHost)
        {
            using (var serviceScope = webHost.Services.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                try
                {
                    context.Database.Migrate();
                }
                catch
                {

                }
            }

            return webHost;
        }

        public static IWebHost SeedingData(this IWebHost webHost)
        {
            using (var serviceScope = webHost.Services.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                var hostingEnvironment = serviceScope.ServiceProvider.GetService<IWebHostEnvironment>();

                if (hostingEnvironment.EnvironmentName == "Development")
                {
                    if (!context.News.Any())
                        DataSeeder.InitNews(context);
                }
            }

            return webHost;
        }
    }
}
