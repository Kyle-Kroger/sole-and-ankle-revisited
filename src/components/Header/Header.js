import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side>
          <MobileIcons>
            <MenuButton>
              <Icon id="shopping-bag" strokeWidth={2} size={24} />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </MenuButton>
            <MenuButton>
              <Icon id="search" strokeWidth={2} size={24} />
              <VisuallyHidden>Search</VisuallyHidden>
            </MenuButton>
            <MenuButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={2} size={24} />
              <VisuallyHidden>Show menu</VisuallyHidden>
            </MenuButton>
          </MobileIcons>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  /*if there is a set height then this will cause a vertical scroll bar*/
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
    1.25rem,
    8.1vw - 4rem,
    3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileIcons = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 24px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const MenuButton = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

`;

export default Header;
