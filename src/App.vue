<template>
  <div id="app">
    <div class="wrapper">
      <router-view ></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.wrapper {
    width: 100%;
}


</style>
