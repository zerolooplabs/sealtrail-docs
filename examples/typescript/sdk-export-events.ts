import { writeFileSync } from "node:fs";
import { SealTrail } from "sealtrail";

const st = new SealTrail({ apiKey: process.env.SEALTRAIL_API_KEY! });

// Export as CSV
const csv = await st.events.export({
  format: "csv",
  after: "2026-01-01T00:00:00Z",
  before: "2026-03-18T00:00:00Z",
});

writeFileSync("audit-export.csv", csv as string);
console.log("CSV export saved to audit-export.csv");

// Export as JSON
const json = await st.events.export({
  format: "json",
  after: "2026-01-01T00:00:00Z",
  before: "2026-03-18T00:00:00Z",
  actor: "user_123",
});

if (typeof json !== "string") {
  console.log(`${json.export.count} events exported`);
  console.log(`Period: ${json.export.period.after} to ${json.export.period.before}`);
  for (const event of json.data) {
    console.log(`  ${event.timestamp} | ${event.actor} | ${event.action}`);
  }
}
