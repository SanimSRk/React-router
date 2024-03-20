import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetalis = () => {
  const postDetls = useLoaderData();
  const { id, title, body } = postDetls;

  const navigate = useNavigate();

  const goBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="post">
      <h2>post:{id} </h2>
      <h2>title:{title} </h2>
      <small>{body}</small>
      <button onClick={goBackClick}>GoBack</button>
    </div>
  );
};

export default PostDetalis;
