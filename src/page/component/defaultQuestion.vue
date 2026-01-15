<script setup>

</script>

<template>
  <div class="support-agent">
    <img src="@/assets/img/customer-service-1-24.png" alt=""/>
    <p>云游宝</p>
  </div>
  <div class="customer-service">
    <span class="tips">你可以这样问我</span>
    <div class="customer-service-list">
       <img src="@/assets/img/message.png" alt=""/>
       <p>你好</p> 
    </div>
  </div>
  <div class="huan-yi-huan">
    <img src="@/assets/img/huan-yi-huan.png" alt=""/>
    <p>换一换</p>
  </div>
  
</template>

<style scoped lang="scss">
.support-agent{
    display:flex;
    align-items: center;

    img{
        width:42px;
        height:42px;
        object-fit: cover;
        margin-right: 2px;
    }
    p{
        font-size:14px;
    }

}
.customer-service{
    background-color: #fff;
    margin:10px 0;
    padding:10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    .tips{
        font-size: 16px;
        margin-top: 6px;
    }
    .customer-service-list{
        display:flex;
        align-items:center;
        background-color: #f2f4ff;
        border-radius: 40px;
        margin-top: 10px;
        padding:5px 7px;
        img{
            width: 24px;
            height: 24px;
            object-fit: cover;
        }
        p{
            font-size:14px;
            padding-left: 4px;
        }
    }

}
.huan-yi-huan{
    display: inline-flex;
    background-color: #b4b3b3;
    align-items: center;
    width: 74px;
    border-radius: 20px;
    padding:2px 4px;
    img{
        width: 20px;
        object-fit: cover;
    }
    p{
        display: block;
        font-size:14px;
        padding-left: 4px;
        color: #fff;
    }
}

</style>
