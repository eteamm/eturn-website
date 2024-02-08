<template>
  <block-available
    v-for="block in queue"
    :key="block.teacher"
    :queue_data="block"
  />
</template>
<script>
import BlockAvailable from "@/components/mainPage/blockAvailable.vue";
export default {
  name: "listAvailable",
  components: {
    BlockAvailable
  },
  props: {},
  data() {
    return {
      queue: [
        {
          name: "Сдача ООП",
          teacher: "Хрен её знает",
          more: "Не приходить"
        }
      ]
    }
  }
}
</script>
