import { InputOnChangeData, SemanticICONS } from 'semantic-ui-react';
import { recipes } from '../data/data'

export type IconName = {
    name: SemanticICONS;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, data: any) => void;
};

export type InputValue = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
};

export type RecipePagination = {
    totalPages: number;
    onPageChange: (event: React.MouseEvent<HTMLAnchorElement>, data: any) => void;
    activePage: number;
};

export type RecipeData = typeof recipes;

export type RecipeInfo = {
    title: string;
    ingredients: string[] | string;
    description: string[];
};


