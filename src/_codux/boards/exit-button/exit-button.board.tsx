import { createBoard } from '@wixc3/react-board';
import IconButton from '../../../components/icon-button/icon-button';
import { MouseEvent } from 'react';

export default createBoard({
    name: 'ExitButton',
    Board: () => <IconButton name={'close'} onClick={e => e} />,
    isSnippet: true,
});
