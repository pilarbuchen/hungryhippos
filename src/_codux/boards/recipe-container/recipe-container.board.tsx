import { createBoard } from '@wixc3/react-board';
import RecipeContainer from '../../../components/recipe-container/recipe-container';

export default createBoard({
    name: 'RecipeContainer',
    Board: () => (
        <RecipeContainer
            title={'Ttitle'}
            ingredients={['One, Two, Three']}
            description={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet fringilla quam, nec consequat augue pellentesque quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed varius libero et semper vestibulum. Mauris rhoncus volutpat elit, sit amet scelerisque justo lacinia vel. Fusce ac risus eget lorem maximus gravida. Quisque placerat, neque eu eleifend ultricies, tortor neque consequat turpis, nec ullamcorper magna dui eu risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis malesuada felis eu eros aliquet, id viverra lectus scelerisque. Suspendisse at magna ut libero laoreet pellentesque vel sit amet leo. Nulla facilisi. Nulla facilisi. Donec sollicitudin euismod dolor, a ultrices leo feugiat eget. Curabitur et metus id felis lacinia rutrum.',
            ]}
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 424
    }
});
