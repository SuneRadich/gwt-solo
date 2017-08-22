import discardController from './discard.controller';
import discardTemplate from './discard.html';
import './discard.scss';

const discardComponent = {

    bindings: {
        data: '<'
    },
    template: discardTemplate,
    controller: discardController

};

export default discardComponent;
