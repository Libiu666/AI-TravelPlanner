<script setup>

</script>

<template>
  <div class="circle-container">
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
  </div>
  
</template>

<style scoped lang="scss">
    .circle-container{
        display:flex;
        align-items: center;

        .circle{
            width: 7px;
            height: 7px;
            border-radius: 50px;
            background-color: #064996;
            margin: 0 4px;
            animation: colorChange 1s linear infinite;
        }
        .circle:nth-child(1){
            animation-delay: 0s;
        }
        .circle:nth-child(2){
            animation-delay: 0.2;
        }
        .circle:nth-child(3){
            animation-delay: 0.4s;
        }
        .circle:nth-child(4){
            animation-delay: 0.6s;
        }
        .circle:nth-child(5){
            animation-delay: 0.8s;
        }
    }
    @keyframes colorChange{
        0%{
            background-color: #777a8d;
        }
        20%{
            background-color: #777a8d;
        }
        40%{
            background-color: #777a8d;
        }
        60%{
            background-color: #777a8d;
        }
        80%{
            background-color: #777a8d;
        }
    }

</style>
