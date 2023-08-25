import { useState } from 'react';
import orderCoverImg from '../../../assets/assets/shop/chocolate-cake.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';

import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {
    const categories = ['Vanilla-Cake', 'Chocolate-Cake', 'Fruit-Cake', 'Dessert', 'Dan-Cake'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const fruit = menu.filter(item => item.category === 'Fruit-Cakes');
    const vanilla = menu.filter(item => item.category === 'Vanilla-Cakes');
    const Chocolate = menu.filter(item => item.category === 'Chocolate-Cakes');
    const dan = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Cake Hut | Order Cake</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order-Cake"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Vanilla-Cake</Tab>
                    <Tab>Chocalate-Cake</Tab>
                    <Tab>Fruit-Cake</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Dan-Cake</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={vanilla}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Chocolate}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={fruit}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dan}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;