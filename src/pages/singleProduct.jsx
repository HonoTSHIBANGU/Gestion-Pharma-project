import { useParams } from "react-router-dom";
import ProductService from "../models/ProductService.js";
import ProductPreview from "../components/ProductPreview.jsx";


function singleProduct() {

    const { id } = useParams();
    const data = ProductService.getProducts();
    const product = data.find((e) => e.id === id);
    return (
        <>
            <ProductPreview produit={product} seeMore={true}></ProductPreview>

        </>
    )
}

export default singleProduct