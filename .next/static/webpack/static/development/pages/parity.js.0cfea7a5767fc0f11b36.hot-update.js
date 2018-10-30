webpackHotUpdate("static\\development\\pages\\parity.js",{

/***/ "./pages/parity.js":
/*!*************************!*\
  !*** ./pages/parity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_affix_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/affix/style/css */ "./node_modules/antd/lib/affix/style/css.js");
/* harmony import */ var antd_lib_affix_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/affix */ "./node_modules/antd/lib/affix/index.js");
/* harmony import */ var antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message/style/css */ "./node_modules/antd/lib/message/style/css.js");
/* harmony import */ var antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_alert_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/alert/style/css */ "./node_modules/antd/lib/alert/style/css.js");
/* harmony import */ var antd_lib_alert_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input-number/style/css */ "./node_modules/antd/lib/input-number/style/css.js");
/* harmony import */ var antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/auto-complete/style/css */ "./node_modules/antd/lib/auto-complete/style/css.js");
/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/auto-complete */ "./node_modules/antd/lib/auto-complete/index.js");
/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/popconfirm/style/css */ "./node_modules/antd/lib/popconfirm/style/css.js");
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/popconfirm */ "./node_modules/antd/lib/popconfirm/index.js");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _antv_data_set__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @antv/data-set */ "./node_modules/@antv/data-set/build/data-set.js");
/* harmony import */ var _antv_data_set__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_antv_data_set__WEBPACK_IMPORTED_MODULE_28__);




























function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var bizcharts;

if (true) {
  bizcharts = __webpack_require__(/*! bizcharts */ "./node_modules/bizcharts/umd/BizCharts.js");
}


var ButtonGroup = antd_lib_button__WEBPACK_IMPORTED_MODULE_25___default.a.Group;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a.Option;
var InputGroup = antd_lib_input__WEBPACK_IMPORTED_MODULE_21___default.a.Group;
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.SubMenu;
var autocompletedata = ['KKH', 'KJH'];

