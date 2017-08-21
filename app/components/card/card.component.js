import cardController from './card.controller';
import cardTemplate from './card.html';
import './card.scss';

const cardComponent = {

    template: cardTemplate,
    bindings: {
        data: '<'
    },
    controller: cardController

};

export default cardComponent;
