<template>
  <Home />
  <FloatingCart />
</template>

<script>
import Home from './components/Home';
import FloatingCart from './components/FloatingCart.vue';

export default {
  name: 'App',

  components: {
    FloatingCart,
    Home,
  },
};
</script>
