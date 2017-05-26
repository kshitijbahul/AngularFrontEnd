function RoutesConfig($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'templates/landing-page.html'
        })
        .state('overview',{
            url: '/overview',
            templateUrl: 'templates/overview.html'
        });
    $urlRouterProvider.otherwise('/home');
};
function AngularMaterialColourConfig($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
  $mdThemingProvider.theme('dark-green').backgroundPalette('green').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
}
//export default RoutesConfig;
//,AngularMaterialColourConfig;