var mq = window.matchMedia("(min-width: 1150px)");
var app = angular.module("DosageCalc", []);

var recipe = [],
  choices = ["no unit", "g", "kg", "pound", "ounces", "ml", "l", "teaspoon", "tablespoon", "cup", "pint", "gallon"];
var index = 0;

app.directive('myEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if(event.which === 13) {
        scope.$apply(function() {
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
  $scope.orPeople = "person";
  $scope.newPeople = "person";
  $scope.ingredient = "";
  $scope.quantity = "";
  $scope.choices = choices;
  $scope.personOrPeople = function() {
    if ($scope.originalNumber == 1) {
      $scope.orPeople = "person";
    } else {
      $scope.orPeople = "people";
    }
    if ($scope.newNumber == 1) {
      $scope.newPeople = "person";
    } else {
      $scope.newPeople = "people";
    }
  }
  $scope.add = function() {
    return newIngredient();
  };
  $scope.showMenu = function() {
    return clickMenu();
  };
  $scope.showOriginal = function() {
    return clickOriginal();
  };
  $scope.showNew = function() {
    return clickNew();
  };
}]);

function newIngredient() {
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
      }
    });
    quantity.value = "";
    ingredient.value = "";
    index++;
    $("#quantity")
      .focus();
  }
};

function clickMenu() {
  $("#choose_recipe > h3")
    .toggle(200);
  $(".selector")
    .toggle(200);
}

function clickOriginal() {
  $("#original")
    .show(200);
  $("#new")
    .hide(200);
}

function clickNew() {
  $("#original")
    .hide(200);
  $("#new")
    .show(200);
}
