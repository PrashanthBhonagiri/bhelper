<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/HelloWorld';

export default {
  components: {
    navbar,
  },
  name: 'App'
}
</script>

<style>

</style>
