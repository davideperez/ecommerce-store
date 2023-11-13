import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL);

    //const result = await res.json()
    //console.log(">>>>>>>>>>>>>>>>>>>>>>> This is result:", result)
    console.log("02- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  This is getCategories res:", res)

    return res.json()
}

export default getCategories;