export function onRequest(context) {
  return new Response(JSON.stringify(context.request.cf), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}