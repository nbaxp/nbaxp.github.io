using Microsoft.AspNetCore.Mvc.ApplicationParts;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace Web
{
    public class MyAssemblyPart : AssemblyPart, ICompilationReferencesProvider
    {
        public MyAssemblyPart(Assembly assembly, string assemblyFile) : base(assembly)
        {
            this.File = assemblyFile;
        }

        public string File { get; }

        IEnumerable<string> ICompilationReferencesProvider.GetReferencePaths()
        {
            return Array.Empty<string>();
        }
    }
}