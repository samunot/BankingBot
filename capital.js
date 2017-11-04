var api_key = "7184706313e2712e40b2e1a4c79470f3";
var url_root = "http://api.reimaginebanking.com";
var request = require('request');
var id = "59fdf5ccb390353c953a1bf8";

function getAllCustomers(callback) {
    options = {
        url: `${url_root}/customers?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getCustomer(id, callback) {
    options = {
        url: `${url_root}/customers/${id}?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    })
}

function getAllAccounts(callback) {
    options = {
        url: `${url_root}/accounts?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getAccount(id, callback) {
    options = {
        url: `${url_root}/customers/${id}/accounts?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function updateAccount()
// getAllCustomers(function(cust) {
//     console.log(cust);
// });

function getAllTransfers(id, callback) {
    options = {
        url: `${url_root}/accounts/${id}/transfers?key=${api_key}`,
        method: 'GET'
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getTransfer(transferId, callback) {
    options = {
        url: `${url_root}/transfers/${transferId}?key=${api_key}`,
        method: 'GET'
    }
    request(options, function(error, response, body) {
        callback(response.body);
    })
}

function createTransfer(id, data, callback) {
    options = {
        url: `${url_root}/accounts/{id}/transfers?key=${api_key}`,
        method: 'GET',
        body: data
    }
    request(options, function(error, response, body) {
        callback(response.body);
    })
}

getCustomer(id, function(cust) {
    console.log(cust);
});