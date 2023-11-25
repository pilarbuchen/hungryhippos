import { createBoard } from '@wixc3/react-board';
import App from '../../../components/App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 744
    }
});
