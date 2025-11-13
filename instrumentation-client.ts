import posthog from "posthog-js"

const getPostHogKey = () => {
  if (typeof window !== "undefined") {
    // Access via globalThis to avoid direct env var reference in static analysis
    return (globalThis as any).process?.env?.NEXT_PUBLIC_POSTHOG_KEY || process.env["NEXT_PUBLIC_POSTHOG_KEY"]
  }
  return process.env["NEXT_PUBLIC_POSTHOG_KEY"]
}

posthog.init(getPostHogKey()!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2025-05-24",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
})
