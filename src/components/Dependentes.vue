<template>
  <div>
    <h1>Lista de dependentes</h1>
    <ul>
      <li v-for="dependente in dependentes" :key="dependente"> {{ dependente }}</li>
    </ul>
    <input type="text" v-model="dependente" @keydown.enter="add" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dependentes",
  data() {
    return {
      dependentes: [ 'João', 'Maria', 'Isadora' ],
      dependente: ''
    }
  },
  methods: {
    add() {
      this.dependentes.push(this.dependente);
      this.dependente = '';
    }
  }

}
</script>

<style>
li {
  list-style-type: none;
}
</style>