import wixPay from 'wix-pay';
import {createPaymentForProuct} from 'backend/PayAPI';

$w.onReady(function(){

});

export function buy_click(event) {
    createPaymentForProduct().then(payment => {
        wixPay.startPayment(payment.id, {"termsAndConditionsLink": "https://www.wix.com/velo"});
    });
}