import React, { useContext } from "react";
import Responsive from "react-responsive";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { AppContext } from "@edx/frontend-platform/react";
import { ensureConfig } from "@edx/frontend-platform/config";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import LogoPNG from "./vtieol.png";
import messages from "./Header.messages";
ensureConfig(["LMS_BASE_URL", "LOGOUT_URL", "LOGIN_URL", "SITE_NAME"], "Header component");

function Header(_ref) {
  var intl = _ref.intl;

  var _useContext = useContext(AppContext),
      authenticatedUser = _useContext.authenticatedUser,
      config = _useContext.config;

  var mainMenu = [{
    type: "item",
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    content: intl.formatMessage(messages["header.links.courses"])
  }];
  var userMenu = authenticatedUser === null ? [] : [{
    type: "item",
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    content: intl.formatMessage(messages["header.user.menu.dashboard"])
  }, {
    type: "item",
    href: "".concat(config.LMS_BASE_URL, "/u/").concat(authenticatedUser.username),
    content: intl.formatMessage(messages["header.user.menu.profile"])
  }, {
    type: "item",
    href: "".concat(config.LMS_BASE_URL, "/account/settings"),
    content: intl.formatMessage(messages["header.user.menu.account.settings"])
  }, {
    type: "item",
    href: config.LOGOUT_URL,
    content: intl.formatMessage(messages["header.user.menu.logout"])
  }];
  var loggedOutItems = [{
    type: "item",
    href: config.LOGIN_URL,
    content: intl.formatMessage(messages["header.user.menu.login"])
  }, {
    type: "item",
    href: "".concat(config.LMS_BASE_URL, "/register"),
    content: intl.formatMessage(messages["header.user.menu.register"])
  }];
  var props = {
    logo: LogoPNG,
    logoAltText: config.SITE_NAME,
    siteName: config.SITE_NAME,
    logoDestination: "".concat(config.LMS_BASE_URL, "/dashboard"),
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    mainMenu: mainMenu,
    userMenu: userMenu,
    loggedOutItems: loggedOutItems
  };
  return React.createElement(React.Fragment, null, React.createElement(Responsive, {
    maxWidth: 768
  }, React.createElement(MobileHeader, props)), React.createElement(Responsive, {
    minWidth: 769
  }, React.createElement(DesktopHeader, props)));
}

Header.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Header);
//# sourceMappingURL=Header.js.map