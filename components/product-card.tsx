import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
    product : Stripe.Product;
}

export const ProductCard = ({product} : Props) => {
    
    const price = product.default_price as Stripe.Price;
    return <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300"> {product.images && product.images[0] &&  (
            <div className="relative h-80 w-full">
                <Image 
                    alt={product.name} 
                    src={product.images[0]}   
                    layout = "fill"
                    objectFit = "cover"
                   />
            </div>
        )}  
            <CardHeader>
            
                    <CardTitle className="text-3xl font-bold text-white mb-2"> 
                        {product.name}
                    </CardTitle>

                    <CardContent>{price && price.unit_amount && 
                        <p className="text-xl"> ${(price.unit_amount / 100).toFixed(2)}</p>}
                    </CardContent>
        
            </CardHeader>
        </Card>
}
