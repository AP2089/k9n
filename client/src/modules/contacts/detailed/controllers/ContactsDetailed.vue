<script lang="ts" setup>
import { provide } from "vue";
import View from "../views/ContactsDetailed.vue";
import useStore from "../stores/contactsDetailed";
import { Store } from "../types/contactsDetailed.d";

const store = useStore() as Store;

provide("store", store);
</script>

<template>
  <View />
</template>
