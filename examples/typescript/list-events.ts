const params = new URLSearchParams({
	actor: "user_123",
	after: "2026-03-01T00:00:00Z",
	limit: "50",
});

const res = await fetch(`https://api.sealtrail.dev/v1/events?${params}`, {
	headers: { Authorization: "Bearer stl_live_..." },
});

const { data, nextCursor } = await res.json();
// data: Event[]
// nextCursor: "eyJjcmVhdGVkQXQiOi4uLn0=" (if more pages)
