<template>
  <PageLayout>
    <main-header slot="header" />
    <main-content slot="content" />
  </PageLayout>
</template>

<script>
import PageLayout from '../../components/PageLayout.vue';
import MainContent from './_components/MainContent.vue';
import MainHeader from './_components/MainHeader.vue';

export default {
  name: 'MainPage',
  components: {
    PageLayout,
    MainContent,
    MainHeader,
  },
};
</script>
