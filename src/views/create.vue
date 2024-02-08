<template>
  <div>
    <Header title-name="Создать" title-description="новая очередь" />
    <MemberList/>
    <MemberElements/>
    <div>
        <QInfo qinformation="Название Очереди"/>
      </div>
    <div>
      <QDescription qinformation="Описание Очереди"/>
    </div>
    <div>
      <QFrequency qfrequency="Частота вступления в очередь"/>
    </div>
    <div>
      <QParameters qparameters="Параметры доступа"/>
    </div>
  </div>
</template>


<script>
import Header from "@/components/header.vue";
import QInfo from "@/components/createPage/CreateInfo.vue";
import ExtraInfo from "@/components/turnPage/extrainfo.vue";
import ElementHeader from"@/components/createPage/CreateHeader.vue";
import QDescription from "@/components/createPage/CreateDescription.vue";
import QFrequency from "@/components/createPage/CreateFrequency.vue";
import QParameters from "@/components/createPage/CreateParameters.vue";
export default {
  name: 'Create',
  components: {
    Header,
    QInfo,
    ExtraInfo,
    ElementHeader,
    QDescription,
    QFrequency,
    QParameters


  }
}
</script>
