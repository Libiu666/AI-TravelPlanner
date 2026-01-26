import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConversationStore = defineStore('conversation', () => {
  const messages = ref([]);

  const clearMessages = () => {
    messages.value = [];
  };

  const addUserMessage = (text) => {
    messages.value.push({
      role: 'user',
      content: text
    });
  };

  const addAiPlaceholder = () => {
    const msg = {
      role: 'assistant',
      content: '',
      loading: true
    };
    messages.value.push(msg);
    return messages.value.length - 1; // 返回索引，便于后续更新
  };

  const appendAiContent = (index, chunk) => {
    const m = messages.value[index];
    //收到第一个包时关闭loading
    if (m&&m.loading) {
      m.loading = false;
    }
    m.content += chunk;
  };

  const endAiMessage = (index) => {
    const m = messages.value[index];
    if (!m) return;
    m.loading = false;
  };

  // 返回状态和 actions
  return {
    messages,
    clearMessages,
    addUserMessage,
    addAiPlaceholder,
    appendAiContent,
    endAiMessage,
  };
} ,
{
  persist:{
    key: 'conversation_messages',
    paths:['messages'],
    storage: window.localStorage,
  }
}
);
