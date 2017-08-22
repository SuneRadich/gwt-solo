import data from '../data.json';

class DataService {

    constructor($q) {

        'ngInject';

        this.$q = $q;

    }

    /**
    * Return a fresh data set
    */
    getData() {
        return this.$q.resolve(angular.copy(data));
    }

}

export default DataService;
