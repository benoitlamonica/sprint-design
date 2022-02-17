<template>
  <Home />
  <FloatingCart />
  <BottomNav />
</template>

<script>
import Home from './components/Home';
import FloatingCart from './components/FloatingCart.vue';
import BottomNav from './components/BottomNav.vue';

export default {
  name: 'App',

  components: {
    FloatingCart,
    Home,
    BottomNav,
  },
};
</script>
