function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n'; // Local Components

import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo, Logo } from './Logo'; // i18n

import messages from './Header.messages'; // Assets

import { CaretIcon } from './Icons';

var DesktopHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DesktopHeader, _React$Component);

  function DesktopHeader(props) {
    _classCallCheck(this, DesktopHeader);

    // eslint-disable-line no-useless-constructor
    return _possibleConstructorReturn(this, _getPrototypeOf(DesktopHeader).call(this, props));
  }

  _createClass(DesktopHeader, [{
    key: "renderMainMenu",
    value: function renderMainMenu() {
      var mainMenu = this.props.mainMenu; // Nodes are accepted as a prop

      if (!Array.isArray(mainMenu)) return mainMenu;
      return mainMenu.map(function (menuItem) {
        var type = menuItem.type,
            href = menuItem.href,
            content = menuItem.content,
            submenuContent = menuItem.submenuContent;

        if (type === 'item') {
          return React.createElement("a", {
            key: "".concat(type, "-").concat(content),
            className: "nav-link",
            href: href
          }, content);
        }

        return React.createElement(Menu, {
          key: "".concat(type, "-").concat(content),
          tag: "div",
          className: "nav-item",
          respondToPointerEvents: true
        }, React.createElement(MenuTrigger, {
          tag: "a",
          className: "nav-link d-inline-flex align-items-center",
          href: href
        }, content, " ", React.createElement(CaretIcon, {
          role: "img",
          "aria-hidden": true,
          focusable: "false"
        })), React.createElement(MenuContent, {
          className: "pin-left pin-right shadow py-2"
        }, submenuContent));
      });
    }
  }, {
    key: "renderUserMenu",
    value: function renderUserMenu() {
      var _this$props = this.props,
          userMenu = _this$props.userMenu,
          avatar = _this$props.avatar,
          username = _this$props.username,
          intl = _this$props.intl;
      return React.createElement(Menu, {
        transitionClassName: "menu-dropdown",
        transitionTimeout: 250
      }, React.createElement(MenuTrigger, {
        tag: "button",
        "aria-label": intl.formatMessage(messages['header.label.account.menu.for'], {
          username: username
        }),
        className: "btn btn-light d-inline-flex align-items-center pl-2 pr-3"
      }, React.createElement(Avatar, {
        size: "1.5em",
        src: avatar,
        alt: "",
        className: "mr-2"
      }), username, " ", React.createElement(CaretIcon, {
        role: "img",
        "aria-hidden": true,
        focusable: "false"
      })), React.createElement(MenuContent, {
        className: "mb-0 dropdown-menu show dropdown-menu-right pin-right shadow py-2"
      }, userMenu.map(function (_ref) {
        var type = _ref.type,
            href = _ref.href,
            content = _ref.content;
        return React.createElement("a", {
          className: "dropdown-".concat(type),
          key: "".concat(type, "-").concat(content),
          href: href
        }, content);
      })));
    }
  }, {
    key: "renderLoggedOutItems",
    value: function renderLoggedOutItems() {
      var loggedOutItems = this.props.loggedOutItems;
      return loggedOutItems.map(function (item, i, arr) {
        return React.createElement("a", {
          key: "".concat(item.type, "-").concat(item.content),
          className: i < arr.length - 1 ? 'btn mr-2 btn-link' : 'btn mr-2 btn-outline-primary',
          href: item.href
        }, item.content);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          logo = _this$props2.logo,
          logoAltText = _this$props2.logoAltText,
          logoDestination = _this$props2.logoDestination,
          loggedIn = _this$props2.loggedIn,
          intl = _this$props2.intl;
      var logoProps = {
        src: logo,
        alt: logoAltText,
        href: logoDestination
      };
      return React.createElement("header", {
        className: "site-header-desktop"
      }, React.createElement("div", {
        className: "container-fluid"
      }, React.createElement("div", {
        className: "nav-container position-relative d-flex align-items-center"
      }, logoDestination === null ? React.createElement(Logo, {
        className: "logo",
        src: logo,
        alt: logoAltText
      }) : React.createElement(LinkedLogo, _extends({
        className: "logo"
      }, logoProps)), React.createElement("nav", {
        "aria-label": intl.formatMessage(messages['header.label.main.nav']),
        className: "nav main-nav"
      }, this.renderMainMenu()), React.createElement("nav", {
        "aria-label": intl.formatMessage(messages['header.label.secondary.nav']),
        className: "nav secondary-menu-container align-items-center ml-auto"
      }, loggedIn ? this.renderUserMenu() : this.renderLoggedOutItems()))));
    }
  }]);

  return DesktopHeader;
}(React.Component);

DesktopHeader.propTypes = {
  mainMenu: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  userMenu: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string
  })),
  loggedOutItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string
  })),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
  // i18n
  intl: intlShape.isRequired
};
DesktopHeader.defaultProps = {
  mainMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false
};
export default injectIntl(DesktopHeader);
//# sourceMappingURL=DesktopHeader.js.map