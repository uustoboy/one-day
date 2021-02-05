<template>
  <div class="home">
    {{count}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const count = ref(1);
    return {
      count,
    };
  },
});
</script>
<style scoped lang="scss">
.abc{
  @include wh(100);
  @include bgc(red);
}
</style>
