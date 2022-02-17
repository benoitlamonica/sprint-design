<template>
  <div class="bg-lightgray h-full">
    <Home />
    <FloatingCart />
    <BottomNav />
    <OnboardingPopup />
  </div>
</template>

<script>
import Home from './components/Home';
import FloatingCart from './components/FloatingCart';
import BottomNav from './components/BottomNav';
import OnboardingPopup from './components/OnboardingPopup';

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
