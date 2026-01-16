<script setup>

</script>

<template>
  <div class="chat-message">
    <div class="user-message">
        <p>用户发送的文本用户发送的文本用户发送的文本</p>
    </div>
    <div class="send-message">
        <van-image width="120px" height="120px" fit="cover" radius="5" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    </div>
    <div class="ai-message">
        <p class="mark-text">大模型回复</p>
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
