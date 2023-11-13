"use client"

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import Container from "@/components/ui/container";

import Summary from "./components/summary";
import CartItem from "./components/cart-item";

const CartPage = () => {
    //Explanation: Se setea un estado que si es true, el componente ha sido montado. Si es False no ha sido montado.
    //Q: Que significa que un componente ha sido montado?? Significa que su html a sido construido en la memoria?? o que??
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart()
    console.log("12- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  This is CartPage cart:", cart)
    
    //Explanation: Cuando "se hace ingresa desde un navegador a la aplicacion" (y esto lo causa el array vacio), setIsMounted, cambia el estado de la variable isMounted, de false, a true.
    //Q: Porque el hecho de que se ejecute setIsMounted(true), automaticamente significa que el componente fue montado? 
    //Q: Que significa que el componente fue montado?? 
    //Q: Que cosas suceden en que orden de las cuales la funcion setIsMounted, seteando a isMOunted a true, es una de ellas?
    useEffect(() => {
        setIsMounted(true);
    }, [])

    // Explanation: Si isMounted es false (aka el componente no ha sido montado), el componente CartPage devuelve null en lugar del html.
    // Q: Para que devuelve null?? Cual era la alternativa a null?
    if(!isMounted) {
        return null;
    }

    return ( 
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem 
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default CartPage;