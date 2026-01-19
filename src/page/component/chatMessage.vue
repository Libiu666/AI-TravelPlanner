<script setup>
import loadIng from '@/page/component/loading.vue'
import getChatRes from '@/apis/mysse'
import { ref, onMounted } from 'vue'


defineProps({
  role: String,
  content: String,
  loading: Boolean
})


// AI 回复内容（流式拼接）
/**const aiText = ref('')
// 是否还在加载
const loading = ref(true)

onMounted(async () => {
  // 调用你封装的流式函数
  await getChatRes((chunk) => {
    // ⚠️ chunk 是后端 write 出来的原始字符串
    // 需要解析 SSE
    const lines = chunk.split('\n')

    for (const line of lines) {
      if (!line.startsWith('data:')) continue

      const data = line.replace('data:', '').trim()

      if (data === '[DONE]') {
        loading.value = false
        return
      }

      try {
        const json = JSON.parse(data)
        if (json.content) {
          aiText.value += json.content
        }
      } catch (e) {
        // 非 JSON，忽略
      }
    }
  })

  loading.value = false
})**/
</script>
<template>
  <div class="chat-message" :class="role">
    <div v-if="role==='user'" class="user-message">
        <p>{{ content }}</p>
    </div>
    <!--div class="send-message">
        <van-image width="120px" height="120px" fit="cover" radius="5" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    </div-->
    <!--AI消息-->
    <div v-else class="ai-message">
        <p v-if="content" class="mark-text">{{ content || '大模型回复中…' }}</p>
        <loadIng v-else/>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.chat-message{
    display: flex;
    flex-direction: column;

    .user-message{
        align-self:flex-end;
        margin-top: 15px;
        max-width: 70%;
        opacity: 0;
        transform: translateY(20px);
        animation:fadeUp 0.2s ease-in-out forwards;

        p{
            font-size: 16px;
            line-height: 1.5;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            background-color: #3a71e8;
            color:#fff;
            padding: 5px;
        }

    }
    .send-message{
        align-self:flex-end;
        margin-top: 2px;
        .van-image{
            opacity: 0;
            transform: translateY(20px);
            animation:fadeUp 0.2s ease-in-out forwards;
        }
    }
    .ai-message{
        align-self: flex-start;
        background-color: #fff;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        margin-top: 2px;
        .mark-text{
            font-size:16px;
            line-height: 1.5;
            color: black;
            padding:5px;
            
        }
    }
}
@keyframes fadeUp{
  0%{
    opacity:0;
    transform: translateY(20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