var Paritybox = function Paritybox(props) {
  return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      marginTop: 10,
      marginBottom: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 24,
    style: {}
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      background: '#00395b'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 5,
    style: {
      height: 295,
      borderRight: 'solid #EEE 1px',
      background: '#FFF'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 24
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(ButtonGroup, {
    style: {
      margin: '3px 0 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_25___default.a, {
    icon: "plus",
    onClick: props.boxadd
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_17___default.a, {
    placement: "topLeft",
    title: "Are you sure to delete this box?",
    onConfirm: props.boxremove,
    okText: "Yes",
    cancelText: "No"
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_25___default.a, {
    icon: "minus"
  }))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_15___default.a, _defineProperty({
    dataSource: props.filterdata,
    style: {
      width: 200
    } // onSelect={onSelect}
    ,
    onSearch: props.autocomplete
  }, "style", {
    width: '48.9%',
    float: 'right',
    marginTop: 3,
    marginRight: 3
  })))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      borderTop: 'solid #EEE 1px',
      padding: '3px 3px 0 3px',
      marginTop: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(InputGroup, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    defaultValue: "trk",
    size: "small",
    style: {
      width: '50%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "btc"
  }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "trk"
  }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    defaultValue: "btc",
    size: "small",
    style: {
      width: '50%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "btc"
  }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "trk"
  }, "BTCTURK")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(InputGroup, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "buy",
    style: {
      width: '25%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "sell"
  }, "SELL"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "buy"
  }, "BUY")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "btc",
    style: {
      width: '40%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "btc"
  }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "trk"
  }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "parity_1",
    style: {
      width: '35%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_1"
  }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_2"
  }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_3"
  }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_4"
  }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_5"
  }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_6"
  }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(InputGroup, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "buy",
    style: {
      width: '25%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "sell"
  }, "SELL"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "buy"
  }, "BUY")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "btc",
    style: {
      width: '40%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "btc"
  }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "trk"
  }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "parity_1",
    style: {
      width: '35%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_1"
  }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_2"
  }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_3"
  }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_4"
  }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_5"
  }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_6"
  }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(InputGroup, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "buy",
    style: {
      width: '25%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "sell"
  }, "SELL"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "buy"
  }, "BUY")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "btc",
    style: {
      width: '40%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "btc"
  }, "BINANCE"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "trk"
  }, "BTCTURK")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "parity_1",
    style: {
      width: '35%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_1"
  }, "BTC/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_2"
  }, "BTC/USDT"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_3"
  }, "ETH/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_4"
  }, "LTC/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_5"
  }, "XRP/TRY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "parity_6"
  }, "USDT/TRY")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(InputGroup, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default.a, {
    size: "small",
    defaultValue: 1000,
    formatter: function formatter(value) {
      return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    parser: function parser(value) {
      return value.replace(/\$\s?|(,*)/g, '');
    },
    style: {
      width: '50%'
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_25___default.a, {
    size: "small",
    type: "primary",
    style: {
      width: '50%'
    }
  }, "+12"))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(InputGroup, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "market",
    style: {
      width: '65%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "market"
  }, "MARKET"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "limit"
  }, "LIMIT")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "standard",
    style: {
      width: '35%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "standard"
  }, "STD"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "wall"
  }, "WALL")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 16,
    style: {
      textAlign: 'center'
    }
  }, "AUTO"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "yes",
    style: {
      width: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "yes"
  }, "YES"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "no"
  }, "NO")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 16,
    style: {
      textAlign: 'center'
    }
  }, "INVENTORY"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "yes",
    style: {
      width: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "yes"
  }, "YES"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "no"
  }, "NO")))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: '3px 3px 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 16,
    style: {
      textAlign: 'center'
    }
  }, "WITHDRAW"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_23___default.a, {
    size: "small",
    defaultValue: "yes",
    style: {
      width: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "yes"
  }, "YES"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Option, {
    value: "no"
  }, "NO"))))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 11,
    style: {
      height: 295,
      padding: '15px 20px 0 0',
      background: '#FFF'
    }
  }, true && react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(bizcharts.Chart, {
    height: 275,
    data: props.dv,
    forceFit: true
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(bizcharts.Legend, null), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(bizcharts.Axis, {
    name: "\u6708\u4EFD"
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(bizcharts.Axis, {
    name: "\u6708\u5747\u964D\u96E8\u91CF"
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(bizcharts.Tooltip, null), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(bizcharts.Geom, {
    type: "intervalStack",
    position: "\u6708\u4EFD*\u6708\u5747\u964D\u96E8\u91CF",
    color: ['name', ['lightgreen', 'green', 'pink', 'red']],
    style: {
      stroke: "#fff",
      lineWidth: 1
    }
  }))), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 4,
    style: {
      height: 295,
      paddingTop: 5,
      overflow: 'auto',
      background: '#FFF'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
    message: "buy-20.03.08-xrp-300 usd",
    type: "info",
    closable: true,
    closeText: "Cancel",
    style: {
      marginBottom: 3,
      paddingTop: 5,
      paddingBottom: 5
    }
  })), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
    span: 4,
    style: {
      height: 295,
      overflowY: 'auto',
      padding: '0 5px',
      msScrollbarFaceColor: 'red'
    }
  }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "12$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "2$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "10$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "8$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "12$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "12$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "5$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "10$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "11$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "6$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "7$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "9$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "12$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "10$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "11$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "2$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "7$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "8$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "8$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12,
      background: '#014f7c'
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "6$")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("p", {
    style: {
      padding: 0,
      margin: 0,
      color: '#FFF',
      fontSize: 12
    }
  }, "20.03.08 15:04:53 buy-xrp-300", react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, "10$"))))));
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      parityboxes: ['a'],
      filterdata: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "boxadd", function (e) {
      var T = _this.state.parityboxes;
      T.push('a');

      _this.setState({
        parityboxes: T
      });

      antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success('A new box created.');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "boxremove", function () {
      var T = _this.state.parityboxes;

      if (T.length == 1) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.warning('Sorry. The last box cannot be removed.');

        return;
      }

      T.splice(0, 1);

      _this.setState({
        parityboxes: T
      });

      antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success('The selected box removed.');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autocomplete", function (value) {
      if (value == '') _this.setState({
        filterdata: []
      });else _this.setState({
        filterdata: autocompletedata.filter(function (s) {
          return s.toLowerCase().substring(0, value.length) === value.toLowerCase();
        })
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = [{
        name: "limit win",
        "1": 2.5,
        "3": 2,
        "5": 1.3,
        "6": 1.4,
        "9": .7,
        "11": .3,
        "13": 2.4,
        "15": .6,
        "17": 2.3,
        "19": 1.4,
        "21": .6,
        "23": 1.6
      }, {
        name: "market win",
        "1": 5.4,
        "3": 3.2,
        "5": 5.5,
        "6": 6.7,
        "9": 2.6,
        "11": 5.5,
        "13": 7.4,
        "15": 2.4,
        "17": 5.3,
        "19": 2.4,
        "21": 5.6,
        "23": 5.6
      }, {
        name: "limit lose",
        "2": -2.4,
        "4": -2.2,
        "7": -1.5,
        "8": -1.7,
        "10": -1.6,
        "12": -2.5,
        "14": -2.4,
        "16": -1.4,
        "18": -2.3,
        "20": -2.4,
        "22": -1.6,
        "24": -0.6
      }, {
        name: "market lose",
        "2": -5.3,
        "4": -6.8,
        "7": -6.3,
        "8": -7.4,
        "10": -4.7,
        "12": -2.3,
        "14": -4.4,
        "16": -5.6,
        "18": -2.3,
        "20": -5.4,
        "22": -3.6,
        "24": -5.6
      }];
      var ds = new _antv_data_set__WEBPACK_IMPORTED_MODULE_28___default.a();
      var dv = ds.createView().source(data);
      dv.transform({
        type: "fold",
        fields: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
        key: "月份",
        value: "月均降雨量"
      });
      return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
        style: {
          padding: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default.a, {
        offsetTop: 10
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a, {
        selectedKeys: ['parity'],
        mode: "horizontal",
        theme: "light"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
        key: "exchange"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("a", {
        href: "/index"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "appstore"
      }), "Exchange")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
        key: "currency"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("a", {
        href: "/currency"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "property-safety"
      }), "Currency")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
        key: "parity"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("a", {
        href: "/parity"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "stock"
      }), "Parity")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(SubMenu, {
        style: {
          float: 'right',
          padding: 0
        },
        title: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("span", {
          className: "submenu-title-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "team",
          style: {
            fontSize: 20
          }
        }))
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
        key: "user:1",
        style: {
          margin: 0,
          background: '#00101a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "user"
      }), "John"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
        key: "user:2",
        style: {
          margin: 0,
          background: '#00101a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "user"
      }), "Kerry"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default.a.Item, {
        key: "user:3",
        style: {
          margin: 0,
          background: '#00101a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "user"
      }), "Volten"))))), this.state.parityboxes.map(function (box) {
        return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(Paritybox // value props
        , {
          dv: dv,
          filterdata: _this2.state.filterdata // action props
          ,
          boxadd: _this2.boxadd,
          boxremove: _this2.boxremove,
          autocomplete: _this2.autocomplete
        });
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_26__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/parity")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=parity.js.0cfea7a5767fc0f11b36.hot-update.js.map