<template>
  <div>
    <Header title-name="Очередь" title-description="основная информация" />
  </div>
  <div>
    <QueueInfo turn-title="Зачетная неделя" turn-creator="Железняк Александр Владимирович" q="20"/>
  </div>
  <div>
    <ExtraInfo extrainfo="Приходим в ауд. 2317 в 13:00"/>
  </div>
  <div>
    <QueueButtons/>
  </div>
  <Yourturn/>
  <Wholeturn/>
  <div>
    <main-button button-text="ВСТАТЬ В ОЧЕРЕДЬ" />
  </div>
</template>


<script>
import Header from "@/components/header.vue";
import QueueInfo from "@/components/turnPage/queueInfo.vue";
import QueueButtons from "@/components/turnPage/queueButtons.vue";
import MemberInQueue from "@/components/turnPage/memberinqueue.vue";
import MainButton from "@/components/mainButton.vue";
import ExtraInfo from "../components/turnPage/extrainfo.vue";
import Wholeturn from "@/components/turnPage/wholeturn.vue";
import Yourturn from "@/components/turnPage/yourturn.vue";
export default {
  name: 'Queue',
  components: {
    MainButton,
    MemberInQueue,
    QueueButtons,
    Header,
    QueueInfo,
    ExtraInfo,
    Wholeturn,
    Yourturn
  }
}
</script>
