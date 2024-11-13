<template>
  <div>
    <SidebarComponent/>
    <div class="m-sidebar">
      <HeaderComponent :selectedMenu="isHome"/>
      <router-view></router-view>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',

  computed: {
    isHome(){
      return this.$route.path === '/'
    }
  },

  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  }
}
</script>
