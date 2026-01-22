<template>  
      <div class="gpt-input-box">
        <van-field
          v-model="text"
          type="textarea"
          rows="1"
          autosize
          placeholder="向云游宝提问…"
          :border="false"
          class="gpt-textarea"
          @keydown.enter.exact.prevent="send"
          @keydown.enter.shift.stop
        />
  
        <van-button
          class="send-btn"
          type="primary"
          size="small"
          :disabled="!text.trim()"
          @click="send"
        >
          发送
        </van-button>
      </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  
  const text = ref('')
  const emit = defineEmits(['send'])
  const send = () => {
    const value = text.value.trim()
    if (!value) return
    emit('send', value)
    text.value = ''
  }
  </script>

  <style scoped> 
  /* 输入框整体 */
  .gpt-input-box {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    background: #fff;
    border-radius: 16px;
    padding: 8px 12px;
    margin-bottom: 6px;
  }
  
  /* 文本域 */
  .gpt-textarea {
    flex: 1;
    font-size: 14px;
    line-height: 20px;
  }
  
  /* 发送按钮 */
  .send-btn {
    border-radius: 12px;
    height: 32px;
  }
  </style>
  