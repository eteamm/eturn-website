<template>
  <div class="queueBlockAvailable">
    <div class="nameQueueAndTeacher">
      <div class="nameQueue">{{queue_data.name}}</div>
      <div class="nameTeacher">{{queue_data.teacher}}</div>
    </div>
    <div class="divRightButton">
      <router-link to="/queue">
        <button class="joinBtn">вступить</button>
      </router-link>
    </div>
    <div class="moreDetailed">
      <b>Подробнее: </b>
      {{queue_data.more}}
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/mainButton.vue";

export default {
  name: 'blockAvailable',
  components: {MainButton},
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
