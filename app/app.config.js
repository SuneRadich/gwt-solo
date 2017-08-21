
function config($stateProvider, $urlRouterProvider) {

    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('app', {
            url: '',
            component: 'game'
        })

        .state('app.draw', {
            url: '',
            component: 'card'
        })
}

export default config;
