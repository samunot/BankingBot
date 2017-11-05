var api_key = "f22fbdf4ed3dd8d28f4fc96039514ba2";
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
    getAllCustomers(function(clist) {
        clist = JSON.parse(clist)
        for (i = 0; i < clist.length; i++) {
            // clist[i] = JSON.parse(clist[i]);
            // console.log("vikasffff2");
            if (fname == clist[i].first_name && lname == clist[i].last_name) {
                console.log("vikasffff3");
                callback(clist[i]._id);
                break;
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
        console.log("vikasffff1");
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
        alist = JSON.parse(alist);
        for (i = 0; i < alist.length; i++) {
            // alist[i] = JSON.parse(alist[i]);
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
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        url: `${url_root}/accounts/${accountID}/purchases?key=${api_key}`,
        method: 'POST',
        body: JSON.stringify(data)
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
    var options = {
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        url: `${url_root}/accounts/${id}/transfers?key=${api_key}`,
        method: 'POST',
        body: JSON.stringify(data)
    }
    request(options, function(error, response, body) {
        console.log(response.body);
        callback(JSON.parse(response.body));
    })
}

function deposit(id, data, callback) {
    var options = {
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        url: `${url_root}/accounts/${id}/deposits?key=${api_key}`,
        method: 'POST',
        body: JSON.stringify(data)
    }
    request(options, function(error, response, body) {
        console.log(response.body);
        callback(JSON.parse(response.body));
    })
}

/*
var sample_data = 
{"medium": "balance",
"payee_id": "59fe03c8b390353c953a1c03",
"amount": 100,
"transaction_date": "2017-11-04",
"description": "string"}

createTransfer("59fe0589b390353c953a1c0c",sample_data,function(body){
    console.log(body)
})

*/
/*
getCustomer(id, function(cust) {
    console.log(cust);
});
*/

/*
getCustomerID("Vikas","Pandey",function(body){
    console.log(body)
})
*/

// getAllMerchants(function(body){
//     console.log(body)
// })
exports.getCustomer = getCustomer;
exports.createTransfer = createTransfer;
exports.getTransfer = getTransfer;
exports.getAllTransfers = getAllTransfers;
exports.getPurcahse = getPurcahse;
exports.getAllPurchasesByAccountID = getAllPurchasesByAccountID;
exports.getAllPurchasesByMerchantID = getAllPurchasesByMerchantID;
exports.makePurchase = makePurchase;
exports.getMerchant = getMerchant;

exports.getAllMerchants = getAllMerchants;
exports.getAccountID = getAccountID;
exports.updateAccount = updateAccount;

exports.getCustomerID = getCustomerID;
exports.getCustomer = getCustomer;
exports.getAllAccounts = getAllAccounts;
exports.getAccount = getAccount;
exports.getAllCustomers = getAllCustomers;

exports.deposit = deposit;