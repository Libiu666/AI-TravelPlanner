<script setup>

</script>

<template>
  <div class="main-header">
    <div class="main-header-left">
        <p class="name-field">Hi,我是云游宝!</p>
        <p class="intro-section">你的专属旅游助手，可以帮助你规划行程和解答出游问题哦！</p>
    </div>
    <div class="main-header-right">
        <img src="@/assets/img/bicycle-17.png" alt="">
    </div>
  </div>  
</template>

<style scoped lang="scss">
    @font-face{
        font-family:'wenxin';
        src:url('@/assets/font/wenxin.ttf')
    }
    .main-header{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        padding:26px 0;

        .main-header-left{   
            .name-field{
                font-size: 22px;
                color:#4d7cd6;
                font-family: 'wenxin';
            }

            .intro-section{
                font-size:16px;
                font-weight: bold;
                line-height: 2;
            } 
        }
        img{
            width: 100%;
            object-fit: fill;
        }
    }

</style>
