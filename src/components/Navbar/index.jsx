import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

function Navbar() {
  const [current, setCurrent] = useState('home');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="signin">
        <Link to="/signin">Sign in</Link>
      </Menu.Item>
      <Menu.Item key="signup">
        <Link to="/signup">Sign up</Link>
      </Menu.Item>
    </Menu>
  );
}
export default Navbar;
