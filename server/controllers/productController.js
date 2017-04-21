/**
 * Created by karthick on 21/04/17.
 */
var request = require('request');
var HttpStatus = require('http-status');

exports.list = function (req, res) {                // Gets the List of Product.
    console.log('Product list invoked...');
    
    request('http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=8&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1', function (err, response, product) {
            if (err) {
                res.status(response.statusCode).json(err);
                return;
            }
          res.status(HttpStatus.OK).json(JSON.parse(product));
    });
};
