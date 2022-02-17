<template>
  <div class="absolute bottom-0 bg-onboarding">
    <div class="flex flex-col justify-center items-center p-10">
      <img
        src="@/assets/horse.svg"
        alt=""
      >
      <h2 class="text-white">
        Besoin d’aide ?
      </h2>
      <p class="text-white text-center mt-2 mb-2">
        Premier paris sur une course hippique ? Réalisons un pari fictif ensemble 🐴
      </p>
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

