import { createBoard } from '@wixc3/react-board';
import  LabelPointing from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <LabelPointing />,
    isSnippet: true,
});
