import { FC } from 'react';
import { Button, Icon, SemanticICONS } from 'semantic-ui-react'

type IconName = {
    name: SemanticICONS
};

const IconButton: FC<IconName> = ({ name: icon }): JSX.Element => (
    <Button icon>
        <Icon name={icon} />
    </Button>
);

export default IconButton;