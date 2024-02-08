<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="eturnImg">
          <img src="img/mainImg.svg">
        </div>
        <div class="threeStepsTxt">
          <h1 class="headbandThreeSteps">
            Всего три простых шага!
          </h1>
        </div>
        <div class="listStepsTxt">
          <ol>
            <li class="stepTxt">Авторизируйся через <b>ETU ID</b></li>
            <li class="stepTxt">Выбери или создай список</li>
            <li class="stepTxt">Жди своей очереди!</li>
          </ol>
        </div>
        <div class="mainButton">
          <router-link to="/main">
            <main-button button-text="вперёд" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import MainButton from "@/components/mainButton.vue";

export default {
  name: 'firstPage',
  components: {
    MainButton,
    Header
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/main";
</style>
