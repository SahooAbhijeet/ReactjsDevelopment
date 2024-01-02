import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from './Header';
import ItemCard from './ItemCard';
import ItemList from './ItemList'

const Home = () => {
    // const usenavigate = useNavigate();
    // const [customerlist, listupdate] = useState(null);
   
    // useEffect(() => {

    //   let jwttoken = sessionStorage.getItem('jwttoken');
    //     fetch("https://localhost:44308/Customer", {
    //         headers: {
    //             'Authorization': 'bearer ' + jwttoken
    //         }
    //     }).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         listupdate(resp);
    //     }).catch((err) => {
    //         console.log(err.messsage)
    //     });
    // }, []);

    return (
        <>
        <Header />
        <ItemList />
        </>
    )
}

export default Home;