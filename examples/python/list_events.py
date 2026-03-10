import requests

res = requests.get(
    "https://api.sealtrail.dev/v1/events",
    headers={"Authorization": "Bearer stl_live_..."},
    params={"actor": "user_123", "after": "2026-03-01T00:00:00Z", "limit": 50},
)

body = res.json()
events = body["data"]
next_cursor = body.get("nextCursor")  # None if last page
