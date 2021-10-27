<template>
  <div class="home">
    <Video />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Video from "../components/Video.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Video,
  },
});
</script>
