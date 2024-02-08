<template>
  <div class="informationAboutStudent">
    <div class="name">
      <p class="sectionNameUser">имя пользователя</p>
      <p class="andreiVasilev"><b>{{ userName }}</b></p>
    </div>
    <div class="additionalInformation">
      <div class="status">
        <p class="sectionName">статус</p>
        <p class="statusAndGroup">{{ userStatus }}</p>
      </div>
      <div class="group">
        <p class="sectionName">группа</p>
        <p class="statusAndGroup">{{ userGroup }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInformation',
  props: ['userName', 'userStatus', 'userGroup']
}
</script>
