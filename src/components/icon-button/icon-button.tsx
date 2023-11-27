import { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { IconName } from '../../types/types';

const IconButton: FC<IconName> = ({ name: icon, onClick}): JSX.Element => (
    <Button icon>
        <Icon name={icon} onClick={onClick} />
    </Button>
);

export default IconButton;
