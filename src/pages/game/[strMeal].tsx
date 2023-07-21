// // [meal].tsx
// import OneMeal from "../../components/game/meal";
// import meals, { Meal } from "../../lib/data";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { loadFromLocalStorage } from "../../utils/LocalStorageUtils";

// //instead here we dont want props this we take from storage 
// type Props = {
//   item: Meal;
// };

// const oneMeal = ({ item }: Props) => {
//   return (
//     <OneMeal item={item} />

//      );
// };

// export default oneMeal;

// const fetchLocal = () => {
// const meals = loadFromLocalStorage("meals") || []
// // console.log(meals)
// // const paths = meals.map((item) => ({
// //   params: { strMeal: item.strMeal }
// // }))
// // console.log(paths)
// return meals
// }


// export const getStaticPaths: GetStaticPaths = async () => {
//   const meaals = loadFromLocalStorage("meals");
//   console.log(meaals);

//   const paths = meals.map((item) => ({
//     params: { strMeal: item.MealName }
//   }));

//   return { paths, fallback: false };
// };


// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const mealas = loadFromLocalStorage("meals")
//   console.log(meals)
//   try {
//     const strMeal = params?.strMeal
//     const item = meals.find((data) => data.MealName === strMeal)

//     return { props: { item } }
//   } catch (err) {
//     return { props: { errors: console.log("nonono") } }
//   }
// }
