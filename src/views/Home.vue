<template>
  <div>
    <global-component />
    <local-component />
  </div>
</template>

<script>
  import LocalComponent from '@/components/local-component';

  export default {
    name: "Home",
    components: {
      LocalComponent
    },
    mounted() {
      console.log('----------------------------------- home');
      console.log(this)
    }
  };
</script>
