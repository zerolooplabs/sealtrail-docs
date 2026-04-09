// Export audit events as CSV (raw fetch, no SDK)
const params = new URLSearchParams({
  format: "csv",
  after: "2026-01-01T00:00:00Z",
  before: "2026-03-18T00:00:00Z",
});

const csvRes = await fetch(
  `https://api.sealtrail.dev/v1/events/export?${params}`,
  { headers: { Authorization: "Bearer stl_live_..." } }
);

const csv = await csvRes.text();
console.log("CSV preview (first 3 lines):");
console.log(csv.split("\n").slice(0, 3).join("\n"));

// Export as JSON with filters
const jsonParams = new URLSearchParams({
  format: "json",
  after: "2026-01-01T00:00:00Z",
  before: "2026-03-18T00:00:00Z",
  actor: "user_123",
});

const jsonRes = await fetch(
  `https://api.sealtrail.dev/v1/events/export?${jsonParams}`,
  { headers: { Authorization: "Bearer stl_live_..." } }
);

const { export: meta, data } = await jsonRes.json();
console.log(`${meta.count} events exported`);
