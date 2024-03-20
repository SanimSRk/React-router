import { useLoaderData } from 'react-router-dom';

const UsersDetalis = () => {
  const user = useLoaderData();
  console.log(user);
  const { name } = user;
  return (
    <div>
      <h2>Details about users:{name} </h2>
    </div>
  );
};

export default UsersDetalis;
