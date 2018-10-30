webpackHotUpdate("static\\development\\pages\\currency.js",{

/***/ "./pages/currency.js":
/*!***************************!*\
  !*** ./pages/currency.js ***!
  \***************************/
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
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/popconfirm/style/css */ "./node_modules/antd/lib/popconfirm/style/css.js");
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/popconfirm */ "./node_modules/antd/lib/popconfirm/index.js");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_tradingview_widgets__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-tradingview-widgets */ "./node_modules/react-tradingview-widgets/build/index.js");
/* harmony import */ var react_tradingview_widgets__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_tradingview_widgets__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_20__);




















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




var ButtonGroup = antd_lib_button__WEBPACK_IMPORTED_MODULE_17___default.a.Group;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a.Option;
var currencies = ['USDTRY', 'EURUSD', 'USDKRW', 'USDIDR'];
var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.SubMenu;

var Tradingview = function Tradingview(props) {
  state = {
    name: 'KJH'
  };
  if (props.tradingviewstatus) var T = function T() {
    return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_tradingview_widgets__WEBPACK_IMPORTED_MODULE_19__["RealTimeChartWidget"], {
      width: "100%",
      height: "300",
      symbol: props.currency,
      locale: "en",
      interval: "D",
      theme: "light"
    });
  };else var T = function T() {
    return '';
  };
  return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(T, null);
};

var Currencybox = function Currencybox(props) {
  return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      marginTop: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
    span: 24
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
    style: {
      background: '#FFF',
      paddingTop: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
    span: 24
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(ButtonGroup, {
    style: {
      margin: '3px 0 0 3px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_17___default.a, {
    icon: "plus",
    onClick: props.boxadd
  }), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_11___default.a, {
    placement: "topLeft",
    title: "Are you sure to delete this box?",
    onConfirm: function onConfirm() {
      return props.boxremove(props.boxkey);
    },
    okText: "Yes",
    cancelText: "No"
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_17___default.a, {
    icon: "minus"
  }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: props.box,
    onChange: function onChange(e) {
      return props.currencychange(props.boxkey, e);
    },
    style: {
      marginLeft: 3
    }
  }, currencies.map(function (currency, i) {
    return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Option, {
      value: currency,
      key: currency
    }, currency);
  })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("label", {
    style: {
      float: 'right',
      borderLeft: 'solid silver 1px',
      padding: '9px 20px'
    }
  }, props.currency))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
    span: 24,
    style: {
      height: 300,
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Tradingview, {
    currency: props.currency,
    tradingviewstatus: props.tradingviewstatus
  }))))));
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
      tradingviewstatus: false,
      currencyboxes: [currencies[0]]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "boxadd", function () {
      var T = _this.state.currencyboxes;
      var isNew = false;

      for (var _i = 0; _i < currencies.length; _i++) {
        var currency = currencies[_i];

        if (!_this.state.currencyboxes.includes(currency)) {
          T.push(currency);
          isNew = true;
          break;
        }
      }

      if (!isNew) {
        T.push(currencies[0]);
      }

      _this.setState({
        currencyboxes: T
      });

      antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success('A new box created');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "boxremove", function (boxkey) {
      var T = _this.state.currencyboxes;

      if (T.length == 1) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.warning('Sorry. The last box cannot be removed.');

        return;
      }

      T.splice(boxkey, 1);

      _this.setState({
        currencyboxes: T
      });

      antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success('The selected box removed.');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currencychange", function (boxkey, value) {
      var T = _this.state.currencyboxes;
      T[boxkey] = value;

      _this.setState({
        currencyboxes: T
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          tradingviewstatus: true
        });
      }.bind(this), 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
        style: {
          padding: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_affix__WEBPACK_IMPORTED_MODULE_1___default.a, {
        offsetTop: 10
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: this.handleClick,
        selectedKeys: ['currency'],
        mode: "horizontal",
        theme: "dark"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
        key: "exchange"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("a", {
        href: "/index"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "appstore"
      }), "Exchange")), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
        key: "currency"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("a", {
        href: "/currency"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "property-safety"
      }), "Currency")), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
        key: "parity"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("a", {
        href: "/parity"
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "stock"
      }), "Parity")), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(SubMenu, {
        style: {
          float: 'right',
          padding: 0
        },
        title: react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("span", {
          className: "submenu-title-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
          type: "team",
          style: {
            fontSize: 20
          }
        }))
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
        key: "user:1",
        style: {
          margin: 0,
          background: '#00101a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "user"
      }), "John"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
        key: "user:2",
        style: {
          margin: 0,
          background: '#00101a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "user"
      }), "Kerry"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_13___default.a.Item, {
        key: "user:3",
        style: {
          margin: 0,
          background: '#00101a'
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "user"
      }), "Volten"))))), this.state.currencyboxes.map(function (currency, i) {
        return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(Currencybox, {
          key: i // value props
          ,
          currency: currency,
          boxkey: i,
          box: _this2.state.currencyboxes[i],
          tradingviewstatus: _this2.state.tradingviewstatus // action props
          ,
          boxadd: _this2.boxadd,
          boxremove: _this2.boxremove,
          currencychange: _this2.currencychange
        });
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/currency")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=currency.js.43bd2df123a7adb6cd9e.hot-update.js.map