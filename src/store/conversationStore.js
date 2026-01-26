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

  // 估算 token 数量（轻量近似：按字符数/4，CJK略偏保守）
  const estimateTokens = (text) => {
    if (!text) return 0;
    const normalized = String(text).replace(/\s+/g, ' ').trim();
    return Math.ceil(normalized.length / 4);
  };

  // 根据最大 token 构建上下文，包含历史消息 + 新的用户消息
  const buildContextForModel = (maxTokens, newUserText) => {
    const context = [];
    let budget = Math.max(0, maxTokens - estimateTokens(newUserText));

    // 从后往前收集历史消息，直到达到预算
    for (let i = messages.value.length - 1; i >= 0; i--) {
      const msg = messages.value[i];
      const t = estimateTokens(msg?.content || '');
      if (t <= budget) {
        // 去除非必要字段
        context.unshift({
          role: msg.role,
          content: msg.content
        });
        budget -= t;
      } else {
        // 截断过长历史消息，保留前段
        const keepRatio = budget > 0 ? Math.min(1, budget / Math.max(1, t)) : 0;
        if (keepRatio > 0.2) {
          const keepChars = Math.max(16, Math.floor((msg.content || '').length * keepRatio));
          context.unshift({
            role: msg.role,
            content: (msg.content || '').slice(-keepChars) // 保留尾部更贴近最近语义
          });
          budget = 0;
        }
        break;
      }
    }

    // 追加当前用户消息（作为上下文的最后一条）
    context.push({
      role: 'user',
      content: newUserText
    });

    return context;
  };

  // 返回状态和 actions
  return {
    messages,
    clearMessages,
    addUserMessage,
    addAiPlaceholder,
    appendAiContent,
    endAiMessage,
    buildContextForModel,
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
