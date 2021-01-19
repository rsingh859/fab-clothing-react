import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBNzSGQNf4m8lyGA6jvlC8cgURIPMiVjGDeuACrPEtxwGO4k4SAtfPWenIoYhMM1v0apEOGhCaLjcZDUA2HM6Pn001tiq3bBh';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name = 'FAB Clothing LTD'
            billingAddress
            shippingAddress
            img = 'https://svgshare.com/i/CUz.svg'
            description= {`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    );
}

export default StripeButton;