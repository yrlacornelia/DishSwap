// [meal].tsx
import OneMeal from "../../components/game/meal";
import meals, { Meal } from "../../lib/data";
import { GetStaticPaths, GetStaticProps } from "next";
type Props = {
  item: Meal;
};

const oneMealPage = ({ item }: Props) => {
  return (
    <OneMeal item={item} />

     );
};

export default oneMealPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = meals.map((item) => ({
    params: { MealName: item.MealName }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const MealName = params?.MealName
    const item = meals.find((data) => data.MealName === MealName)

    return { props: { item } }
  } catch (err) {
    return { props: { errors: console.log("nonono") } }
  }
}
