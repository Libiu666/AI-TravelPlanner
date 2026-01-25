import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useConversationStore = defineStore('conversation', () => {
  const STORAGE_KEY = 'conversation_messages';
  const messages = ref([]);

  const loadFromStorage = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          messages.value = parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load conversation from storage:', e);
    }
  };

  const saveToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value));
    } catch (e) {
      console.error('Failed to save conversation to storage:', e);
    }
  };

  const clearMessages = () => {
    messages.value = [];
    saveToStorage();
  };

  const addUserMessage = (text) => {
    messages.value.push({
      role: 'user',
      content: text
    });
    saveToStorage();
  };

  const addAiPlaceholder = () => {
    const msg = {
      role: 'assistant',
      content: '',
      loading: true
    };
    messages.value.push(msg);
    saveToStorage();
    return messages.value.length - 1; // 返回索引，便于后续更新
  };

  const appendAiContent = (index, chunk) => {
    const m = messages.value[index];
    //收到第一个包时关闭loading
    if (!m&&m.loading) {
      m.loading = false;
    }
    m.content += chunk;
    saveToStorage();
  };

  const endAiMessage = (index) => {
    const m = messages.value[index];
    if (!m) return;
    m.loading = false;
    saveToStorage();
  };

  // 初始化时加载
  loadFromStorage();

  // 返回状态和 actions
  return {
    messages,
    clearMessages,
    addUserMessage,
    addAiPlaceholder,
    appendAiContent,
    endAiMessage,
    loadFromStorage,
    saveToStorage
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
