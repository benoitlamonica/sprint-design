<template>
  <div class="flex flex-row justify-center items-center fixed w-full bg-lightgray bottom-0 left-0 h-20">
    <div
      v-for="(menuItem, index) in menuItems"
      :key="index"
    >
      <div class="w-20">
        <div
          v-if="!menuItem.img"
          class="rounded-full h-7 w-7 bg-gray opacity-25 m-auto"
        />
        <img
          v-else
          :src="menuItem.img"
          alt="Coucou"
          class="m-auto h-7 w-7"
        >
        <p class="text-gray text-xxs text-center mt-2 font-bold">
          {{ menuItem.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMenuItems } from './useMenuItems';
export default {
  setup() {
    const { menuItems } = useMenuItems();
    return {
      menuItems
    };
  }
};
</script>