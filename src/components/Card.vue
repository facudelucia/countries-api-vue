<template>
  <div class="card">
    <div class="card-body">
      <h5 class="text-center">{{ pais.name }}</h5>
      <p class="text-center">
        <img :src="pais.flag" class="img-fluid w-50" />
      </p>
      <p class="card-text">
        <span class="badge bg-dark d-block mb-1"
          >Native name: {{ pais.nativeName }}</span
        >
        <span class="badge bg-dark d-block mb-1"
          >Population: {{ numeroFormato(pais.population) }}</span
        >
        <span class="badge bg-dark d-block mb-1"
          >Capital: {{ pais.capital }}</span
        >
        <span class="badge bg-dark d-block mb-1"
          >Region: {{ pais.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pais"],
  setup() {
    const numeroFormato = (num) => {
      return new Intl.NumberFormat("de-DE").format(num);
    };
    return {
      numeroFormato,
    };
  },
};
</script>
