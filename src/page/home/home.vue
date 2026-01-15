<script setup>
import intoParagraph from '../component/intoParagraph.vue';
import defaultQuestion from '../component/defaultQuestion.vue';
</script>

<template>
  <div class="content">
    <intoParagraph></intoParagraph>
    <defaultQuestion></defaultQuestion>
  </div>
 
</template>

<style scoped>
  .content{
    padding: 0 15px;
  }

</style>
