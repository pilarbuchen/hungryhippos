import { Input } from 'semantic-ui-react'
import Input_module from './input.module.scss';
import { InputValue } from '../../types/types';
import { FC } from 'react';

const InputComp: FC<InputValue> = ({ onChange }): JSX.Element => (
    <Input fluid icon="search" placeholder="Search..." className={Input_module.input} onChange={onChange} />
);

export default InputComp