var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AYPjiLZs4iC3pBCtMZy3m6fziaY4oSrCktjjSXiykXB6Ay5W5_g5uPTd41q0kdBqvsS-r_rgsNui2eBl',
    'client_secret': 'EGgt5oA7Wnm-Vc2XJWSe7GWBij0iQYroifdiYeIiBrlVBjzgTWN8u_DIbbWzj9cxo_357o36ulbWtJ15'
});

var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:8080/api/roomBooking/validate?refBookRoom=test",
        "cancel_url": "http://localhost:8080/api/roomBooking/cancelBook?refBookRoom=test"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};


paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});