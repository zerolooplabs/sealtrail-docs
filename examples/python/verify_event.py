import requests

res = requests.get(
    "https://api.sealtrail.dev/v1/events/evt_abc123/verify",
    headers={"Authorization": "Bearer stl_live_..."},
)

result = res.json()
if not result["valid"]:
    print("TAMPER DETECTED:", result["errors"])
else:
    print("Event integrity verified at", result["verifiedAt"])
