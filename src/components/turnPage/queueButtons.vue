<template>
  <div class="UpperButtons">
    <div class="MemberButton">
      <button>участники</button>
    </div>
    <div class="ShareButton">
      <button>поделиться</button>
    </div>
    <router-link to="/main">
    <div class="GoOutButton">
      <button>выйти</button>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'QueueButtons'
}
</script>
