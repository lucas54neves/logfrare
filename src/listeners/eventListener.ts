import { routes } from "../routes"
import { notFoundRouter } from "../routes/notFoundRouter"

function routerHandler(event: FetchEvent) {
  const url = new URL(event.request.url)
  const route = routes[url.pathname] || notFoundRouter
  return route(event)
}

function handle(event: FetchEvent): Promise<Response> {
  return routerHandler(event)
}

/**
 * Função cujo objetivo é responder um evento.
 * @param {FetchEvent} event -> Evento com a requisição
 */
export function eventListener(event: FetchEvent) {
  event.passThroughOnException()

  const response = handle(event)

  event.respondWith(response)
}