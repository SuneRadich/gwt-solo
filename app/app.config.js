
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
            url: '/deck/{difficulty:hard|standard|easy}',
            component: 'deck'
        })

        .state('app.faq', {
            url: '/faq',
            component: 'faq'
        });
}

export default config;
