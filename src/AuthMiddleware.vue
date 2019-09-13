<template>
	<router-view/>
</template>

<script>
  
  export default {
    created() {
      this.$router.beforeEach(function (to, from, next) {
        console.log("START")
        next()
      })
    }
  }

</script>