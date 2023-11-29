import { createBoard } from '@wixc3/react-board';
import App from '../../../components/App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1016,
        canvasHeight: 927,
        windowWidth: 1024,
        windowHeight: 768

    }
});
