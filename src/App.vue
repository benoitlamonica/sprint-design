<template>
  <div class="bg-lightgray h-full">
    <RouterView />
    <FloatingCart />
    <BottomNav />
    <OnboardingPopup />
  </div>
</template>

<script>
import FloatingCart from './components/FloatingCart';
import BottomNav from './components/BottomNav';
import OnboardingPopup from './components/OnboardingPopup';

export default {
  name: 'App',

  components: {
    FloatingCart,
    BottomNav,
    OnboardingPopup
  },
};
</script>
