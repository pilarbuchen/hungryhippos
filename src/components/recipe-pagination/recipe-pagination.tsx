// RecipePagination.tsx
import React, { FC } from 'react';
import { Pagination } from 'semantic-ui-react';
import { RecipePagination } from '../../types/types';

const RecipePagination: FC<RecipePagination> = ({
    totalPages,
    onPageChange,
    activePage,
}): JSX.Element => {
    return (
        <Pagination
            boundaryRange={0}
            ellipsisItem={null}
            totalPages={totalPages}
            onPageChange={onPageChange}
            activePage={activePage}
        />
    );
};

export default RecipePagination;
