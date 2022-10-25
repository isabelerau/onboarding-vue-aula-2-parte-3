<template>
  <div class="elemento">
    <h2> Infos Cliente</h2>
    <p> Nome: {{ nome }}</p>
    <button class="btn" @click="reiniciar"> Reiniciar nome</button>
    <div>
    <h1>Lista de dependentes</h1>
    <ul>
      <li v-for="dependente in dependentes" :key="dependente"> {{ dependente }}</li>
    </ul>
    <input type="text" v-model="dependente" @keydown.enter="add" />
  </div>
  </div>
</template>

<script>
import dependentesMixin from '@/dependentesMixin';

export default {
  name: 'infos-cliente',
  props: {
    nome: String,
    reiniciar: Function
  },
  mixins: [dependentesMixin]

}
</script>

<style scoped>
.btn {
  margin-bottom: 20px;
}

</style>