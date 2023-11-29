import ProductPrevieuw from '../components/ProductPreview.jsx';
import ProductService from '../models/ProductService.js';


function ProductsList() {
    const data = ProductService.getProducts();
    return (
        <>
            <ul>
                {
                    data.map((e) =>
                        <li key={e.id}>
                            <ProductPrevieuw product={e} seeMore={false}></ProductPrevieuw>
                        </li>)
                }
            </ul>

        </>
    )
}

export default ProductsList