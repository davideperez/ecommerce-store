import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const answer = await fetch(`${URL}/${id}`);

    const result = answer.json()
    
    return result;
}

export default getCategory;