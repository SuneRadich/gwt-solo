class cardListController {

    constructor(dataService) {

        'ngInject';

        dataService.getData().then((data) => {
            this.data = data;
        });

    }

}

export default cardListController;
