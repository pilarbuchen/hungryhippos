import { createBoard } from '@wixc3/react-board';
import  RecipeContainer  from '../../../components/recipe-container/recipe-container';

export default createBoard({
    name: 'RecipeContainer',
    Board: () => <RecipeContainer title={''} ingredients={[]} description={[]} />,
    isSnippet: true,
});
