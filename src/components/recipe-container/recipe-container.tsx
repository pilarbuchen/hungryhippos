import React, { FC } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import RecipeContainer_module from '../../assets/styling/recipe-container.module.scss';
import { RecipeInfo } from '../../types/types';

const RecipeContainer: FC<RecipeInfo> = ({
    title: title,
    ingredients: ingredients,
    description: descrption,
}): JSX.Element => {
    return (
        <Container fluid>
            <Header as="h2">{title}</Header>
            <List bulleted>
                {ingredients
                    .toString()
                    .split(',')
                    .map((index) => (
                        <List.Item>{index}</List.Item>
                    ))}
            </List>
            <p className={RecipeContainer_module.recipedescrption}>{descrption}</p>
        </Container>
    );
};

export default RecipeContainer;
