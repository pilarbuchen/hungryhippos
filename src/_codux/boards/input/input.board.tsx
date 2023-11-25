import { createBoard } from '@wixc3/react-board';
import InputComp from '../../../components/input/input';

export default createBoard({
    name: 'Input',
    Board: () => <InputComp />,
    isSnippet: true,
});
