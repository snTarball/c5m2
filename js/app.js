(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuy = this;
  itemsToBuy.items = ShoppingListCheckOffService.getToBuyItems();

  itemsToBuy.moveItem = function (key, item) {
    ShoppingListCheckOffService.moveItem(key, item);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of already bought shopping items
  var toBuyItems = [
    { name: "cookies",         quantity: 10 },
    { name: "chocolate bars",  quantity: 5 },
    { name: "ice creams",      quantity: 15 },
    { name: "milk bottles",    quantity: 2 },
    { name: "milk shakes",     quantity: 20 }
  ];
  // List of already bought items
  var boughtItems = [];

  service.moveItem = function(key, item) {
    boughtItems.push(item);
    toBuyItems.splice(key, 1);
  }

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

};

})();