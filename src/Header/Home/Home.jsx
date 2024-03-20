import { Outlet, useNavigation } from 'react-router-dom';
import Naver from '../Naver';

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Naver></Naver>
      {navigation.state === 'loading' ? <p>Loading.....</p> : <Outlet></Outlet>}
    </div>
  );
};

export default Home;
