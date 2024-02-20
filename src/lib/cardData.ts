import { SetStateAction } from 'react';

export type CardData = {
  dateModified: null | string;
    idMeal: null | number;
    strArea: null | string;
    strCategory: string;
    strCreativeCommonsConfirmed: null | string;
    strDrinkAlternate: null | string;
    strImageSource: null | string;
    strIngredient1: null | string;
    strIngredient2: null | string;
    strIngredient3: null | string;
    strIngredient4: null | string;
    strIngredient5: null | string;
    strIngredient6: null | string;
    strIngredient7: null | string;
    strIngredient8: null | string;
    strIngredient9: null | string;
    strIngredient10: null | string;
    strIngredient11: null | string;
    strIngredient12: null | string;
    strIngredient13: null | string;
    strIngredient14: null | string;
    strIngredient15: null | string;
    strIngredient16: null | string;
    strIngredient17: null | string;
    strIngredient18: null | string;
    strIngredient19: null | string;
    strIngredient20: null | string;
    strInstructions: null | string;
    strMeal: null | string;
    strMealThumb: null | string;
    strMeasure1: null | string;
    strMeasure2: null | string;
    strMeasure3: null | string;
    strMeasure4: null | string;
    strMeasure5: null | string;
    strMeasure6: null | string;
    strMeasure7: null | string;
    strMeasure8: null | string;
    strMeasure9: null | string;
    strMeasure10: null | string;
    strMeasure11: null | string;
    strMeasure12: null | string;
    strMeasure13: null | string;
    strMeasure14: null | string;
    strMeasure15: null | string;
    strMeasure16: null | string;
    strMeasure17: null | string;
    strMeasure18: null | string;
    strMeasure19: null | string;
    strMeasure20: null | string;
    strSource: null | string;
    strTags: null | string;
    strYoutube: null | string;
};

export type CardProps = {
  data: CardData;
  active: boolean;
  removeCard: (id: number, action: 'right' | 'left') => void;
};

export type SwipeButtonProps = {
  exit: (value: SetStateAction<number>) => void;
  removeCard: (id: number, action: 'right' | 'left') => void;
  id: number;
};
