<template>
  <div class="text-center">
    <h3>Filtrar por continente</h3>
    <div class="btn-group mb-3">
      <button @click="handleClick('Americas')" class="btn btn-dark">AM</button
      ><button @click="handleClick('Europe')" class="btn btn-dark">EU</button
      ><button @click="handleClick('Asia')" class="btn btn-dark">AS</button
      ><button @click="handleClick('Oceania')" class="btn btn-dark">OC</button
      ><button @click="handleClick('Africa')" class="btn btn-dark">AF</button
      ><button @click="handleClick('')" class="btn btn-dark">ALL</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const handleClick = (region) => {
      store.dispatch("filtrarRegion", region);
    };
    return { handleClick };
  },
};
</script>

<style>
</style>