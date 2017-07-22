angular.module('Cabbooking').controller('ProfileController',function($scope,$http,$location){

  var display=function()
  {
    $scope.cemail=sessionStorage.getItem('cust_id');
    console.log($scope.cemail);
    $scope.currentbookingtype="current";
    $http.get('/api/booking/'+$scope.cemail).then(function(response)
  {



console.log(response.data);
          //  $scope.client=response.data;
              var a=[];
              var b=[];
            for(i=0;i<response.data.length;i++)
            {
              console.log(response.data[i].Drivername);
              if(response.data[i].Drivername=="Not Allocated Yet")
              {

                     a.push(response.data[i]);
                    // $scope.client1=a;
                    // console.log($scope.client1.Drivername);
              }
              else {

                  b.push(response.data[i]);
              }
            }
            $scope.client1=a;
            $scope.client=b;
            console.log($scope.client1);
  })
// $scope.Advancebookingtype="Advance";
//
//   $http.get('/api/booking/'+$scope.cemail+'/'+$scope.Advancebookingtype).then(function(response)
// {
//
//
//
// console.log(response.data);
//           $scope.client1=response.data;
//
// })
  }

display();

$scope.delete=function(data)
{



      $scope.record=data;
      $http.delete('/api/booking/'+$scope.record._id).then(function(response){

        alert("deleted ");
        display();
      })

  }





})
