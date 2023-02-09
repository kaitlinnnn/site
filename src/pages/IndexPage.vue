<template>
  <q-page
    class="flex flex-center"
    :style="{ 'background-image': 'url(../src/assets/background.jpeg)' }"
  >
    <div class="window" style="width: 300px">
      <div class="title-bar">
        <div class="title-bar-text">Welcome!!!</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <p>Please consider hiring me to work for you.</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
