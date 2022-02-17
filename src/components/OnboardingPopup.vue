<template>
  <div class="absolute bottom-0 bg-onboarding">
    <div class="flex flex-col justify-center items-center p-8">
      <img
        src="@/assets/horse.svg"
        alt=""
      >
      <h2 class="text-white mt-2 font-bold text-xl">
        Besoin d’aide ?
      </h2>
      <p class="text-white text-center mt-2 mb-2">
        Premier paris sur une course hippique ? Réalisons un pari fictif ensemble 🐴
      </p>
      <div class="flex w-full mt-4 justify-between">
        <button class="text-white border border-solid border-white rounded-full w-36 p-3">
          Plus tard
        </button>
        <button class="text-white border border-solid border-red rounded-full p-3 w-36 bg-red">
          C’est parti !
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnboardingPopup'

};
</script>

<style>
.bg-onboarding{
  background-image: url('../assets/onboarding_popup.png');
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: 276px;
}
</style>

