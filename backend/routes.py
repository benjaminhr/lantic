"""
  This is called when the API (app.py) gets a request 
  at /api/getRoute?from=X&to=Y. 
  
  It should return an array of routes from google maps. 
"""
def getRoute(fromLocation, toLocation):
  routes = {
    "routes":[] # filled with all the routes from fromParam to toParam
  }
  return routes
