import Meal from "../../components/game/meal";
import { getProductData, getProductIds } from "../../utils/fetchUtils";
import { getId } from "./endGame";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productId = parseInt(params.productId, 10);
  const productData = await getProductData(productId);

  return {
    props: {
      productData,
    },
  };
}

function ProductPage({ productData }) {
  return <Meal item={productData} />;
}

export default ProductPage;
