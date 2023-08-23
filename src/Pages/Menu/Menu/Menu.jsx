import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuCategory from "../ManuCategory/MenuCategory";

import soupImg from '../../../assets/assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/assets/menu/soup-bg.jpg'

const Menu = () => {
    
     const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'Fruit-Cakes');
    const salad = menu.filter(item => item.category === 'Vanilla-Cakes');
    const pizza = menu.filter(item => item.category === 'Chocolate-Cakes');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
             <Helmet>
                <title>Cake hut | Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"></Cover>
            <SectionTittle subHeading="Don't Miss" heading="Today's Offer"></SectionTittle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;