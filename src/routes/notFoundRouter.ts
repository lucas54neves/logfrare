/**
 * Função cujo objetivo é rotear uma rota desconhecida
 * @param {Request} request -> Requisição
 */
 export function notFoundRouter(event: FetchEvent) {
  return new Response(`${event.request.url} do not found!`, {
    status: 404
  })
}
