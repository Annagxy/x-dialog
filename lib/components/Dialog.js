"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DialogPortal = require("./DialogPortal");

var _DialogPortal2 = _interopRequireDefault(_DialogPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-Plugin/x-dialog
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2017-05-16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var renderSubtreeIntoContainer = _reactDom2.default.unstable_renderSubtreeIntoContainer;

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = { isShow: props.isShow };
    return _this;
  }
  //props有更新时调用事件,更新portal组件，相当于render。


  _createClass(Dialog, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.renderPortal(newProps);
    }
    //初始化时插入父级和渲染一次portal组件

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = document.createElement("div");
      document.body.appendChild(this.node);
      this.renderPortal(this.props);
    }
    //模拟render方法，调用portal组件时传入父级容器

  }, {
    key: "renderPortal",
    value: function renderPortal(props) {
      // console.log(props)
      renderSubtreeIntoContainer(this, _react2.default.createElement(_DialogPortal2.default, props), this.node);
    }
    //组件销毁时触发,移除绑定

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.node);
      this.node.parentNode.removeChild(this.node);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  isShow: _propTypes2.default.bool.isRequired,
  mask: _propTypes2.default.bool,
  children: _propTypes2.default.node
};
Dialog.defaultProps = {
  isShow: false,
  mask: true
};
exports.default = Dialog;