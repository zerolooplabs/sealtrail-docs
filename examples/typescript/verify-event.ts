const res = await fetch("https://api.sealtrail.dev/v1/events/evt_abc123/verify", {
	headers: { Authorization: "Bearer stl_live_..." },
});

const verification = await res.json();
// {
//   valid: true,
//   errors: [],
//   eventHash: "sha256:a1b2c3...",
//   computedHash: "sha256:a1b2c3...",
//   chainIntact: true,
//   verifiedAt: "2026-03-10T14:32:00Z"
// }

if (!verification.valid) {
	console.error("TAMPER DETECTED:", verification.errors);
}
