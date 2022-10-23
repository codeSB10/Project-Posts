import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Posts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState(id);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  function onSearch() {
    fetchPosts(searchId);
  }

  async function fetchPosts(value) {
    setLoading(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${value || id}`
    );
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchPosts();
    }, 500);
  }, []);

  return (
    <>
      <div className="post__search">
        {/* <Link to="/"> */}
          <button onClick={() => navigate('/')}>← Back</button>
        {/* </Link> */}
        <div className="post__search--container">
          <label className="post__search--label">Search by Id</label>
          <input
            type="number"
            min={1}
            max={10}
            value={searchId}
            onChange={(event) => setSearchId(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && onSearch()}
          />
          <button onClick={onSearch}>Enter</button>
        </div>
      </div>
      {loading
        ? new Array(10).fill(0).map((_, index) => (
            <div className="post" key={index}>
              <div className="post__title">
                <div className="post__title--skeleton"></div>
              </div>
              <div className="post__body">
                <p className="post__body--skeleton"></p>
              </div>
            </div>
          ))
        : posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post__title">{post.title}</div>
              <p className="post__body">{post.body}</p>
            </div>
          ))}
    </>
  );
}
