'use server'

import { ProductList } from "@/components/product-list"
import { stripe } from "@/lib/stripe"

export default async function ProductsPage() {

    const products = await stripe.products.list( {
      expand : ["data.default_price"],
    })

    return <ProductList products = {products.data}/ >
}