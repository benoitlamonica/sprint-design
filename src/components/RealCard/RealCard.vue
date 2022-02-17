<template>
  <div class="relative">
    <img
      :src="View"
      alt="View"
    >
    <div class="flex absolute bottom-0 back bg-gradient-to-t from-black w-full h-20 p-3 justify-end items-end">
      <img
        :src="OffIcon"
        class="h-6 w-6"
      />
    </div>
  </div>
  <div class=" pl-3 pb-6 bp-3">
    <div>
      <div class="p-1 rounded-xl bg-lightgray border-2">
        <img
          :src="HorseEmote"
          alt="HorseEmote"
        />
      </div>
      <div class="bg-red p-2 rounded-md ">
        R2CI
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import View from './assets/View.png';
import OffIcon from './assets/volume_off.svg';
import HorseEmote from './assets/HorseEmote.png';

export default defineComponent({
  name:'RealCard',

  setup() {

    return {
      View,
      OffIcon,
      HorseEmote
    };
  }
});
</script>

<style>

</style>