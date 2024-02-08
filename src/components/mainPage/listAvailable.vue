<template>
  <block-available
    v-for="block in turn"
    :key="block.teacher"
    :turn_data="block"
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
      turn: [
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
