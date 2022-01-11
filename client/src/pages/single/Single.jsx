import SinglePost from "./../../Components/singlePost/SinglePost";
import Sidebar from './../../Components/sidebar/Sidebar';
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
