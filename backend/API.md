# Lantic API docs
- ### endpoints: 
    - GET `{host}/api/getRoutes?from=X&to=Y`
        - NOTE: query parameters must be [URL encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
        - where `X` is a string with the starting destination
        e.g. `Mile End Station`
        - where `Y` is a string with the final
        destination
        e.g. `Bromley-by-bow Station`
        - Example response: 
            ```json
            {
                "routes": [
                    {
                        "mode": "<'driving' | 'transit' | 'walking'>",
                        "duration": "<int> mins",
                        "distance": "<int> km",
                        "routes": [
                            {
                                "distance": {
                                    "text": "<int> km",
                                    "value": "<int>"
                                },
                                "duration": {
                                    "text": "<int> mins",
                                    "value": "<int>"
                                },
                                "end_address": "<string>",
                                "end_location": {
                                    "lat": "<float>",
                                    "lng": "<float>"
                                },
                                "start_address": "<string>",
                                "start_location": {
                                    "lat": "<float>",
                                    "lng": "<float>"
                                },
                                "steps": [
                                    {
                                    "distance": {
                                        "text": "<int> m",
                                        "value": "<int>"
                                    },
                                    "duration": {
                                        "text": "<int> km",
                                        "value": "<int>"
                                    },
                                    "end_location": {
                                        "lat": "<float>",
                                        "lng": "<float>"
                                    },
                                    "html_instructions": "<string>",
                                    "polyline": {
                                        "points": "<int>"
                                    },
                                    "start_location": {
                                        "lat": "<float>",
                                        "lng": "<float>"
                                    },
                                    "travel_mode": "DRIVING"
                                }]
                              }
                           }
                         }
                            
            ```
    - GET `{host}/api/getWeather?lon=X&lat=Y`
        - NOTE: query parameters must be [URL encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
        - where `X` is a float value that is the longitude in degrees
        e.g. `-0.024630`
        - where `Y` is a float value that is the latitude in degrees
        e.g. `51.491620`
        - Example response: 
        ```json
            {
                "description": "broken clouds",
                "feels_like": 6.98,
                "humidity": 71,
                "icon_url": "https://openweathermap.org/img/wn/04n@2x.png",
                "status_id": 803,
                "status_name": "<'clear skydriving' | 'few clouds' | 'scattered clouds | 'broken clouds' | 'shower rain' | 'rain' | 'thunderstorm' | 'snow' | 'mist'>",
                "temperature": "<float>",
                "wind_direction": {
                    "degrees": 220,
                    "letters": "SW",
                    "name": "South West"
                },
                "wind_speed": 9.171438797423049
            }
        ```
