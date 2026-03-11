import { SealTrail } from "sealtrail";

const st = new SealTrail({ apiKey: process.env.SEALTRAIL_API_KEY! });

// List with filters
const { data, nextCursor } = await st.events.list({
  actor: "user_123",
  after: "2026-03-01T00:00:00Z",
  limit: 10,
});

console.log(`Found ${data.length} events`);
for (const event of data) {
  console.log(`  ${event.action} by ${event.actor} at ${event.timestamp}`);
}

// Pagination
if (nextCursor) {
  const page2 = await st.events.list({ cursor: nextCursor });
  console.log(`Page 2: ${page2.data.length} events`);
}
