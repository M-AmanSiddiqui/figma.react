import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { UserOutlined,MenuOutlined,SearchOutlined,HeartOutlined,ShoppingCartOutlined } from "@ant-design/icons";

const Navbar = () => {
    const {cartItems,addItemCart} = useContext(CartContext)
const [ismobileMenuOpen , setmobileMenuOpen] = useState(false);
const toggleMobileMenu = () => {
    setmobileMenuOpen(ismobileMenuOpen);
};
return (
<div className="container top-0 left-0 z-50 w-full">
<nav className="flec items-center justify-between h-24 bg-white shadow-md">
<div className="flex items-center">
<img className="w-24 h-24 mr-2 ml-7" src="img/pic1.png" alt="Logo"/>
<h1 className="text-4xl font-bold text-gray-800">Furniro</h1>
</div>


</nav>
</div>
)
}
export default Navbar