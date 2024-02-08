<template>
  <div class="queueInfo">
    <div class="Title">
    <span class="QueueTitle">{{turnTitle}}</span>
    <p class="QueueCreator">{{turnCreator}}</p>
    </div>
    <div class="Quantity">
      <span class="memebersQuantity">{{q}}</span>
      <p class="qpeople">человек</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueueInfo',
  props: ['turnTitle', 'turnCreator', 'q']
}
</script>
