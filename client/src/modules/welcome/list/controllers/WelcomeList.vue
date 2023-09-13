<script lang="ts" setup>
import { provide } from "vue";
import View from "../views/WelcomeList.vue";
import useStore from "../stores/welcomeList";
import { Store } from "../types/welcomeList.d";

const store = useStore() as Store;

provide("store", store);
</script>

<template>
  <View />
</template>
