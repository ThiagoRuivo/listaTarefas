(function(){
  'use script';
  
  angular
    .module('myApp')
    .service('service', service);
  
  service.$inject = ['$q'];
  
  function service($q){
    /* VARIÁVEIS */
    
    var service = this;
    var teste = 'Inizialização do service completa.';
    
    /* LÓGICA DE INICIALIZAÇÃO */
    
    // atribuição de funções ao service
    service.iniciar = _iniciarService;
    service.verificar = _verificar;
    
    // chamar função para iniciar o service
    service.iniciar();
    
    /* FUNÇÕES */
    
    function _iniciarService () {
      // inserir toda a lógica necessária para iniciar o service
      console.log(teste);
    }
    
    function _verificar (texto) {
      console.log(texto);
    }
    
  }
})();