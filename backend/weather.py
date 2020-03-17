# NOTE: The below import & wind_cardinals can be moved inside of getWeather

import requests

wind_cardinals = [
	("N", "North"),
	("NE", "North East"),
	("E", "East"),
	("SE", "South East"),
	("S", "South"),
	("SW", "South West"),
	("W", "West"),
	("NW", "North West")
]

# Gets weather at the given latitude and longtitude int/float co-ordinates
# Returns dictionary with the weather conditions, some of which can be 'None'
# API weather conditions info: https://openweathermap.org/weather-conditions
def get(lat, lon):
	# NOTE: Uses my (Jesus') appid / app key, it has some limitations...
	url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=82694cedde703f7951ad1a3fc6dab044&units=metric"
	# NOTE: This requests.get appears to be blocking / synchronous, not sure.
	response = requests.get(url).json()
	
	response_status = {}
	if "weather" in response:
		value = response["weather"]
		if isinstance(value, list) and len(value) >= 1:
			value = value[0]
			if isinstance(value, dict):
				response_status = value
	
	response_main = {}
	if "main" in response:
		value = response["main"]
		if isinstance(value, dict):
			response_main = value
	
	response_wind = {}
	if "wind" in response:
		value = response["wind"]
		if isinstance(value, dict):
			response_wind = value
	
	icon_url = response_status.get("icon")
	if isinstance(icon_url, str):
		icon_url = f"https://openweathermap.org/img/wn/{icon_url}@2x.png"
	
	wind_speed = response_wind.get("speed")
	if isinstance(wind_speed, (int, float)):
		wind_speed *= 2.2369362920544025
	
	wind_degrees = response_wind.get("deg")
	wind_direction = None
	if isinstance(wind_degrees, (int, float)):
		wind_cardinal = wind_cardinals[int((wind_degrees / 45) + 0.5) % 8]
		wind_direction = {
			"degrees": wind_degrees,
			"letters": wind_cardinal[0],
			"name": wind_cardinal[1]
		}
	
	# NOTE: Any of these properties may be 'None', depending on API result.
	return {
		# Integer ID of weather type or status
		"status_id": response_status.get("id"),
		# String name of weather type or status, like "Clouds"
		"status_name": response_status.get("main"),
		# String description of weather; more detailed version of status_name
		"description": response_status.get("description"),
		# String URL to openweathermap.org's PNG icon for the given weather
		"icon_url": icon_url,
		# Temperature in degrees Celsius
		"temperature": response_main.get("temp"),
		# The temperature it feels like in degrees Celsius
		"feels_like": response_main.get("feels_like"),
		# Humidity % percentage
		"humidity": response_main.get("humidity"),
		# Wind speed in MPH (miles per hour)
		"wind_speed": wind_speed,
		# Wind direction as dictionary {degrees, letters, name} like:
		# {"degrees": 310, "letters": "NW", "name": "North West"}
		"wind_direction": wind_direction
	}
