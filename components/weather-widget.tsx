import { Cloud, Sun, Droplets, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WeatherWidget() {
  // In a real app, this would fetch weather data from an API
  const weather = {
    location: "Portland, OR",
    temperature: 68,
    condition: "Partly Cloudy",
    humidity: 45,
    windSpeed: 8,
    forecast: [
      { day: "Today", high: 68, low: 52, condition: "Partly Cloudy" },
      { day: "Tomorrow", high: 72, low: 54, condition: "Sunny" },
      { day: "Wed", high: 65, low: 50, condition: "Rain" },
    ],
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Sun className="mr-2 h-5 w-5 text-amber-500" />
          Weather
        </CardTitle>
        <CardDescription>{weather.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-blue-400 mr-2" />
            <div>
              <div className="text-2xl font-bold">{weather.temperature}°F</div>
              <div className="text-sm text-muted-foreground">{weather.condition}</div>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center">
              <Droplets className="h-4 w-4 text-blue-500 mr-1" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center">
              <Wind className="h-4 w-4 text-blue-500 mr-1" />
              <span>Wind: {weather.windSpeed} mph</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          {weather.forecast.map((day, index) => (
            <div key={index} className="p-2 bg-muted/30 rounded-md">
              <div className="font-medium">{day.day}</div>
              <div className="text-xs text-muted-foreground">{day.condition}</div>
              <div className="mt-1">
                <span className="font-medium">{day.high}°</span>
                <span className="text-muted-foreground"> / {day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
