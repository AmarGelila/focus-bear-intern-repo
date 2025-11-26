import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return <div>Posts</div>;
}

export default Posts;
