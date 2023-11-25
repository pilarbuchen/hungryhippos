import { createBoard } from '@wixc3/react-board';
import NextBackButtons from '../../../components/next-back-buttons/next-back-buttons';

export default createBoard({
    name: 'NextBackButtons',
    Board: () => <NextBackButtons />,
    isSnippet: true,
});
