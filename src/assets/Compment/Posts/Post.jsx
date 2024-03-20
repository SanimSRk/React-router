import { Link, useNavigate } from 'react-router-dom';

const Post = ({ posts }) => {
  const { id, title } = posts;
  const navigate = useNavigate();
  const hendileClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h2>post:{id} </h2>
      <h2>title:{title} </h2>

      <button onClick={hendileClick}>Show details</button>
    </div>
  );
};

export default Post;
