
<template>
  <div class="QInfo">
    <p style="color: white" class="SubHeader">Название Очереди: {{ name }} </p>
    <input v-model="name" placeholder= "Название Очереди" class="NameBox" />
  </div>
</template>

<script>
  export default {
  name: 'QInfo',
  props: ['qinformation']
}
</script>
