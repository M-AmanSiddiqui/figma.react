import { Button,Image } from "antd";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

function Home() {
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState (true);
    useEffect(() => {
        setTimeout(() => {
            setProduct(productData);
            setLoading(false)
        }, 1000);
    },[]);
    

    return (
        <div className="container mx-auto max-w-screen-2xl">

            <Navbar />
          
        </div>
    )
}
export default Home