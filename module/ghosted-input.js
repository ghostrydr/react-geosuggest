'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowCompare = require('react/lib/shallowCompare');

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _filterInputAttributes = require('./filter-input-attributes');

var _filterInputAttributes2 = _interopRequireDefault(_filterInputAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


/**
 * The input field
 * @param {Object} props The component's props
 * @return {JSX} The icon component.
 */
var GhostedInput = function (_React$Component) {
  _inherits(GhostedInput, _React$Component);

  function GhostedInput() {
    _classCallCheck(this, GhostedInput);

    return _possibleConstructorReturn(this, (GhostedInput.__proto__ || Object.getPrototypeOf(GhostedInput)).apply(this, arguments));
  }

  _createClass(GhostedInput, [{
    key: 'shouldComponentUpdate',


    /**
     * Whether or not the component should update
     * @param {Object} nextProps The new properties
     * @param {Object} nextState The new state
     * @return {Boolean} Update or not?
     */
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _shallowCompare2.default)(this, nextProps, nextState);
    }

    /**
     * Make the ghosted text's casing match the user input
     * @return {String} The modified string
     */

  }, {
    key: 'matchUserInputCasing',
    value: function matchUserInputCasing() {
      return this.props.activeSuggest.label.replace(new RegExp(this.props.userInput, 'i'), this.props.userInput); // eslint-disable-line max-len
    }

    /**
     * Render the view
     * @return {Function} The React element to render
     */

  }, {
    key: 'render',
    value: function render() {
      var attributes = (0, _filterInputAttributes2.default)(this.props),
          classes = (0, _classnames2.default)('geosuggest__ghosted-input', this.props.className);

      return _react2.default.createElement('input', _extends({ className: classes,
        ref: 'input',
        type: 'text',
        autoComplete: 'off'
      }, attributes, {
        value: this.matchUserInputCasing(),
        style: this.props.style }));
    }
  }]);

  return GhostedInput;
}(_react2.default.Component);

/**
 * Default values for the properties
 * @type {Object}
 */


GhostedInput.defaultProps = {
  className: '',
  activeSuggest: { label: '' },
  userInput: ''
};

exports.default = GhostedInput;