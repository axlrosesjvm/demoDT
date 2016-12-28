angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache','ui.router'])
  

  .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('1Ventana', {
                url: '/1Ventana',
                templateUrl: 'views/1Ventana.html',
                controller: 'ctrl1Ventana'
            })
            .state('altaVentaP', {
                url: '/altaVentaP',
                templateUrl: 'views/altaVentaP.html',
                controller: 'ctrlAltaVentaP'
            })
            .state('2Ventana', {
                url: '/2Ventana',
                templateUrl: 'views/2Ventana.html',
                controller: 'ctrl2Ventana'
            })
            .state('altaVentaC', {
                url: '/altaVentaC',
                templateUrl: 'views/altaVentaC.html',
                controller: 'ctrlaltaVentaC'
            })
            .state('entregarVentas', {
                url: '/entregarVentas',
                templateUrl: 'views/entregarVentas.html',
                controller: 'ctrlentregarVentas'
            })
            .state('editarCombo', {
                url: '/editarCombo',
                templateUrl: 'views/editarCombo.html',
                controller: 'ctrlEditarCombo'
            })
            .state('editar', {
                url: '/editar',
                templateUrl: 'views/editar.html',
                controller: 'ctrlEditar'
            });
        $urlRouterProvider.otherwise('1Ventana');
    })

.config(['$mdIconProvider', function($mdIconProvider) {
  $mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
}])

.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})

    .controller('ctrl1Ventana', function($scope, $state, $http, $window) {

        $scope.irview2 = function(){            
            $state.go('2Ventana');
        }
    })

.controller('ctrl2Ventana', function($scope, $state, $http, $window) {

        $scope.irview1 = function(){        
            $state.go('1Ventana');
        }
    })
    

  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log, $http) {
    

        $http.get('http://localhost/LICORERIA_SISTEMA7/probjsononline.php')
            .success(function(data){   
            $scope.productos= data.productos;
        });


    $scope.imagePath = 'img/washedout.png';

    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  })

  .controller('AppCtrl3', function($scope) {
    var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
});