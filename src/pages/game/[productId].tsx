// pages/products/[productId].js

import Meal from "../../components/game/meal";
import { getProductData, getProductIds } from "../../utils/fetchUtils"; // Import your API functions

// This function tells Next.js which paths should be pre-rendered
export async function getStaticPaths() {

  const productId = await getProductIds(); // Fetch the product ID from your API
console.log(productId)
  // Return an array containing a single object with the "params" key
  return {
    paths: [{ params: { productId: productId.toString() } }],
    fallback: false, // fallback: false means other routes should 404
  };
}

// This function fetches data for a specific product based on the provided "productId"
export async function getStaticProps({ params }) {
  const productId = parseInt(params.productId, 10); // Parse the "productId" as an integer
  const productData = await getProductData(productId); // Fetch the product data from your API based on the "productId"

  return {
    props: {
      productData,
    },
  };
}

// Your dynamic page component
function ProductPage({ productData }) {
  console.log(productData);

  // Render your product details using "productData"
  return (
<Meal item={productData} />
  );
}

export default ProductPage;