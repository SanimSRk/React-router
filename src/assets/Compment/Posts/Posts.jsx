import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
  const userPost = useLoaderData();
  return (
    <div>
      <h2>Post:{userPost.length} </h2>
      <div className="users">
        {userPost.map(posts => (
          <Post key={posts.id} posts={posts}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
