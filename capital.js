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

function getCustomerID(fname, lname, callback) {
    getAllAccounts(function(clist) {
        for (i = 0; i < clist; i++) {
            clist[i] = JSON.parse(clist[i]);
            if (fname == clist[i].first_name && lname == clist[i].last_name) {
                callback(clist[i]._id)
            }
        }
    })
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

function updateAccount(id, data, callback) {
    options = {
        url: `${url_root}/accounts/${id}?key=${api_key}`,
        method: 'PUT',
        body: data
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getAccountID(custid, type, callback) {
    getAllAccounts(function(alist) {
        for (i = 0; i < clist; i++) {
            alist[i] = JSON.parse(alist[i]);
            if (custid == alist[i].customer_id && type == alist[i].type) {
                callback(alist[i]._id)
            }
        }
    })
}

function getAllMerchants(callback) {
    options = {
        url: `${url_root}/merchants?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getMerchant(id, callback) {
    options = {
        url: `${url_root}/merchants/${id}?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function makePurchase(accountID, data, callback) {
    options = {
        url: `${url_root}/accounts/${accountID}/purchases?key=${api_key}`,
        method: 'POST',
        body: data
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getAllPurchasesByMerchantID(merchantID, callback) {
    options = {
        url: `${url_root}/merchants/${merchantID}/purchases?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getAllPurchasesByAccountID(accountID, callback) {
    options = {
        url: `${url_root}/accounts/${accountID}/purchases?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}

function getPurcahse(id, callback) {
    options = {
        url: `${url_root}/purchases/${id}?key=${api_key}`,
        method: 'GET',
    }
    request(options, function(error, response, body) {
        callback(response.body);
    });
}
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