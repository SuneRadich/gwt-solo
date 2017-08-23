import data from '../data.json';

class DataService {

    constructor($q) {

        'ngInject';

        this.$q = $q;

    }

    /**
    * Return a fresh data set
    */
    getData(type) {
        var localData = angular.copy(data);

        switch(type) {

            case 'standard':
                localData = localData.cards.filter((card) => {
                    return card.id !== 16;
                });
                break;
            case 'hard':
                localData = localData.cards.filter((card) => {
                    return card.id !== 16 && card.id !== 15;
                });
                break;
            case 'easy':
                localData = localData.cards;
        }

        return this.$q.resolve(localData);
    }

}

export default DataService;
