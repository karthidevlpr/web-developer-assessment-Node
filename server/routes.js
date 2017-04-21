/**
 * Created by karthick on 21/04/17.
 */


var productController = require("./controllers/productController");

module.exports = function (app) {
    app.all('/', function (req, res) {
        res.sendFile('index.html', {root: './public/pages/'});
    });
    
    app.get('/getProducts',productController.list)
};
