import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import toast from "react-hot-toast";

import { Product } from "@/types"

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    //??: the persist Zustand's middleware, makes the state persistent across different sessions.
    //??: The persist middleware takes the interface and applies it to the useCart hook. (ish)
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find( (item) => item.id === data.id);
            
            if (existingItem) {
                return toast("Item already in cart.")
            }
            
            set({ items: [...get().items, data]}) // ?? learn more about this.
            toast.success("Item added to cart.")         
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)]})
            toast.success("Item removed from the cart.")         
        },
        removeAll: () => set({ items: []}),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;