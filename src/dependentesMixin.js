export default {
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