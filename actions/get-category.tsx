import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const answer = await fetch(`${URL}/${id}`);
    console.log("This is answer:", answer)

    const result = answer.json()
    
    console.log(">>>>>>>>>>>>>>>>>>>>>>> This is result:", result)
    return result;
}

export default getCategory;