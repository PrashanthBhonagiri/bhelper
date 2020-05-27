<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <!-- <footerbar/> -->
  </div>
</template>

<script>
import navbar from '@/components/HelloWorld';
import footerbar from '@/components/footer';

export default {
  components: {
    navbar,
    footerbar
  },
  name: 'App'
}
</script>

<style>

</style>
