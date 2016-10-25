'use strict';

// First callback

var axolotl = require('axolotl');

var store = {
    registrationID: new ArrayBuffer(),
    getLocalRegistrationID: function(registrationID) {
        return registrationID;
    }
};
