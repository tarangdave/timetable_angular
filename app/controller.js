angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {
  

    var listRef = new Firebase("https://fiery-heat-2572.firebaseio.com/");
  var userRef = listRef.push();
  

  var presenceRef = new Firebase("https://fiery-heat-2572.firebaseio.com/.info/connected");
  presenceRef.on("value", function(snap) {
    if (snap.val()) {
      userRef.set(true);

      userRef.onDisconnect().remove();
    }
  });
  
  listRef.on("value", function(snap) {
    $scope.online = snap.numChildren();
  });  

  var ref = new Firebase("https://fiery-heat-2572.firebaseio.com/days");  
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();

  syncObject.$bindTo($scope, 'days');

  $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0 : {
            time: '8.45-9.45',
            booked: false
          },
          1: {
            time: '9.45-10.45',
            booked: false
          },
        2 :{
            time: '11.15-12.15',
            booked: false
          },
          3 : {
            time: '12.15-1.15',
            booked: false
          },
          4 : {
            time: '2.00-3.00',
            booked: false
          },
        5 : {
            time: '3.00-4.00',
            booked: false
          },
            
         6: {
            time: '4.00-5.00',
            booked: false
          },
            
            
          7 : {
            time: '5.00-6.00',
            booked: false
          }
    	  }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0: {
            time: '8.45-9.45',
            booked: false
          },
          1: {
            time: '9.45-10.45',
            booked: false
          },
          2: {
            time: '11.15-12.15',
            booked: false
          },
          3: {
            time: '12.15-1.15',
            booked: false
          },
          4: {
            time: '2.00-3.00',
            booked: false
          },
          5: {
            time: '3.00-4.00',
            booked: false
          },
            
          6: {
            time: '4.00-5.00',
            booked: false
          },
            
            
          7: {
            time: '5.00-6.00',
            booked: false
          }
    	  }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          0: {
            time: '8.45-9.45',
            booked: false
          },
          1: {
            time: '9.45-10.45',
            booked: false
          },
          2: {
            time: '11.15-12.15',
            booked: false
          },
          3: {
            time: '12.15-1.15',
            booked: false
          },
          4: {
            time: '2.00-3.00',
            booked: false
          },
          5: {
            time: '3.00-4.00',
            booked: false
          },
            
          6: {
            time: '4.00-5.00',
            booked: false
          },
            
            
          7: {
            time: '5.00-6.00',
            booked: false
          }
    	  }
      }
    });    

  };
  
});
