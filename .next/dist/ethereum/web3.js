'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    var ethereum = window.ethereum;

    ethereum.enable().then(function (accounts) {
        var account = accounts[0];
        console.log(account);
    });
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/2e77c089c07846f29ebfb21f803e0ac3"
    // "https://rinkeby.infura.io/7ab9f8a9174e4f0292cae2207f5a5fb1"

    );
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsInRoZW4iLCJhY2NvdW50cyIsImFjY291bnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFJQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBWSxBQUNwRTtRQUFJLFdBQVcsT0FBZixBQUFzQixBQUV0Qjs7YUFBQSxBQUFTLFNBQVQsQUFBa0IsS0FBSyxVQUFBLEFBQVUsVUFBUyxBQUN0QztZQUFNLFVBQVUsU0FBaEIsQUFBZ0IsQUFBUyxBQUN6QjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNmO0FBSEQsQUFJQTtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDL0I7QUFSRCxPQVFLLEFBQ0Q7UUFBTSxlQUFlLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQ2hDLEFBQ0E7QUFGSixBQUFpQixBQUtqQjs7QUFMaUI7V0FLVixBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjtBQU9EOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NoYXl1dGFyb29uc2FuZy9EZXNrdG9wL0Rlc2t0b3AgLSBDaGF5dXTigJlzIE1hY0Jvb2sgUHJvL3dvcmsva2lja3N0YXJ0IGNvcHkifQ==