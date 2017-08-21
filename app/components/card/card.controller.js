class cardController {

    constructor(dataService) {

        'ngInject';

        dataService.getData().then((data) => {
            console.log('dat', data);
            this.data = data;
        });

    }

}

export default cardController;
