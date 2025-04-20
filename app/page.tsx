import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {

  const products = await stripe.products.list( {
    expand : ["data.default_price"],
    limit: 10,
  })

  console.log(products)
  return (  
      <div> 
        <section className="rounded bg-neutral-100 py-8 sm:py-12">
          <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2"> 
           <div className="max-w-md space-y-4">
            <h1> Welcome to Manoj's ecommerce site</h1>
            <p className="text-neutral-600"> This is where expectations meets reality</p>
            <Button 
                asChild 
                variant = "default" 
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"> 
              <Link href="/products" 
                    className="inline-flex items-center justify-center rounded-full px-6 py-3"> 
                    Browse All products
              </Link>
            </Button>
          </div>
          </div>
          <div>
            <Image alt = "Banner Image" className="rounded" width={450} height={450} src={products.data[0].images[0]} />
          </div>
        </section>
      </div>
  );
}
