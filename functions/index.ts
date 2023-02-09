const cache = caches.default

export async function onRequest(context) {
  
  const res = await cache.match(context.request)
  
  if (res) return res
  
  await cache.put(context.request, new Response("This response IS cached!", {
    headers: {
      'Cache-Control': 'public, s-maxage=60'
    }
  }))
  
  return new Response("This response is not cached...")
}
