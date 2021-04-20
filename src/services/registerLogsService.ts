import { LogRequestDTO } from "../dtos"
import { buildMetadataFromHeaders, makeIdLogs } from "../utils"
import { backuplog } from "../utils/backuplog"

export async function registerLogsService(
  event: FetchEvent
): Promise<Response> {
  await backuplog("Entrou", "OK")
  const { request } = event

  const data = await request.json()

  backuplog("Data", data)

  const workerId = makeIdLogs(6)

  const {
    requestMethod,
    requestUrl,
    requestAgent,
    requestHost,
    requestCfRay,
    requestCIP,
    requestCf,
    // requestHeaders,
    requestBody
  } = data.request

  const {
    responseStatus,
    // responseHeaders,
    responseBody,
    responseTime
  } = data.response

  backuplog("Request", requestBody)

  backuplog("Response", responseBody)

  const logEntry = `${requestMethod} | ${responseStatus} | ${requestCIP} | ${requestCfRay} | ${requestUrl} | ${requestAgent}`

  const metadata = {
    logflare_worker: {
      worker_id: workerId
    },
    request: {
      url: requestUrl,
      method: requestMethod,
      // headers: buildMetadataFromHeaders(requestHeaders),
      // headers: requestHeaders,
      cf: requestCf,
      body: requestBody
    },
    response: {
      // headers: buildMetadataFromHeaders(responseHeaders),
      // headers: responseHeaders,
      origin_time: responseTime,
      status_code: responseStatus,
      body: responseBody
    }
  }

  await backuplog("Time", responseTime)

  const logflareEventBody = {
    source: data.credentials.sourceKey,
    log_entry: logEntry
    // metadata
  }

  const init = {
    method: "POST",
    headers: {
      "X-API-KEY": data.credentials.apiKey,
      "Content-Type": "application/json",
      "User-Agent": `Cloudflare Worker via ${requestHost}`
    },
    body: JSON.stringify(logflareEventBody)
  }

  const response = await fetch("https://api.logflare.app/logs", init)

  // const responseBody2 = await response.json()

  return response
}
