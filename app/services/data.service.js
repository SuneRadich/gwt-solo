import data from '../data.json';

class DataService {

    constructor($q) {

        'ngInject';

        this.$q = $q;

    }

    getData() {

        return this.$q.resolve(data);
    }

}

export default DataService;
