import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);

    const result = await res.json()
    
    return result
}

export default getSizes;