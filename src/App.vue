<template>
  <div class="bg-lightgray h-full">
    <Home />
    <FloatingCart />
    <BottomNav />
  </div>
</template>

<script>
import Home from './components/Home';
import FloatingCart from './components/FloatingCart';
import BottomNav from './components/BottomNav/BottomNav';

export default {
  name: 'App',

  components: {
    FloatingCart,
    Home,
    BottomNav,
  },
};
</script>
