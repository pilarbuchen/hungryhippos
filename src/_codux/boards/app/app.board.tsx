import { createBoard } from '@wixc3/react-board';
import App from '../../../components/App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 744,
        canvasWidth: 810
    }
});
