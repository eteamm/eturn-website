<template>
  <div class="turnBlockAvailable">
    <div class="nameTurnAndTeacher">
      <div class="nameTurn">{{turn_data.name}}</div>
      <div class="nameTeacher">{{turn_data.teacher}}</div>
    </div>
    <div class="divRightButton">
      <router-link to="/queue">
        <button class="joinBtn">вступить</button>
      </router-link>
    </div>
    <div class="moreDetailed">
      <b>Подробнее: </b>
      {{turn_data.more}}
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/mainButton.vue";

export default {
  name: 'blockAvailable',
  components: {MainButton},
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
