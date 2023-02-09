<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <SystemTaskbar></SystemTaskbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import SystemTaskbar from "../components/SystemTaskbar.vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {};
  },
  components: { SystemTaskbar },
});
</script>
