<template>
    <div class="queueBlock1">
      <div class="nameQueue">
        {{queue_data.name}}
      </div>
      <div class="nameTeacher">
        {{ queue_data.teacher }}
      </div>
      <div class="quantityPeople">
        {{queue_data.quantity}} человек
      </div>
    </div>
</template>

<script>
export default {
  name: 'BlockOnMainPage',
  props: {
    queue_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

