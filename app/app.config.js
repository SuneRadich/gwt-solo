
function config($stateProvider, $urlRouterProvider) {

    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('app', {
            url: '',
            component: 'game'
        })

        .state('app.cardlist', {
            url: '/list',
            component: 'cardList'
        })
}

export default config;
