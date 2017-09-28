/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.payment.paypal = Core.payment.paypal || {};

    /**
     * Generate the paypal button with a price
     * Send the client token into tue callback URL
     * @param price
     */
    Core.payment.paypal.generateButton = function (p, key) {
        var price = Math.round(p);
        var currency = data.countryInfo.to;

        paypal.Button.render({

            env: 'production', // sandbox | production

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                sandbox:    'AYPjiLZs4iC3pBCtMZy3m6fziaY4oSrCktjjSXiykXB6Ay5W5_g5uPTd41q0kdBqvsS-r_rgsNui2eBl',
                production: key
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // payment() is called when the button is clicked
            payment: function(data, actions) {

                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: price, currency: 'EUR' }
                            }
                        ]
                    }
                });
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function(data, actions) {

                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function() {
                    service.book.room.validate();
                });
            }

        }, '#paypal-button-container');
    };

})();