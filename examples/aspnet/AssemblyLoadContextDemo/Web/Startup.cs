using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Runtime.Loader;

namespace Web
{
    public class Startup
    {
        public Startup(IWebHostEnvironment env, IConfiguration configuration)
        {
            Env = env;
            Configuration = configuration;
        }

        public IWebHostEnvironment Env;
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews()
                .ConfigureApplicationPartManager(o => ConfigureApplicationParts(Env, o));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                       name: "areas",
                       pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        public static void ConfigureApplicationParts(IWebHostEnvironment env, ApplicationPartManager apm)
        {
            var pluginsPath = Path.Combine(env.WebRootPath, "plugins");
            Directory.CreateDirectory(pluginsPath);
            var assemblyFiles = Directory.GetFiles(pluginsPath, "*.dll", SearchOption.AllDirectories);
            var copyPluginsPath = Path.Combine(pluginsPath, "copy");
            Directory.CreateDirectory(copyPluginsPath);
            var copyAssemblyFiles = Directory.GetFiles(copyPluginsPath, "*.dll", SearchOption.AllDirectories);
            foreach (var copyFile in copyAssemblyFiles)
            {
                var file = copyFile.Replace("\\", "/").Replace("/copy/", "/");
                if (!File.Exists(file))
                {
                    Unload(apm, copyFile);
                    File.Delete(copyFile);
                }
            }
            foreach (var file in assemblyFiles)
            {
                var copyFile = file.Replace("\\", "/").Replace("/plugins/", "/plugins/copy/");
                if (!File.Exists(copyFile) || copyFile.Md5() != file.Md5())
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(copyFile));
                    File.Copy(file, copyFile, true);
                    Unload(apm, copyFile);
                    Load(apm, copyFile);
                }
            }
        }

        private static void Load(ApplicationPartManager apm, string file)
        {
            var alc = new AssemblyLoadContext(file, true);
            alc.Unloading += o => Console.WriteLine($"Unloading {file}");
            using var fs = new FileStream(file, FileMode.Open);
            var assembly = alc.LoadFromStream(fs);
            ApplicationPart ap = file.EndsWith(".Views.dll") ?
                new MyCompiledRazorAssemblyPart(assembly, file) :
                new MyAssemblyPart(assembly, file);
            apm.ApplicationParts.Add(ap);
        }

        [MethodImpl(MethodImplOptions.NoInlining)]
        private static void Unload(ApplicationPartManager apm, string file)
        {
            var ap = file.EndsWith(".Views.dll") ?
                apm.ApplicationParts.FirstOrDefault(o => o is MyCompiledRazorAssemblyPart && (o as MyCompiledRazorAssemblyPart).File == file) :
                apm.ApplicationParts.FirstOrDefault(o => o is MyAssemblyPart && (o as MyAssemblyPart).File == file);
            if (ap != null)
            {
                apm.ApplicationParts.Remove(ap);
                AssemblyLoadContext.All.FirstOrDefault(o => o.Name == file)?.Unload();
            }
        }
    }
}