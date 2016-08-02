app
.controller('formCtrl', function($scope) {
    var pushKey='-KL1EZR4lwTB_HVa4b4o';
    var city = "Gurgaon";
    var loc = "Subhash Chowk"; 
    var path = 'protectedResidential/'+city+'/'+loc+'/projects/'+pushKey+'/homeDelivery/';
    $scope.items = [];
    firebase.database().ref(path).on('value', function(snapshot) {
        $scope.items = snapshot.val();
    });
    $scope.pushService = function(info) {
        var obj = {
            name: info.name,
            contact: info.contact
        };
        var key = firebase.database().ref(path).push().key;
        var updates = {};
        updates[path+$scope.category+'/'+key] = obj;
        firebase.database().ref().update(updates);
        $scope.homeDeliveryForm.$setPristine();
        $scope.homeDeliveryForm.$setUntouched();
        $scope.info = {};
    }
})
;