<template>
    <div class="queueBlock1">
      <div class="nameQueue">
        {{turn_data.name}}
      </div>
      <div class="nameTeacher">
        {{ turn_data.teacher }}
      </div>
      <div class="quantityPeople">
        {{turn_data.quantity}} человек
      </div>
    </div>
</template>

<script>
export default {
  name: 'BlockOnMainPage',
  props: {
    turn_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

