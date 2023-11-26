import { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { IconName } from '../../types/types';

const IconButton: FC<IconName> = ({ name: icon }): JSX.Element => (
    <Button icon>
        <Icon name={icon} />
    </Button>
);

export default IconButton;