"use client"

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

//??Learn how this work, and why you have to add it to the main layout,
// in /app/layout.tsx

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

     useEffect(() => {
        setIsMounted(true);
     }, [])

    if(!isMounted) {
        return null;
    }
    
    return ( 
        <>
            <PreviewModal />
        </>
     );
}
 
export default ModalProvider;