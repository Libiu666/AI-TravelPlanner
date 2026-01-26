<script setup>
import ChatMessage from '@/page/component/chatMessage.vue'
import sendMessage from './sendMessage.vue';
import { ref, nextTick } from 'vue';
import { useChatStream } from '@/composables/useChatStreams';
import { useConversationStore } from '@/store/conversationStore.js'
import { trimMessagesbyTokens } from '@/composables/contextManager.js'

const conversationStore = useConversationStore()

//const messages = conversationStore.messages

const chatListRef = ref(null) // 1. 获取滚动容器的引用

const {startStream}= useChatStream()

// 2. 封装滚动到底部的方法
const scrollToBottom = async () => {
  await nextTick()
  if (chatListRef.value) {
    chatListRef.value.scrollTop = chatListRef.value.scrollHeight
  }
}

/** 用户发送 */
const handleSend = async(text) => {
  // 1️⃣ 用户消息
  conversationStore.addUserMessage(text)
  scrollToBottom() // 发送后滚动
  
  // 2️⃣ AI 占位
  const aiIndex = conversationStore.addAiPlaceholder()
  scrollToBottom() // 占位后滚动

  const context = trimMessagesbyTokens(conversationStore.messages, 800);

  console.log('② 准备调用 startStream')
   // 3️⃣ 启动流式填充（第三步核心）
   await startStream(
    context,
    // onMessage：逐字追加
    (chunk) => {
      console.log('🧩 收到 chunk:', chunk)

      //收到第一个包时关闭loading
      conversationStore.appendAiContent(aiIndex, chunk)
      scrollToBottom() // 实时滚动
    },
    // onDone：结束
    () => {
      /*aiMessage.value.loading = false*/
      conversationStore.endAiMessage(aiIndex)
    }
  )
}
</script>

<template>
<div class="chat-page">
    <div class="chat-list" ref="chatListRef">
      <ChatMessage
        v-for="(item, index) in conversationStore.messages"
        :key="index"
        :role="item.role"
        :content="item.content"
        :loading="item.loading"
      />
    </div>
    <div class="send-message-container">
       <sendMessage @send="handleSend" />
    </div>
</div>
</template>

<style scoped lang="scss">
.chat-page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  .chat-list {
    flex: 1; /* 占据输入框之外的所有空间 */
    overflow-y: auto; /* 允许内部滚动 */
    padding-bottom: 10px;
  }

}

</style>
