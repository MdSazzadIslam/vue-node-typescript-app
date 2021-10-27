<template>
  <header>
    <div class="header">
      <router-link to="/" class="link">Home</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
 

<style>
header {
  background-color: #24252a;
  height: 50px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
  text-align: center;
  background: #f9f7f7;

  font-size: 20px;
}
</style>
