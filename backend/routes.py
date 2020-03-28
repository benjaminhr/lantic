from environs import Env
import requests
import sys

try:
    env = Env()
    env.read_env()  # read .env file, if it exists
    MAPS_API_KEY = env("MAPS_API_KEY")
except:
    print("Error: Google Maps API key missing in .env file")
    sys.exit(1)

"""
  This is called when the API (app.py) gets a request
  at /api/getRoute?from=X&to=Y.

  It should return an array of routes from google maps.
"""

def format_query(query):
    return "+".join(query.split())


def get_routes(from_location, to_location):
    transport_modes = ["driving", "walking", "transit"]
    routes = []
    from_location = format_query(from_location)
    to_location = format_query(to_location)

    for mode in transport_modes:
        url = f"https://maps.googleapis.com/maps/api/directions/json?" \
                f"origin={from_location}&destination={to_location}&key={MAPS_API_KEY}&mode={mode}"

        maps_request = requests.get(url)
        maps_response = maps_request.json()

        if "error_message" in maps_response:
            print("Error getting routes: " + maps_response["error_message"])

        if len(maps_response["routes"]) == 0:
            continue

        routes.append({
            "mode": mode,
            "duration": maps_response["routes"][0]["legs"][0]["duration"]["text"],
            "distance": maps_response["routes"][0]["legs"][0]["distance"]["text"],
            "routes": maps_response["routes"][0]["legs"]
        })

    return {"routes": routes}
