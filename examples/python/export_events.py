"""Export audit events for compliance reporting."""

import requests

API_KEY = "stl_live_..."
BASE_URL = "https://api.sealtrail.dev"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

# Export as CSV
csv_res = requests.get(
    f"{BASE_URL}/v1/events/export",
    headers=HEADERS,
    params={
        "format": "csv",
        "after": "2026-01-01T00:00:00Z",
        "before": "2026-03-18T00:00:00Z",
    },
)
csv_res.raise_for_status()

with open("audit-export.csv", "w") as f:
    f.write(csv_res.text)
print(f"CSV export saved ({len(csv_res.text)} bytes)")

# Export as JSON with filters
json_res = requests.get(
    f"{BASE_URL}/v1/events/export",
    headers=HEADERS,
    params={
        "format": "json",
        "after": "2026-01-01T00:00:00Z",
        "before": "2026-03-18T00:00:00Z",
        "actor": "user_123",
    },
)
json_res.raise_for_status()

data = json_res.json()
print(f"{data['export']['count']} events exported")
print(f"Period: {data['export']['period']['after']} to {data['export']['period']['before']}")

for event in data["data"]:
    print(f"  {event['timestamp']} | {event['actor']} | {event['action']}")
