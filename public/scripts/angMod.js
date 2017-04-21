/**
 * Created by karthick on 21/04/17.
 */

var assessmentApp = angular.module('assessmentApp', ['routeService','ui.bootstrap','ui.router']);

function AssessmentRouteConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/', 'products').otherwise('/');

    $stateProvider.state('products', {
        url: '/products',
        controller: ProductCtrl,
        templateUrl: '../pages/product_list_page.html',
        resolve: {
            getProducts: getProducts
        }
    })
}

assessmentApp.config(AssessmentRouteConfig);

function getProducts($q, $state, route){

    var deferred = $q.defer();
    route.get({entity: "getProducts"}, function (success) {
        deferred.resolve(success);
    }, function (error) {
        switch (error.status) {
            case 400:
                deferred.reject("Not found");
                alert("Server Error");
        }
    });
    return deferred.promise;
}

function ProductCtrl($scope,getProducts) {
    console.log(getProducts);
    
    $scope.products =  getProducts.productList
    $scope.currentProduct = $scope.products[0];
    $scope.viewBtn = function (product) {
        $scope.currentProduct = product
    };
    $scope.addtocart = function (product) {
        alert('Product Price is ' + $scope.currentProduct.networkPrice)
    }
}
