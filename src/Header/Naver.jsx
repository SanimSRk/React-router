import { Link, NavLink } from 'react-router-dom';

const Naver = () => {
  return (
    <div>
      <nav className="navers">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/About'}>About</NavLink>
        <NavLink to={'/Posts'}>Posts</NavLink>
        <NavLink to={'/ Contact'}>Contact</NavLink>
      </nav>
    </div>
  );
};

export default Naver;
