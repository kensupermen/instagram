import * as React from "react";

class Header extends React.Component {

  render() {
    return <div>
        <nav className="navbar navbar-expand-l navbar-light bg-light">
          <div className='container'>
            <a href="#" className="navbar-brand">Instagram</a>
            <ul className='navbar-nav navbar-right'>
              <li className='nav-item'>
                <a href="#" className='nav-link'>Sign Up</a>
              </li>
            </ul>
          </div>

        </nav>
      </div>
  }
}

export default Header;
