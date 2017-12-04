(function(){
  'use script';

  angular
    .module('myApp')
    .controller('meuCtrl', meuCtrl);

  meuCtrl.$inject = ['$scope'];

  function meuCtrl($scope){
    /*variáveis*/

    $scope.app = "Lista de Tarefas";

    $scope.tarefas = [];
    $scope.itens = [];

    $scope.tipos = [
      {
        nome: "Apenas uma tarefa a ser realizada"
      },
      {
        nome: "Uma idéia nova para ser desenvolvida depois"
      },
      {
        nome: "Projeto a ser gerenciado"
      }
    ];

    /*Logica de inicialização*/

    // atribuição de funções ao $scope
    $scope.imprimir = _imprimir;
    $scope.adicionarItem = _adicionarItem;
    $scope.itemSelecionado = _itemSelecionado;
    $scope.editarItem = _editarItem;
    $scope.isItemEditavel = _isItemEditavel;
    $scope.salvarItem = _salvarItem;
    $scope.gravarTarefa = _garvarTarefa;

    /*Funções*/
    function _atribuirFalsoTodos () {
      for (var i = 0; i < $scope.itens.length; i++) {
        $scope.itens[i].editar = false;
      }
    }
    function _imprimir (conteudo) {
      console.log(conteudo);
    }
    function _adicionarItem (item) {
      $scope.itens.push(angular.copy(item));
      delete $scope.item;
    }
    function _itemSelecionado (item) {
      item.selecionado = true;
      $scope.itens = $scope.itens.filter(function (item) {
        if(!item.selecionado) {
          return item;
        }
      });
    }
    function _isItemEditavel (itens) {
      var aux = false;
      itens.filter(function(itens) {
        if(itens.editar) {
          aux = true;
        }
      });
      return aux;
    }
    function _editarItem (item) {
      _atribuirFalsoTodos();
      item.editar = true;
      var descricao = document.getElementById("itemDescricao");
      var duracao = document.getElementById("itemDuracao");
      var situacao = document.getElementById("itemSituacao");
      descricao.value = item.descricao;
      duracao.value = item.duracao;
      situacao.value = item.situacao;
    }
    function _salvarItem () {
      var descricao = document.getElementById("itemDescricao");
      var duracao = document.getElementById("itemDuracao");
      var situacao = document.getElementById("itemSituacao");
      for (var i = 0; i < $scope.itens.length; i++) {
        if($scope.itens[i].editar) {
          $scope.itens[i].descricao = descricao.value;
          $scope.itens[i].situacao = situacao.value;
          $scope.itens[i].duracao = duracao.value;
          $scope.itens[i].editar = false;
        }
      }
      descricao.value = "";
      duracao.value = "";
      situacao.value = "";
    }
    function _garvarTarefa (tarefa) {
      $scope.tarefas.push(angular.copy(tarefa));
      $scope.tarefas.push(angular.copy($scope.itens));
    }
  }
})();