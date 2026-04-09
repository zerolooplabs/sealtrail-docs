# cURL Examples

Replace `stl_live_...` with your actual API key from the [SealTrail Dashboard](https://console.sealtrail.dev).

## Log an event

```bash
curl -X POST https://api.sealtrail.dev/v1/events \
  -H "Authorization: Bearer stl_live_..." \
  -H "Content-Type: application/json" \
  -d '{
    "actor": "user_123",
    "action": "invoice.approved",
    "resource": "inv_456",
    "context": { "ip": "192.168.1.1", "amount": 1500 }
  }'
```

## List events

```bash
curl "https://api.sealtrail.dev/v1/events?actor=user_123&limit=10" \
  -H "Authorization: Bearer stl_live_..."
```

## List events with date filter

```bash
curl "https://api.sealtrail.dev/v1/events?after=2026-03-01T00:00:00Z&limit=50" \
  -H "Authorization: Bearer stl_live_..."
```

## Get a single event

```bash
curl "https://api.sealtrail.dev/v1/events/evt_abc123" \
  -H "Authorization: Bearer stl_live_..."
```

## Verify event integrity

```bash
curl "https://api.sealtrail.dev/v1/events/evt_abc123/verify" \
  -H "Authorization: Bearer stl_live_..."
```

## Export events (CSV)

```bash
curl -o audit-export.csv "https://api.sealtrail.dev/v1/events/export?format=csv&after=2026-01-01T00:00:00Z&before=2026-03-18T00:00:00Z" \
  -H "Authorization: Bearer stl_live_..."
```

## Export events (JSON)

```bash
curl "https://api.sealtrail.dev/v1/events/export?format=json&after=2026-01-01T00:00:00Z&before=2026-03-18T00:00:00Z&actor=user_123" \
  -H "Authorization: Bearer stl_live_..."
```

## Export events (JSON, with filters)

```bash
curl "https://api.sealtrail.dev/v1/events/export?format=json&after=2026-01-01T00:00:00Z&before=2026-03-18T00:00:00Z&actor=user_123&action=invoice.approved" \
  -H "Authorization: Bearer stl_live_..."
```

## List chains

```bash
curl "https://api.sealtrail.dev/v1/chains" \
  -H "Authorization: Bearer stl_live_..."
```

## Get chain status

```bash
curl "https://api.sealtrail.dev/v1/chain/chn_abc123/status" \
  -H "Authorization: Bearer stl_live_..."
```
