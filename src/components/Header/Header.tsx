/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import './Header.scss';
import HiddNav from './HiddNav/HiddNav';
import Logo from './Logo/Logo';
import { Sandwich } from './Sandwich/Sandwich';

export default function Header() {
  return (
    <header className="header"><a id="top"></a>
      <nav className='header_nav'>
        <Logo/>
        <HiddNav/>
        <Sandwich/>
      </nav>
    </header>
  )
}