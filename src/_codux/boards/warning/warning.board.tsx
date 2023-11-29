import { createBoard } from '@wixc3/react-board';
import  Warning  from '../../../components/warning/warning';

export default createBoard({
    name: 'Warning',
    Board: () => <Warning />,
    isSnippet: true,
});
