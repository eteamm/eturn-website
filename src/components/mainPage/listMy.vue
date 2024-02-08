<template>
  <block-on-main-page
    v-for="block in queue"
    :key="block.teacher"
    :queue_data="block"
  />
</template>

<script>
import BlockOnMainPage from "@/components/mainPage/blockOnMainPage.vue";
export default {
  name: "listMy",
  components: {
    BlockOnMainPage
  },
  props: {},
  data() {
    return {
      queue: [
        {
          name: "Сдача ТОЭ",
          teacher: "Купова Анастасия Викторовна",
          quantity: 153
        },
        {
          name: "Матан",
          teacher: "Железняк Александр Владимирович",
          quantity: 534
        },
        {
          name: "Помощь по ТОЭ",
          teacher: "Кадун Никита Андреевич",
          quantity: 11
        },
        {
          name: "Eturn",
          teacher: "Васильев Андрей Антонович",
          quantity: 8
        },
        {
          name: "Деканат",
          teacher: "Холод Иван Иванович",
          quantity: 57
        },
        {
          name: "Столовая",
          teacher: "Сгущёнкина Марфа Викентьевна",
          quantity: 215
        },
        {
          name: "Очередь в очередь",
          teacher: "Жырдылбеков Пантелей Микулович",
          quantity: 897
        },
        {
          name: "Сомнительно, но ОКЭЙ",
          teacher: "Тиньков Олег Юрьевич",
          quantity: 1
        },
        {
          name: "Активирование угля",
          teacher: "Щинигачжоу Хый Идинахый",
          quantity: 78
        },
        {
          name: "Промышленное производство бульона пельменей",
          teacher: "Евстипатанова Гюльбайнека Жежвистовна",
          quantity: 1245
        },
      ]
    }
  }
}
</script>
