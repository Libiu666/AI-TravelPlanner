<script setup>
import loadIng from '@/page/component/loading.vue'

defineProps({
  role: String,
  content: String,
  loading: Boolean
})

</script>
<template>
  <div class="chat-message" :class="role">
    <!--用户消息-->
    <div v-if="role==='user'" class="user-message">
        <p>{{ content }}</p>
    </div>
    <!--div class="send-image">
        <van-image width="120px" height="120px" fit="cover" radius="5" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    </div-->
    <!--AI消息-->
    <div v-else class="ai-message">
        <loadIng v-if="loading"/>
        <p v-else class="mark-text">{{ content}}</p>
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
    .send-image{
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
        margin-top: 4px;
        .mark-text{
            font-size:16px;
            line-height: 1.5;
            color: black;
            padding:5px;
            white-space: pre-wrap;
            word-break: break-word;
            
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
