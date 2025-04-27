'use client'

import { useCartStore } from "@/store/cart-store"
import { clear } from "console";
import Link from "next/link"
import { useEffect } from "react";


export default function successPage() {

    const {clearCart} = useCartStore();

    useEffect(() => {
        clearCart();
    }, [clearCart])

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="mb-4"> Thank you for your purchase</p>
            
            <Link href= "/products" className="text-blue-600 hover:underline">  Continue Shopping</Link>
        </div>
    )
}