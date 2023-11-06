"use client"

import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCard {
    data: Product
}

const ProdcutCard: React.FC<ProductCard> = ({
    data
}) => {
    const router = useRouter();
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        //the line below is going to override the onClick{handleClick} of the main div.
        event.stopPropagation();

        previewModal.onOpen(data)
    }

    return ( 
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rouwnded-xl bg-gray-100 relative">
                <Image 
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton   
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                        <IconButton   
                            onClick={() => {}}
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="">
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
     );
}
 
export default ProdcutCard;