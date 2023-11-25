import { createBoard } from '@wixc3/react-board';
import  Label from '../../../components/label-comp/label-comp';

export default createBoard({
    name: 'LabelComp',
    Board: () => <Label />,
    isSnippet: true,
});
