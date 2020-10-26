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

import { MenuIcon } from './Icons';

var MobileHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileHeader, _React$Component);

  function MobileHeader(props) {
    _classCallCheck(this, MobileHeader);

    // eslint-disable-line no-useless-constructor
    return _possibleConstructorReturn(this, _getPrototypeOf(MobileHeader).call(this, props));
  }

  _createClass(MobileHeader, [{
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
          className: "nav-item"
        }, React.createElement(MenuTrigger, {
          tag: "a",
          role: "button",
          tabIndex: "0",
          className: "nav-link"
        }, content), React.createElement(MenuContent, {
          className: "position-static pin-left pin-right py-2"
        }, submenuContent));
      });
    }
  }, {
    key: "renderUserMenuItems",
    value: function renderUserMenuItems() {
      var userMenu = this.props.userMenu;
      return userMenu.map(function (_ref) {
        var type = _ref.type,
            href = _ref.href,
            content = _ref.content;
        return React.createElement("li", {
          className: "nav-item",
          key: "".concat(type, "-").concat(content)
        }, React.createElement("a", {
          className: "nav-link",
          href: href
        }, content));
      });
    }
  }, {
    key: "renderLoggedOutItems",
    value: function renderLoggedOutItems() {
      var loggedOutItems = this.props.loggedOutItems;
      return loggedOutItems.map(function (_ref2, i, arr) {
        var type = _ref2.type,
            href = _ref2.href,
            content = _ref2.content;
        return React.createElement("li", {
          className: "nav-item px-3 my-2",
          key: "".concat(type, "-").concat(content)
        }, React.createElement("a", {
          className: i < arr.length - 1 ? 'btn btn-block btn-outline-primary' : 'btn btn-block btn-primary',
          href: href
        }, content));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logo = _this$props.logo,
          logoAltText = _this$props.logoAltText,
          logoDestination = _this$props.logoDestination,
          loggedIn = _this$props.loggedIn,
          avatar = _this$props.avatar,
          username = _this$props.username,
          stickyOnMobile = _this$props.stickyOnMobile,
          intl = _this$props.intl,
          mainMenu = _this$props.mainMenu;
      var logoProps = {
        src: logo,
        alt: logoAltText,
        href: logoDestination
      };
      var stickyClassName = stickyOnMobile ? 'sticky-top' : '';
      return React.createElement("header", {
        "aria-label": intl.formatMessage(messages['header.label.main.header']),
        className: "site-header-mobile d-flex justify-content-between align-items-center shadow ".concat(stickyClassName)
      }, React.createElement("div", {
        className: "w-100 d-flex justify-content-start"
      }, mainMenu.length > 0 ? React.createElement(Menu, {
        className: "position-static"
      }, React.createElement(MenuTrigger, {
        tag: "button",
        className: "icon-button",
        "aria-label": intl.formatMessage(messages['header.label.main.menu']),
        title: intl.formatMessage(messages['header.label.main.menu'])
      }, React.createElement(MenuIcon, {
        role: "img",
        "aria-hidden": true,
        focusable: "false",
        style: {
          width: '1.5rem',
          height: '1.5rem'
        }
      })), React.createElement(MenuContent, {
        tag: "nav",
        "aria-label": intl.formatMessage(messages['header.label.main.nav']),
        className: "nav flex-column pin-left pin-right border-top shadow py-2"
      }, this.renderMainMenu())) : null), React.createElement("div", {
        className: "w-100 d-flex justify-content-center"
      }, logoDestination === null ? React.createElement(Logo, {
        className: "logo",
        src: logo,
        alt: logoAltText
      }) : React.createElement(LinkedLogo, _extends({
        className: "logo"
      }, logoProps, {
        itemType: "http://schema.org/Organization"
      }))), React.createElement("div", {
        className: "w-100 d-flex justify-content-end align-items-center"
      }, React.createElement(Menu, {
        tag: "nav",
        "aria-label": intl.formatMessage(messages['header.label.secondary.nav']),
        className: "position-static"
      }, React.createElement(MenuTrigger, {
        tag: "button",
        className: "icon-button",
        "aria-label": intl.formatMessage(messages['header.label.account.menu']),
        title: intl.formatMessage(messages['header.label.account.menu'])
      }, React.createElement(Avatar, {
        size: "1.5rem",
        src: avatar,
        alt: username
      })), React.createElement(MenuContent, {
        tag: "ul",
        className: "nav flex-column pin-left pin-right border-top shadow py-2"
      }, loggedIn ? this.renderUserMenuItems() : this.renderLoggedOutItems()))));
    }
  }]);

  return MobileHeader;
}(React.Component);

MobileHeader.propTypes = {
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
  stickyOnMobile: PropTypes.bool,
  // i18n
  intl: intlShape.isRequired
};
MobileHeader.defaultProps = {
  mainMenu: [],
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false,
  stickyOnMobile: true
};
export default injectIntl(MobileHeader);
//# sourceMappingURL=MobileHeader.js.map