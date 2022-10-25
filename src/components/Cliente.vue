<template>
  <div class="container">
    <h1> Central de controle do cliente </h1>
    <p> Nome do cliente: {{ nomeCliente }}</p>
    <p> CPF do cliente: {{ cpf | cpf }}</p>
    <input type="text" :value="cpf | cpf" @keydown.enter="formatarCpf" />
    <!-- <input @keydown.tab="alterarNome" /> -->
    <div class="elementos">
      <DadosCliente>
          <p slot="cliente"> Nome: {{ nomeCliente }}</p>
          <p> Idade: {{ idade }}</p>
      </DadosCliente>
      <infos-cliente :nome="nomeCliente" :reiniciar="reiniciarNome" />
    </div>
    <Dependentes />

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
import DadosCliente from "@/components/DadosCliente.vue";
import Dependentes from "./Dependentes.vue";
import dependentesMixin from '@/dependentesMixin';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cliente',
  components: {
    DadosCliente,
    Dependentes
  },
  data() {
    return {
      nomeCliente: '',
      idade: '27 anos',
      cpf: '17002265091',
      processo: '99'
    }
  },
  created() {
    this.nomeCliente = 'Fernanda'
  },
  methods: {
    alterarNome(e) {
      this.nomeCliente = e.target.value;
    },
    evento(e) {
      console.log(e)
      this.nomeCliente = e;
    },
    reiniciarNome() {
      this.nomeCliente = 'Rafael'
    }
  },
  mixins: [dependentesMixin],
 /*  filters: {
    cpf(valor) {
      const arr = valor.split('');
      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  } */

}
</script>

<style scoped>
.container {
  background-color: #6646db;
  color: #fff;
  padding: 10px;
}

.elementos {
  display: flex;
}

.elementos > * {
  margin: 10px;
}
</style>