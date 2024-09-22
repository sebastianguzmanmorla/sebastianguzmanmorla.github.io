using System.Globalization;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.JSInterop;

namespace Resume.Extensions;

public static class WebAssemblyHostExtension
{
    public async static Task SetDefaultCulture(this WebAssemblyHost host)
    {
        IJSRuntime JSRuntime = host.Services.GetRequiredService<IJSRuntime>();

        string result = await JSRuntime.InvokeAsync<string>("CultureSelector.get");

        CultureInfo culture = string.IsNullOrEmpty(result)? new CultureInfo("es-CL") : new CultureInfo(result);

        CultureInfo.DefaultThreadCurrentCulture = culture;
        CultureInfo.DefaultThreadCurrentUICulture = culture;
    }
}