import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;