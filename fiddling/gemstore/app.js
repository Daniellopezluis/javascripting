(function () {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        $http.get('/store-products.json').then(function (response) {
            store.products = response.data;
        });
    }]);

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();
