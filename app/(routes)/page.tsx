import Billboard from "@/components/Billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import ProductList from "@/components/product-list"; 

export const dynamic = 'force-dynamic';

//?? This is for no cache
export const revalidate = 0;


const HomePage = async () => {
    const products = await getProducts({ isFeatured: true})

    const billboard = await getBillboard("97d16ba9-0cdf-4ba3-8856-6c799294d367") 
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;