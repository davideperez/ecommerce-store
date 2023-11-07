"use client"

import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";


const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items); //?? why state? aledgely it is because is going to be used in an useEffect..., but why?
    const removeAll = useCart((state) => state.removeAll);

    useEffect(()=> {
        if (searchParams.get("success") ) { //?? Who posted that success word on the params?
            toast.success("Payment completed.");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.")
        }
        

    },[searchParams, removeAll])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)
    
    //we need to create a response to this checkout, it is on the useEffect above.
    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
            { productsIds: items.map((item) => item.id)}
        );

        window.location = response.data.url; // ?? whats this line for?
    }
    return ( 
        <div
            className="
                mt-16
                rounded-lg
                bg-gray-50
                px-4
                py-6
                sm:p-6
                lg:col-span-5
                lg:mt-0
                lg:p-8
            "
        >
            <h2 className="text-lg font-medium text-gray-900">
                Order Summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-y boder-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice}/>
                </div>
            </div>
            <Button onClick={onCheckout} className="w-full mt-6">
                Checkout
            </Button>
        </div>
     );
}

export default Summary;