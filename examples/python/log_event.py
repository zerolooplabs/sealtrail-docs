import requests

res = requests.post(
    "https://api.sealtrail.dev/v1/events",
    headers={"Authorization": "Bearer stl_live_..."},
    json={
        "actor": "user_123",
        "action": "invoice.approved",
        "resource": "inv_456",
        "context": {"ip": "192.168.1.1", "amount": 1500},
    },
)

data = res.json()["data"]
print(data["hash"])             # "sha256:a1b2c3..."
print(data["chain"]["position"])  # 42
