import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu} from 'antd';

function Navbar() {
  const location = useLocation();
  const [current, setCurrent] = useState('home');

  useEffect(() => {
    const {pathname} = location;
    setCurrent(pathname === '/' ? 'home' : pathname.slice(1));
  }, [location]);

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
