import React, { useContext } from "react";
import Responsive from "react-responsive";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { AppContext } from "@edx/frontend-platform/react";
import { ensureConfig } from "@edx/frontend-platform/config";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

import LogoPNG from "./vtieol.png";

import messages from "./Header.messages";

ensureConfig(
  ["LMS_BASE_URL", "LOGOUT_URL", "LOGIN_URL", "SITE_NAME"],
  "Header component"
);

function Header({ intl }) {
  const { authenticatedUser, config } = useContext(AppContext);

  const mainMenu = [
    {
      type: "item",
      href: `/courses`,
      content: intl.formatMessage(messages["header.links.courses"]),
    },
  ];

  const userMenu =
    authenticatedUser === null
      ? []
      : [
          {
            type: "item",
            href: `/courses`,
            content: intl.formatMessage(messages["header.user.menu.dashboard"]),
          },
          {
            type: "item",
            href: `${config.LMS_BASE_URL}/u/${authenticatedUser.username}`,
            content: intl.formatMessage(messages["header.user.menu.profile"]),
          },
          {
            type: "item",
            href: `${config.LMS_BASE_URL}/account/settings`,
            content: intl.formatMessage(
              messages["header.user.menu.account.settings"]
            ),
          },
          {
            type: "item",
            href: config.LOGOUT_URL,
            content: intl.formatMessage(messages["header.user.menu.logout"]),
          },
        ];

  const loggedOutItems = [
    {
      type: "item",
      href: config.LOGIN_URL,
      content: intl.formatMessage(messages["header.user.menu.login"]),
    },
    {
      type: "item",
      href: `${config.LMS_BASE_URL}/register`,
      content: intl.formatMessage(messages["header.user.menu.register"]),
    },
  ];

  const props = {
    logo: LogoPNG,
    logoAltText: config.SITE_NAME,
    siteName: config.SITE_NAME,
    logoDestination: `/courses`,
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    mainMenu,
    userMenu,
    loggedOutItems,
  };

  return (
    <React.Fragment>
      <Responsive maxWidth={768}>
        <MobileHeader {...props} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeader {...props} />
      </Responsive>
    </React.Fragment>
  );
}

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);
