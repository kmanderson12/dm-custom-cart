var FC = FC || {};

function syncFoxyCart() {
  const cart = Alpine.store('cart');
  FC.client
    .request(
      'https://' + FC.settings.storedomain + '/cart?cart=view&output=json'
    )
    .done(function (dataJSON) {
      // Perform custom code here
      if (dataJSON.items.length === 0) {
        // if there are any data-selected === true, then clear them
        cart.clearItems();
        return;
      }

      const options = dataJSON.items[0].options;

      const itemCodes = options
        .filter((o) => o.class === 'item_codes')[0]
        .value.split(',');
      cart.addItems(itemCodes);
    });
}

FC.onLoad = function () {
  const cart = Alpine.store('cart');
  FC.client.on('ready.done', function () {
    // Your custom code goes here.
    syncFoxyCart();
  });

  FC.client.on('cart-item-remove', function () {
    // Your custom code goes here.
    cart.clearItems();
  });
};
