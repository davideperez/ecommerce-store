import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL);

    const result = await res.json()
    //console.log('01- Hi from get-categories. And this is the categories object:', result )
    
    return result
}

export default getCategories;