import {
  SealTrail,
  SealTrailError,
  ValidationError,
  RateLimitError,
  QuotaExceededError,
  NotFoundError,
} from "sealtrail";

const st = new SealTrail({ apiKey: process.env.SEALTRAIL_API_KEY! });

try {
  await st.events.log({
    actor: "user_123",
    action: "invoice.approved",
    resource: "inv_456",
  });
} catch (err) {
  if (err instanceof ValidationError) {
    console.error("Validation failed:", err.message);
    console.error("Field errors:", err.details);
  } else if (err instanceof RateLimitError) {
    console.error(`Rate limited. Retry after ${err.retryAfter}s`);
  } else if (err instanceof QuotaExceededError) {
    console.error("Monthly quota exceeded — upgrade your plan");
  } else if (err instanceof NotFoundError) {
    console.error("Resource not found");
  } else if (err instanceof SealTrailError) {
    console.error(`API error [${err.code}]: ${err.message}`);
  } else {
    throw err;
  }
}
