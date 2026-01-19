<script setup>
import ChatMessage from '@/page/component/chatMessage.vue'
import sendMessage from './sendMessage.vue';
import { ref } from 'vue';

const messages = ref([])

/** 用户发送 */
const handleSend = (text) => {
  // 1️⃣ 用户消息
  messages.value.push({
    role: 'user',
    content: text
  })
  // 2️⃣ AI 占位消息（第二步核心）
  messages.value.push({
      role: 'assistant',
      content: '',
      loading: true
  })
}
</script>

<template>
<div class="chat-page">
    <div class="chat-list">
      <ChatMessage
        v-for="(item, index) in messages"
        :key="index"
        :role="item.role"
        :content="item.content"
        :loading="item.loading"
      />
    </div>
    <sendMessage @send="handleSend" />
</div>
</template>

<style scoped lang="scss">

</style>
