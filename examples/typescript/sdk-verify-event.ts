import { SealTrail } from "sealtrail";

const st = new SealTrail({ apiKey: process.env.SEALTRAIL_API_KEY! });

const result = await st.events.verify("evt_abc123");

if (result.valid) {
  console.log("Event integrity verified");
  console.log("Chain intact:", result.chainIntact);
} else {
  console.error("TAMPER DETECTED!");
  console.error("Errors:", result.errors);
  console.error("Expected:", result.computedHash);
  console.error("Got:", result.eventHash);
}
