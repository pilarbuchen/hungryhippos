import { createBoard } from '@wixc3/react-board';
import RecipePagination from '../../../components/recipe-pagination/recipe-pagination';
import { MouseEvent } from 'react';
import { PaginationProps } from 'semantic-ui-react';

export default createBoard({
    name: 'RecipePagination',
    Board: () => <RecipePagination onPageChange={e => e} totalPages={0} activePage={0}/>

});
