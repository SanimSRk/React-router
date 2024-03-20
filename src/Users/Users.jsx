import { useLoaderData } from 'react-router-dom';
import UsserContant from './UsserContant';

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="">
      <h2>Bangladesh{users.length} </h2>
      <div className="users">
        {users.map(userss => (
          <UsserContant key={userss.id} userss={userss}></UsserContant>
        ))}
      </div>
    </div>
  );
};

export default Users;
