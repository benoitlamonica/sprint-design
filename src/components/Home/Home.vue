<template>
  <img
    class="fixed h-24 z-10"
    :src="header"
  />
  <div class="grid grid-cols-1 gap-2.5 top-24 relative pt-2.5 px-2.5">
    <img
      v-for="(section, index) in sections"
      :key="index"
      :src="section"
      class="block"
    />
  </div>
</template>

<script>
import { useSections } from './useSections';

export default {
  name: 'Home',

  setup() {
    const { header, sections } = useSections();

    return {
      sections,
      header
    };
  } 
};
</script>