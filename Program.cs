using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Angular_ASPNET_Core_Seed
{
  public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
