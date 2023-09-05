export async function onRequest(context) {
  return new Response(JSON.stringify(context.request.cf), {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
}
