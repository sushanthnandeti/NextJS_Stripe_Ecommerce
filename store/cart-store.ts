import {create} from "zustand";
import {persist} from "zustand/middleware";

export interface cartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string | null;
}

interface CartStore {
    items: cartItem[];
    addItem: (data: cartItem) => void;
}


export const useCartStore = create<CartStore>() (
    persist((set) => ({
        items: [],
        addItem : (item) => set((state) => {
                const existing = state.items.find((i) => i.id === item.id);
                if (existing) {
                    return {
                        items: state.items.map((i) => 
                            i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i    
                        )
                    }
                }

                return {
                    items : [...state.items, item]
                }

            })
        }), {name : "cart"})
    
)
       
