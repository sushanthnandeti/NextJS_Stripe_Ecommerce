'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store"

export default function CheckoutPage () {

    const {items} = useCartStore();

    const price = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

    if (price === 0 || items.length === 0) {
        
        return <div> <h1> Your cart is empty</h1></div>
    } 

    return <div> 
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Order Summary
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <ul>
                        {items.map((item,key) => (
                            <li key={key}>
                                <span> {item.name}</span>
                                <span> ${((item.price * item.quantity)/100).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>

          </div>
}