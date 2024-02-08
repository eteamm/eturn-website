<template>
  <div class = "MemberInfo">
    <div class = "name">
      <p class = "sectionName">Имя Пользователя</p>
      <p class = "UserName"><b>{{ username }}</b></p>
    </div>
    <div class = "UserInformation">
      <div class = "Status">
        <p class="sectionName">Статус (State)</p>
        <p class = "MemberStatusAndGroup">{{ userstatus }}</p>
      </div>
      <div class = "UserGroup">
        <p class = "sectionName">Группа (Group)</p>
        <p class = "MemberStatusAndGroup">{{ usergroup }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberInformation",
  props: ["username", "userstatus", "usergroup"]
}
</script>
