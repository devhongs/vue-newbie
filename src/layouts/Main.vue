<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  }
};
</script>
