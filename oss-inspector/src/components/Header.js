import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component
{
  render()
  {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div>
          OSSInspector
        </div>
        <div>
          Flipkart Infosec Grid 4.0
        </div>
    </nav>
      
    )
  }
}
export default Header;