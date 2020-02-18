'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chayutaroonsang/Desktop/Desktop - Chayut\u2019s MacBook Pro/work/kickstart copy/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            lodingOnApprove: false,
            loadingOnFinalize: false
        }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, account;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ lodingOnApprove: true });
                            _context.prev = 1;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            account = _context.sent;

                            console.log(account);
                            _context.next = 9;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: account[0],
                                gas: '1000000'
                            });

                        case 9:
                            _context.next = 13;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](1);

                        case 13:

                            _this.setState({ lodingOnApprove: false });
                            _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[1, 11]]);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, account;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ loadingOnFinalize: true });
                            _context2.prev = 1;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            account = _context2.sent;
                            _context2.next = 8;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: account[0],
                                gas: '1000000'
                            });

                        case 8:
                            _context2.next = 12;
                            break;

                        case 10:
                            _context2.prev = 10;
                            _context2.t0 = _context2['catch'](1);

                        case 12:
                            _this.setState({ loadingOnFinalize: false });
                            _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[1, 10]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readytoFinalize = request.approvalCount > approversCount / 2;

            return _react2.default.createElement(Row, { disabled: request.complete, positive: readytoFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, Number(this.props.id) + 1), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.props.request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, loading: this.state.lodingOnApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, loading: this.state.loadingOnFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9kaW5nT25BcHByb3ZlIiwibG9hZGluZ09uRmluYWxpemUiLCJvbkFwcHJvdmUiLCJzZXRTdGF0ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJnYXMiLCJwdXNoUm91dGUiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5dG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBYzs7Ozs7OztJQUdqQixBOzs7Ozs7Ozs7Ozs7Ozs7d05BRUYsQTs2QkFBUSxBQUNhLEFBQ2pCOytCQUZJLEFBRWUsQTtBQUZmLEFBQ0osaUIsQUFJSixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDUjtrQ0FBQSxBQUFLLFNBQVMsRUFBQyxpQkFEUCxBQUNSLEFBQWMsQUFBa0I7NENBRXRCO0FBSEYsdUNBR2Esd0JBQVMsTUFBQSxBQUFLLE1BSDNCLEFBR2EsQUFBb0I7NENBSGpDO21DQUlrQixjQUFBLEFBQUssSUFKdkIsQUFJa0IsQUFBUzs7NkJBQXpCO0FBSkYsK0NBS0o7O29DQUFBLEFBQVEsSUFMSixBQUtKLEFBQVk7NENBTFI7NENBTUUsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NDQUMzQyxRQURnRCxBQUNoRCxBQUFRLEFBQ2Q7cUNBUkEsQUFNRSxBQUFvRCxBQUVqRDtBQUZpRCxBQUN0RCw2QkFERTs7NkJBTkY7NENBQUE7QUFBQTs7NkJBQUE7NENBQUE7NERBQUE7OzZCQWNSOztrQ0FBQSxBQUFLLFNBQVMsRUFBQyxpQkFBZixBQUFjLEFBQWtCLEFBQ2hDOzJDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQWZsQzs7NkJBQUE7NkJBQUE7NENBQUE7O0FBQUE7cUNBQUE7QSxtQkFrQlosQSxzRkFBYSxvQkFBQTswQkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFDVDtrQ0FBQSxBQUFLLFNBQVMsRUFBQyxtQkFETixBQUNULEFBQWMsQUFBb0I7NkNBRXhCO0FBSEQsdUNBR1ksd0JBQVMsTUFBQSxBQUFLLE1BSDFCLEFBR1ksQUFBb0I7NkNBSGhDO21DQUlpQixjQUFBLEFBQUssSUFKdEIsQUFJaUIsQUFBUzs7NkJBQXpCO0FBSkQsZ0RBQUE7NkNBQUE7NENBTUMsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0NBQzVDLFFBRGlELEFBQ2pELEFBQVEsQUFDZDtxQ0FSQyxBQU1DLEFBQXFELEFBRWxEO0FBRmtELEFBQ3ZELDZCQURFOzs2QkFORDs2Q0FBQTtBQUFBOzs2QkFBQTs2Q0FBQTs4REFBQTs7NkJBYVQ7a0NBQUEsQUFBSyxTQUFTLEVBQUMsbUJBQWYsQUFBYyxBQUFvQixBQUNsQzsyQ0FBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFkakM7OzZCQUFBOzZCQUFBOzZDQUFBOztBQUFBO3NDQUFBO0E7Ozs7O2lDQWlCSjtnQkFBQSxBQUNHLE1BREgsQUFDaUIsdUJBRGpCLEFBQ0c7Z0JBREgsQUFDUSxPQURSLEFBQ2lCLHVCQURqQixBQUNRO3lCQUMyQixLQUZuQyxBQUV3QztnQkFGeEMsQUFFRyxZQUZILEFBRUc7Z0JBRkgsQUFFTyxpQkFGUCxBQUVPO2dCQUZQLEFBRWdCLHdCQUZoQixBQUVnQixBQUNyQjs7Z0JBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQWlFLEFBRWpFOzttQ0FDSyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxRQUEvRCxBQUF1RTs4QkFBdkU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsc0JBQWMsS0FBQSxBQUFLLE1BQVosQUFBa0IsTUFEN0IsQUFDSSxBQUE2QixBQUM3QixvQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFLLE1BQUwsQUFBVyxRQUZ0QixBQUVJLEFBQTBCLEFBQzFCLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLDZCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FIdEMsQUFHSSxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpKLEFBSUksQUFBZSxBQUNmLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFBLEFBQWUsZUFBZ0IsS0FMbkMsQUFLSSxBQUNBLGlDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLHVCQUNLLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDLFdBQVcsU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7OEJBQXpFO2dDQUFBO0FBQUE7YUFBQSxFQVJaLEFBTUksQUFFUSxBQUtSLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLHVCQUNLLEFBQVEsV0FBUixBQUFtQix1QkFDaEIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUFTLEtBQXBDLEFBQXlDLFlBQVksU0FBUyxLQUFBLEFBQUssTUFBbkUsQUFBeUU7OEJBQXpFO2dDQUFBO0FBQUE7YUFBQSxFQWhCaEIsQUFDSSxBQWFJLEFBRVEsQUFPbkI7Ozs7O0FBdEVvQixBLEFBeUV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaGF5dXRhcm9vbnNhbmcvRGVza3RvcC9EZXNrdG9wIC0gQ2hheXV04oCZcyBNYWNCb29rIFByby93b3JrL2tpY2tzdGFydCBjb3B5In0=