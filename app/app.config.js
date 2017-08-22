
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

        .state('app.deck', {
            url: '/deck',
            component: 'deck'
        })
}

export default config;
