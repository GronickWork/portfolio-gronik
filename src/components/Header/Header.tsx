/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import './Header.scss';
import DeskNav from './DeskNav/DeskNav';
import Logo from './Logo/Logo';
import { Sandwich } from './Sandwich/Sandwich';
import DeviceNav from './DeviceNav/DeviceNav';

export default function Header() {
  return (
    <header className="header"><a id="top"></a>
      <nav className='header_nav'>
        <Logo/>
        <DeskNav/>
        <Sandwich/>
        <DeviceNav/>
      </nav>
    </header>
  )
}