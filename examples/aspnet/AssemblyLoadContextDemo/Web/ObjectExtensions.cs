using System;
using System.IO;
using System.Security.Cryptography;

namespace Web
{
    public static class ObjectExtensions
    {
        public static string Md5(this string file)
        {
            using var md5 = MD5.Create();
            using var stream = File.OpenRead(file);
            var hash = md5.ComputeHash(stream);
            stream.Dispose();
            return BitConverter.ToString(hash).Replace("-", "").ToLower();
        }
    }
}