# SealTrail

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Tamper-proof audit trails for developers.** Cryptographically verifiable event logging via a simple REST API.

SealTrail appends every audit event to a SHA-256 hash chain, so you can prove your logs haven't been altered. One API call to log, one to verify.

- **Base URL:** `https://api.sealtrail.dev`
- **Auth:** Bearer token with your API key (`stl_live_...` for production, `stl_test_...` for testing)
- **Docs:** [sealtrail.dev/docs](https://sealtrail.dev/docs/)

---

## Quick Start

### 1. Log an event

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

### 2. Query events

```bash
curl "https://api.sealtrail.dev/v1/events?actor=user_123&limit=10" \
  -H "Authorization: Bearer stl_live_..."
```

### 3. Verify integrity

```bash
curl "https://api.sealtrail.dev/v1/events/evt_abc123/verify" \
  -H "Authorization: Bearer stl_live_..."
```

Returns `{ "valid": true, "chainIntact": true }` if the event hasn't been tampered with.

---

## Official SDK

[![npm](https://img.shields.io/npm/v/sealtrail)](https://www.npmjs.com/package/sealtrail)

Install the official Node.js/TypeScript SDK:

```bash
npm install sealtrail
```

```typescript
import { SealTrail } from "sealtrail";

const st = new SealTrail({ apiKey: "stl_live_..." });

// Log an event
const event = await st.events.log({
  actor: "user_123",
  action: "document.signed",
  resource: "doc_456",
});

// Verify integrity
const result = await st.events.verify(event.id);
console.log(result.valid); // true
```

See [SDK documentation](https://sealtrail.dev/docs/sdks/) for full API reference, auto-pagination, error handling, and more.

---

## Documentation

| Resource | Link |
|----------|------|
| Getting Started | [sealtrail.dev/docs](https://sealtrail.dev/docs/) |
| API Reference | [sealtrail.dev/docs/api-reference](https://sealtrail.dev/docs/api-reference/) |
| Authentication | [sealtrail.dev/docs/authentication](https://sealtrail.dev/docs/authentication/) |
| Concepts (Hash Chains) | [sealtrail.dev/docs/concepts](https://sealtrail.dev/docs/concepts/) |
| Error Handling | [sealtrail.dev/docs/error-handling](https://sealtrail.dev/docs/error-handling/) |
| Node.js SDK | [sealtrail.dev/docs/sdks](https://sealtrail.dev/docs/sdks/) |

---

## Postman Collection

Import [`postman/SealTrail.postman_collection.json`](postman/SealTrail.postman_collection.json) into Postman to explore the API interactively.

1. Open Postman and click **Import**
2. Select the JSON file from this repo
3. Set the `api_key` collection variable to your SealTrail API key
4. Run the requests in order (Health Check → Create Event → List → Verify)

---

## Code Examples

Ready-to-use examples in multiple languages:

| Language | Directory |
|----------|-----------|
| TypeScript (SDK) | [`examples/typescript/sdk-*.ts`](examples/typescript/) |
| TypeScript (fetch) | [`examples/typescript/`](examples/typescript/) |
| Python | [`examples/python/`](examples/python/) |
| cURL | [`examples/curl/`](examples/curl/) |

---

## API Overview

### Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/v1/events` | Log a new audit event |
| `GET` | `/v1/events` | Query events with filters |
| `GET` | `/v1/events/:id` | Get a single event |
| `GET` | `/v1/events/:id/verify` | Verify event integrity |

### Chains

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/chains` | List all hash chains |
| `GET` | `/v1/chain/:chainId/status` | Get chain status |

---

## License

MIT - see [LICENSE](LICENSE) for details.

Built by [Zero Loop Labs](https://zerolooplabs.com).
