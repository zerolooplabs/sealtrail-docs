import { SealTrail } from "sealtrail";

const st = new SealTrail({ apiKey: process.env.SEALTRAIL_API_KEY! });

const event = await st.events.log({
  actor: "user_123",
  action: "document.signed",
  resource: "doc_456",
  context: { ip: "203.0.113.42" },
});

console.log("Event logged:", event.id);
console.log("Hash:", event.hash);
console.log("Chain position:", event.chain.position);
