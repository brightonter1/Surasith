'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x3391896246Ea0F1839B7a2a13556c67f408E432C' // Hash deploy
// '0xd05D1D8B66be28DBa6D66AB43a2fa6be9ea46dEc'
);

// console.log(instance);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUIsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsS0FBQSxBQUFLLE1BQU0sMEJBREUsQUFDYixBQUEyQixZQURkLEFBRWIsNkNBQTZDO0FBRmpELEFBQWlCLEFBR2I7QUFIYTs7QUFNakIsQUFFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaGF5dXRhcm9vbnNhbmcvRGVza3RvcC9EZXNrdG9wIC0gQ2hheXV04oCZcyBNYWNCb29rIFByby93b3JrL2tpY2tzdGFydCBjb3B5In0=