import { createBoard } from '@wixc3/react-board';
import  SocialIcons  from '../../../components/social-icons/social-icons';

export default createBoard({
    name: 'SocialIcons',
    Board: () => <SocialIcons />,
    isSnippet: true,
});
