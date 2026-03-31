/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import './Header.scss';
import Logo from './Logo/Logo';

export default function Header() {
  return (
    <header className="header"><a id="top"></a>
      <nav className='header_nav'>
        <Logo/>
      </nav>
    </header>
  )
}