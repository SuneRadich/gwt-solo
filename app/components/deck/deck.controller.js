class deckController {

    constructor(dataService, helperService) {

        'ngInject';

        this.dataService = dataService;

        dataService.getData().then((data) => {
            this.deck = helperService.shuffleArray(data.cards);
        });

        this.discard = [];

    }

    /**
    * Draw a card from the current deck
    */
    draw() {
        let card = this.deck.pop();
        this.discard.push(card);
        this.cardData = card;
    }

    /**
    * Shuffle the deck, making all cards available again
    */
    shuffle() {
        this.deck = {};
        this.dataService.getData().then((data) => {
            this.deck = data.cards;
            this.discard = [];
            this.cardData = null;
        });
    }


}

export default deckController;
