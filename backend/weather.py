"""
  This is called when the API (app.py) gets a request 
  at /api/getWeather?lon=x&lat=y
  
  It should return the weather data as a JSON data file
"""
def get():
    weather = {
        "status": "", # general weather classifcation e.g 'sunny','rainy','cloudy'
        "temp": "36.5", # Degrees celsius
        "windSpeed": "8", # Km/h
        "windDirection": "S", # values range from N,S,E,W
    }

    return weather
