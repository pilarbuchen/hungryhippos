import InputComp from './input/input';
import Label from './label-comp/label-comp';
import RecipeContainer from './recipe-container/recipe-container';
import SocialIcons from './social-icons/social-icons';
import App_module from './App.module.scss';
import IconButton from './icon-button/icon-button';
import { useState } from 'react';
import { recipes } from '../data/data';
import RecipePagination from './recipe-pagination/recipe-pagination';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Warning from './warning/warning';

function App() {
    const [isVisible, setIsVisible] = useState(true);
    const [copied, setCopied] = useState(false);
    const [value, setValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredRecipes = recipes.filter((item) =>
        item.ingredients.some((item) => item.includes(value))
    );

    const itemsPerPage = 1;

    const handlePageChange = (event: React.MouseEvent<HTMLAnchorElement>, data: any) => {
        event.preventDefault();
        setCurrentPage(data.activePage);
    };

    const onCopy = () => {
        setCopied(true);
    };

    const handleExitRecipeContainer = (event: React.MouseEvent<HTMLButtonElement>, data: any) => {
        event.preventDefault();
        setIsVisible(false);
    };

    const displayItems = filteredRecipes.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const recipeStringToCopy = JSON.stringify(displayItems).replace(/[\[\]{}"]/g, '');

    setTimeout(() => {
        if (copied) {
            setCopied(false);
        }
    }, 2000);

    return (
        <div className={App_module.container}>
            <div className={App_module.bodycontainer}>
                <div className={App_module.leftsidecontainer}>
                    <Label />
                    <InputComp
                        onChange={(e) => {
                            setValue(e.target.value), setIsVisible(true);
                        }}
                    />
                </div>
                {filteredRecipes.length !== 0 ? (
                    <div className={App_module.rigthsidecontainer}>
                        {isVisible ? (
                            <div className={App_module.recipecontainer}>
                                <div className={App_module.exitcontainer}>
                                    <CopyToClipboard onCopy={onCopy} text={recipeStringToCopy}>
                                        <IconButton name={copied ? 'check' : 'copy'} />
                                    </CopyToClipboard>
                                    <IconButton
                                        name={'close'}
                                        onClick={handleExitRecipeContainer}
                                    />
                                </div>
                                <RecipeContainer
                                    title={displayItems[0].name} 
                                    ingredients={displayItems[0].ingredients}
                                    description={displayItems[0].instructions}
                                />
                                <div className={App_module.paginationcontainer}>
                                    <RecipePagination
                                        activePage={currentPage}
                                        onPageChange={handlePageChange}
                                        totalPages={Math.ceil(
                                            filteredRecipes.length / itemsPerPage
                                        )}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={App_module.dummydiv}></div>
                        )}
                    </div>
                ) : (
                    <div className={App_module.warning}>
                        <Warning></Warning>
                    </div>
                )}
            </div>
            <div>
                <div className={App_module.footercontainer}>
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
}

export default App;
