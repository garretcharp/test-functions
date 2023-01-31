export function onRequest(context) {
  return new Response(context.request.cf, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}