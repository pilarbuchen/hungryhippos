import InputComp from './input/input';
import Label from './label-comp/label-comp';
import RecipeContainer from './recipe-container/recipe-container';
import SocialIcons from './social-icons/social-icons';
import App_module from '../assets/styling/App.module.scss';
import NextBackButtons from './next-back-buttons/next-back-buttons';
import IconButton from './icon-button/icon-button';
import { useEffect, useState } from 'react';
import { recipes } from '../data/data';
import { RecipeData } from '../types/types';

function App() {
    const [value, setValue] = useState('');
    const [recipe, setRecipes] = useState<RecipeData | any>([
        { name: '', ingredients: [''], instructions: [''], cooking_time: '' },
    ]);
    console.log(recipe?.name);
    useEffect(() => {
        async function fetchData(value: string) {
            for (let i = 0; i < recipes.length; i++) {
                recipes[i].ingredients.forEach((a) =>
                    a.includes(value) ? setRecipes(recipes[i]) : null
                );
            }
        }

        fetchData(value);
    }, [value]);
    return (
        <div className={App_module.biggestappcontainer}>
            <div className={App_module.bodycontainer}>
                <div className={App_module.inputcontainer}>
                    <div className={App_module.maintitlecontainer}>
                        <Label />
                    </div>
                    <div className={App_module.inputcontainer}>
                        <InputComp onChange={(e) => setValue(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className={App_module.recipecontainer}>
                <div className={App_module.exitcontainer}>
                    <IconButton name={'close'} />
                </div>
                <RecipeContainer title={recipe?.name} ingredients={[recipe?.ingredients]} description={[recipe?.instructions]} />
                <div className={App_module.nextbackbuttoncontainer}>
                    <IconButton name={'copy'} />
                    <NextBackButtons />
                </div>
            </div>
            <div></div>
            <div className={App_module.footercontaner}>
                <SocialIcons />
            </div>
        </div>
    );
}

export default App;
