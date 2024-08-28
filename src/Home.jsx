import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const users = useSelector(state => state.users)
    console.log(users)
    return ( 
        <div className="home">

        </div>
     );
}
 
export default Home;