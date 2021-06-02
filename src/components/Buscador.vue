<template>
  <input
    type="text"
    v-model="texto"
    @keyup="handleInput"
    class="form-control my-3"
  />
</template>

<script>
import { ref } from 'vue';
import { useStore } from "vuex";
export default {
  setup() {
    const texto = ref("");
    const store = useStore();
    const handleInput = () => {
      store.dispatch("filtrarNombre", texto.value);
    };
    return {
      texto,
      handleInput,
    };
  },
};
</script>

<style>
</style>