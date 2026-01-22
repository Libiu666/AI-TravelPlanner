export default async function getbaseStreamsAPI(role,content) {
     return fetch('http://localhost:7000/chatMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatMessage: [
          { role: role, content: content }
        ]
      })
    })
  }
  