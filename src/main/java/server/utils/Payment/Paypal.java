package server.utils.Payment;

/**
 * Created by maxime on 27/09/2017.
 */
public class Paypal {

   /* String clientId = "AYPjiLZs4iC3pBCtMZy3m6fziaY4oSrCktjjSXiykXB6Ay5W5_g5uPTd41q0kdBqvsS-r_rgsNui2eBl";
    String clientSecret = "EGgt5oA7Wnm-Vc2XJWSe7GWBij0iQYroifdiYeIiBrlVBjzgTWN8u_DIbbWzj9cxo_357o36ulbWtJ15";

    APIContext apiContext = new APIContext(clientId, clientSecret, "sandbox");

    public Payment createPayement(int price, String url){
        // Set payer details
        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        // Set redirect URLs
        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl("http://localhost:3000/cancel");
        redirectUrls.setReturnUrl("http://localhost:3000/process");

        // Set payment details
        Details details = new Details();
        details.setShipping("1");
        details.setSubtotal("5");
        details.setTax("1");

        // Payment amount
        Amount amount = new Amount();
        amount.setCurrency("USD");
        // Total must be equal to sum of shipping, tax and subtotal.
        amount.setTotal("7");
        amount.setDetails(details);

        // Transaction information
        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction
                .setDescription("This is the payment transaction description.");

        // Add transaction to a list
        List<Transaction> transactions = new ArrayList<Transaction>();
        transactions.add(transaction);

        // Add payment details
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setRedirectUrls(redirectUrls);
        payment.setTransactions(transactions);

        return payment;
    }

    public Payment redirectPayment(Payment payment){
        try {
            Payment createdPayment = payment.create(apiContext);

            Iterator links = createdPayment.getLinks().iterator();
            while (links.hasNext()) {
                Links link = (Links) links.next();
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    link.getHref();
                }
            }
        } catch (PayPalRESTException e) {
            System.err.println(e.getDetails());
        }
    }*/
}
