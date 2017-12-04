(function(){
  'use script';
  
  angular
    .module('myApp')
    .directive('fileTxt', fileTxt);
  
  //fileTxt.$inject = [''];
  
  function fileTxt(){

    return {
      require: "ngModel",
      scope: true,
      link: function(scope, elem, attrs, ngModel) {
        elem.on("change", function(e) {
          var reader = new FileReader();
          reader.onload = (function(reader) {
            return function() {
              scope.$apply(function() {

                if(elem[0].id == 'txtTarefas'){
                  scope.teste.minhaTarefa = reader.result;
                }
                
              });        
              return reader.result;
            }
          })(reader);
          reader.readAsText(elem[0].files[0]);
        });      
      }
    }
    
  }
})();