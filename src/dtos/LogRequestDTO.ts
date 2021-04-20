export type LogRequestDTO = {
  credentials: {
    apiKey: string
    sourceKey: string
  }
  request: {
    // requestHeaders: Headers
    method: string
    url: string
    userAgent: string | null
    host: string | null
    cfRay: string | null
    cIP: string | null
    cf: unknown
    body: unknown
  }
  response: {
    // responseHeaders: Headers
    responseStatus: number
    responseTime: number
    body: unknown
  }
}
