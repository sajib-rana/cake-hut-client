import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuCategory from "../ManuCategory/MenuCategory";

import fruitImg from '../../../assets/assets/menu/fruit-cake.jpg'
import vanillaImg from '../../../assets/assets/menu/vanilla.jpg'
import chocolateImg from '../../../assets/assets/menu/chocalate-cake2.jpg'
import dessertImg from '../../../assets/assets/menu/dessert.jpg'

const Menu = () => {
    
     const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const fruit = menu.filter(item => item.category === 'Fruit-Cakes');
    const vanilla = menu.filter(item => item.category === 'Vanilla-Cakes');
    const Chocolate = menu.filter(item => item.category === 'Chocolate-Cakes');
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
            <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={Chocolate} title={"Chocolate-Cake"} img={chocolateImg}></MenuCategory>
            <MenuCategory items={vanilla} title={"Vanilla-Cake"} img={vanillaImg}></MenuCategory>
            <MenuCategory items={fruit} title={"Fruit-Cake"} img={fruitImg}></MenuCategory>
        </div>
    );
};

export default Menu;