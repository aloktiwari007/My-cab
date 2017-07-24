angular.module('Cabbooking').controller('LogoutController',function($scope,$http,$location,AuthenticationService,$rootScope){

var logout=function(){

  sessionStorage.clear();
  $rootScope.login=false;
  $rootScope.signup=false;
    $rootScope.booking=true;
    $rootScope.profile=true;
    $rootScope.tariff=true;
    $rootScope.addcab=true;
    $rootScope.driverhome=true;
    $rootScope.invoice=true;
    $rootScope.custtariff=true;

    $rootScope.logout=true;
    $rootScope.adminhome=true;
    $rootScope.changepassword=true;
    $rootScope.driverprofile=true;
    $rootScope.usernav=true;
    $location.path('/home');
}
logout();

})
