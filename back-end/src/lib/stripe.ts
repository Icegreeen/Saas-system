import Stripe from "stripe";
import { config } from "../config/config";


export const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16'
})

export const generateCheckout = async (userId: string) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // pix
            mode: 'subscription',
            client_reference_id: userId,
            success_url: `http://localhost:3000/success.html`,
            cancel_url: `http://localhost:3000/success.html`,
            line_items: [{
                price: config.stripe.proPriceId,
                quantity: 1
            }],
        })

        return {
            url: session.url
        }
    } catch (error) {
        
    }
}

export const handleProcessWebhookCheckout = () => {}

export const handleProcessUpdatedSubscription = () => {}