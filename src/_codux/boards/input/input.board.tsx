import { createBoard } from '@wixc3/react-board';
import InputComp from '../../../components/input/input';
import { ChangeEvent } from 'react';

export default createBoard({
    name: 'Input',
    Board: () => <InputComp  onChange={function (event: ChangeEvent<HTMLInputElement>): void {
      throw new Error('Function not implemented.');
    } } />,
    isSnippet: true,
});
