export function useChatStream() {
    /**
     * 启动流式请求
     * @param {string} text 用户输入
     * @param {(chunk: string) => void} onMessage
     * @param {() => void} onDone
     */
    const startStream = async (text, onMessage, onDone) => {
      const response = await fetch('http://localhost:7000/chatMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chatMessage: [
            { role: 'user', content: text }
          ]
        })
      })
  
      const reader = response.body.getReader()
      const decoder = new TextDecoder('utf-8')
  
      let buffer = ''
  
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
  
        buffer += decoder.decode(value, { stream: true })
  
        // SSE 一条消息以 \n\n 分割
        const parts = buffer.split('\n\n')
        buffer = parts.pop()
  
        for (const part of parts) {
          if (!part.startsWith('data:')) continue
  
          const data = part.replace('data:', '').trim()
  
          if (data === '[DONE]') {
            onDone?.()
            return
          }
  
          const json = JSON.parse(data)
  
          if (json.content) {
            onMessage(json.content)
          }
        }
      }
  
      onDone?.()
    }
  
    return { startStream }
  }
  