const res = await fetch("https://api.sealtrail.dev/v1/events", {
	method: "POST",
	headers: {
		Authorization: "Bearer stl_live_...",
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		actor: "user_123",
		action: "invoice.approved",
		resource: "inv_456",
		context: { ip: "192.168.1.1", amount: 1500 },
	}),
});

const { data } = await res.json();
console.log(data.hash); // "sha256:a1b2c3..."
console.log(data.chain.position); // 42
