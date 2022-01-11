import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

import Header from "./../../Components/header/Header";
import Posts from "./../../Components/posts/Posts";
import Sidebar from "./../../Components/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
