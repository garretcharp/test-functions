export async function onRequest(context) {
  return new Response(JSON.stringify({
    cf: context.request.cf,
    url: context.request.url,
    keys: Object.keys(context.request)
  }), {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
}
