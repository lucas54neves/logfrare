export function homePageRouter(event: FetchEvent) {
  const headers = {
    "Content-Type": "application/json"
  }

  const body = {
    title: 'Logflare',
    description: 'Microservice to log the logs to a Logflare source',
    url: 'https://github.com/lucas54neves/logfrare',
    author: 'Lucas Neves <lucas54neves@outlook.com> (https://github.com/lucas54neves)'
  }

  return new Response(JSON.stringify(body), { headers })
}