export async function backuplog(logEntry: string, data: unknown) {
  await fetch("https://api.logflare.app/logs", {
    method: "POST",
    headers: {
      "X-API-KEY": "LfyAMZaQk_y7",
      "Content-Type": "application/json",
      "User-Agent": `Cloudflare Worker via`
    },
    body: JSON.stringify({
      source: "3710e6f8-ee98-47ca-a52b-a748a16e7479",
      log_entry: logEntry,
      metadata: {
        response: data
      }
    })
  })
}
