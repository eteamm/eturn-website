<template>
  <div>
    <Header title-name="Участники" title-description="изменение прав" />
    <MemberList/>
    <MemberElements/>
  </div>
</template>




<script>
import Header from "@/components/header.vue";
import MemberList from "@/components/createPage/MemberList.vue";
import MemberElements from "@/components/createPage/MemberElements.vue";
export default {
  name: 'Members',
  components: {
    Header,
    MemberList,
    MemberElements
  }
}
</script>




