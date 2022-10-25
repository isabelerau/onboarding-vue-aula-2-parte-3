import Vue from 'vue'
import App from './App.vue'
import InfosCliente from '@/components/InfosCliente.vue'

Vue.config.productionTip = false;
Vue.component('infos-cliente', InfosCliente)
//utilizado em casos muito especiais, pois sendo registrado globalmente será aplicado em todos os componentes da aplicação
/* Vue.mixin({
  created() {
    console.log('mixin')
  },
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
}) */
Vue.filter('cpf', function(valor) {
  const arr = valor.split('');
  arr.splice(3, 0, '.');
  arr.splice(7, 0, '.');
  arr.splice(11, 0, '-')
  return arr.join('')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
