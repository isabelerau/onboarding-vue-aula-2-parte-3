<template>
  <div class="elemento">
    <h2>Dados Cliente</h2>
    <slot name="cliente"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dados-cliente",
}
</script>

<style>
.elemento {
  flex: 1;
  border: 2px solid #fff;
  color: #fff;
}
</style>