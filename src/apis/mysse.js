export default async function getChatRes(onMessage) {
    const response = await fetch('http://localhost:7000/chatMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatMessage: [
          { role: 'user', content: '你好呀' }
        ]
      })
    })
  
    const reader = response.body.getReader()
    const decoder = new TextDecoder('utf-8')
  
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
  
      const chunk = decoder.decode(value, { stream: true })
      onMessage?.(chunk)
    }
  }
  