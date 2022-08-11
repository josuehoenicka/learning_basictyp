"use strict";
/********** Enum **********/
var firstRoles;
(function (firstRoles) {
    firstRoles["User"] = "USER";
    firstRoles["Admin"] = "ADMIN";
    firstRoles["SuperAdmin"] = "SUPERADMIN";
})(firstRoles || (firstRoles = {}));
console.log(firstRoles.Admin); // ADMIN
/********** Objects **********/
const secondRoles = {
    User: 1,
    Admin: 2,
    SuperAdmin: 3
};
console.log(secondRoles.Admin); // 2
