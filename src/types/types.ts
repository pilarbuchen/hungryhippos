import { InputOnChangeData, SemanticICONS } from 'semantic-ui-react';
import { recipes } from '../data/data'

export type IconName = {
    name: SemanticICONS;
};

export type InputValue = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
};

export type RecipeData = typeof recipes;

export type RecipeInfo = {
    title: string;
    ingredients: string[] | string;
    description: string[];
};


