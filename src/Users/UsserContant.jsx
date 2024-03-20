import { Link } from 'react-router-dom';

const UsserContant = ({ userss }) => {
  const { id, name, email, phone } = userss;

  const userStyle = {
    border: '2px solid yellow',
    padding: '10px',
    marging: '10px',
  };
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Phone:{phone}</h2>
      <Link to={`/UsserContant/${id}`}>Show details </Link>
    </div>
  );
};

export default UsserContant;
