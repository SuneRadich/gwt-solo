class deckController {

    constructor(dataService, helperService, $stateParams) {

        'ngInject';

        this.dataService = dataService;

        this.difficulty = $stateParams.difficulty;

        dataService.getData($stateParams.difficulty).then((data) => {
            this.deck = helperService.shuffleArray(data);
        });

        this.discard = [];

    }

    /**
    * Draw a card from the current deck
    */
    draw() {
        let card = this.deck.pop();
        if (this.cardData) {
            this.discard.push(this.cardData);
        }

        this.cardData = card;
    }

    /**
    * Shuffle the deck, making all cards available again
    */
    shuffle() {
        this.deck = {};
        this.dataService.getData(this.difficulty).then((data) => {
            this.deck = data;
            this.discard = [];
            this.cardData = null;
        });
    }


}

export default deckController;
