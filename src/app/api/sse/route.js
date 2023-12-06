// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
const str = "Server-Sent Events是一种用于实现服务器向客户端实时推送数据的技术。它基于HTTP协议，使用长连接来保持服务器与客户端之间的通信。与传统的轮询或基于WebSocket的实时通信相比，SSE具有简单易用、轻量级的特点。";
function iteratorToStream(iterator) {
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await iterator.next()
   
        if (done) {
          controller.close()
        } else {
          controller.enqueue(value)
        }
      },
    })
  }
   
  function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }
   
  const encoder = new TextEncoder()
   
  async function* makeIterator() {
    for await (const index of str) {
        const data = `data: ${JSON.stringify(index)}\n`;
        const chunk = `${data}\n`;
        yield encoder.encode(chunk)
        await sleep(100)
    }
  }
   
  export async function GET() {
    const iterator = makeIterator()
    const stream = iteratorToStream(iterator)
   
    return new Response(stream, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Connection',
        },
    })
  }