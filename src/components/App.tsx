import InputComp from './input/input';
import Label from './label-comp/label-comp';
import RecipeContainer from './recipe-container/recipe-container';
import SocialIcons from './social-icons/social-icons';
import App_module from '../assets/styling/App.module.scss';
import NextBackButtons from './next-back-buttons/next-back-buttons';
import IconButton from './icon-button/icon-button';

function App() {
    return (
        <div className={App_module.biggestappcontainer}>
            <div className={App_module.bodycontainer}>
                <div className={App_module.inputcontainer}>
                    <div className={App_module.maintitlecontainer}>
                        <Label />
                    </div>
                    <div className={App_module.inputcontainer}>
                        <InputComp />
                    </div>
                </div>
            </div>
            <div className={App_module.recipecontainer}>
                <div className={App_module.exitcontainer}>
                    <IconButton name={'close'} />
                </div>
                <RecipeContainer />
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
