var app = angular.module("DosageCalc", []);

var recipe = [];
var index = 0;

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

Array.prototype.getIndexOfObject = function(value){
   for (var i = 0; i < this.length ; i++) {
            if (this[i]["ii"] === value) {
                return i;
            }
     }
}

app.controller("Ingredients", ["$scope", function($scope) {
  $scope.recipe = recipe;
  $scope.originalNumber = 1;
  $scope.newNumber = 1;
  $scope.ingredient = "";
  $scope.quantity = "";
  $scope.choices = ["no unit", "g", "mg", "l", "ml"];
  $scope.add = function() {
    if (ingredient.value != "" && quantity.value != "") {
      recipe.unshift({
        quantity: quantity.value,
        unit: units.value === "no unit" ? null : units.value,
        ingredient: ingredient.value,
        ii: index,
        remove: function() {
          var i = recipe.getIndexOfObject(this.ii);
          recipe.splice(i, 1);
          $("#quantity")
            .focus();
          console.log(recipe);
        }
      });
      quantity.value = "";
      ingredient.value = "";
      index++;
      $("#quantity")
        .focus();
    }
    console.log(recipe);
    console.log(index);
  };
}]);
