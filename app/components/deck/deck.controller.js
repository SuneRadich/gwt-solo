class deckController {

    constructor(dataService, $scope) {

        'ngInject';

        dataService.getData().then((data) => {
            this.deck = data.cards;
        });

    }

    draw() {

        this.deck = this.deck.filter((card) => {
            return card.used == undefined || card.used !== true;
        });

        if (this.deck.length === 0) {
            this.cardData = null;
            return;
        }

        let card = this.deck[Math.floor(Math.random() * this.deck.length)];
        card.used = true;
        this.cardData = card;
    }


}

export default deckController;
