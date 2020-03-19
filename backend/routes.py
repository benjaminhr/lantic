from environs import Env
import requests
import sys

try:
  env = Env()
  env.read_env() # read .env file, if it exists
  MAPS_API_KEY = env("MAPS_API_KEY")
except:
  print("Error: Google Maps API key missing in .env file")
  sys.exit(1)

"""
  This is called when the API (app.py) gets a request
  at /api/getRoute?from=X&to=Y.

  It should return an array of routes from google maps.
"""
def formatQuery(query):
    query = query.split()
    query = "+".join(query)
    return query

def getRoutes(fromLocation, toLocation):
    transportModes = ["driving","walking","transit"]
    routes = []
    fromLocation = formatQuery(fromLocation)
    toLocation = formatQuery(toLocation)

    for mode in transportModes:
        url = f"https://maps.googleapis.com/maps/api/directions/json?origin={fromLocation}&destination={toLocation}&key={MAPS_API_KEY}&mode={mode}"

        mapsRequest = requests.get(url)
        mapsResponse = mapsRequest.json()

        if len(mapsResponse["routes"]) == 0:
          continue

        newMapsResponse = {
            "mode" : mode,
            "duration" : mapsResponse["routes"][0]["legs"][0]["duration"]["text"],
            "distance" : mapsResponse["routes"][0]["legs"][0]["distance"]["text"],
            "routes" : mapsResponse["routes"][0]["legs"]
        }
        routes.append(newMapsResponse)
    return {"routes":routes}
