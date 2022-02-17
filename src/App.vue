<template>
  <Home />
  <FloatingCart />
  <BottomNav />
  <OnboardingPopup />
</template>

<script>
import Home from './components/Home';
import FloatingCart from './components/FloatingCart.vue';
import BottomNav from './components/BottomNav.vue';
import OnboardingPopup from './components/OnboardingPopup.vue';

export default {
  name: 'App',

  components: {
    FloatingCart,
    Home,
    BottomNav,
    OnboardingPopup
  },
};
</script>
