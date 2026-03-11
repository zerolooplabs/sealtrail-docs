import { SealTrail } from "sealtrail";

const st = new SealTrail({ apiKey: process.env.SEALTRAIL_API_KEY! });

// Iterate over ALL events matching the filter — pages fetched automatically
let count = 0;
for await (const event of st.events.listAutoPaginate({ actor: "user_123" })) {
  console.log(`${event.action} at ${event.timestamp}`);
  count++;
}

console.log(`Total: ${count} events`);
