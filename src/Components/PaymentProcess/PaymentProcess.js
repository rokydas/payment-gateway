import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import './PaymentProcess.css';

const stripePromise = loadStripe('pk_test_51HZu4nGMrB3VGJWLUMsFnqrt1q6p3idNDzzrSCCtKt9ldGE41rZ7vqIzefo7pXA9rYtPqpdWbCeXOR8LdJ1kI5FH00zxKMSaIy');

const PaymentProcess = () => {
    return (
        <div className="payment">
            <Elements className="payment" stripe={stripePromise}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </Elements><br/>
            <button className="btn btn-primary">Submit</button>
        </div>
    );
};

export default PaymentProcess;