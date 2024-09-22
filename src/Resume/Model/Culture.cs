using System.Globalization;

namespace Resume.Model;

public class Culture
{
    public required CultureInfo Info { get; set; }
    public required string Icon { get; set; }
}