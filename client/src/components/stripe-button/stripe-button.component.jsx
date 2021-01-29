import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBNzSGQNf4m8lyGA6jvlC8cgURIPMiVjGDeuACrPEtxwGO4k4SAtfPWenIoYhMM1v0apEOGhCaLjcZDUA2HM6Pn001tiq3bBh';

    const onToken = token => {
        axios({
            url:'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment is successfull')
        }).catch(error => {
            console.log('Payment Error: ', error);
            alert('There was an issue with the payment. Please make sure to use the test credit card');
        });
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