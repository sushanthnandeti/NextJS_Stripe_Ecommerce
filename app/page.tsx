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
        <section>
          <div> 
            <h1> Welcome to Manoj's ecommerce site</h1>
            <p> This is where expectations meets reality</p>
            <Button asChild variant = "default"> 
              <Link href="/products"> Browse All products</Link>
            </Button>
          </div>'
          <div>
            <Image alt = "Banner Image" width={450} height={450} src={products.data[0].images[0]} />
          </div>
        </section>
      </div>
  );
}
