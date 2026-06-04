import React, { useState } from "react";
import SharedBackground from "../../../Shared/SharedComponent/SharedBackground/SharedBackground";
import ourShopBgImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const OurShopBanner = () => {

    const [tabIndex, setTabIndex] = useState(0);


  return (
    <div>
      <SharedBackground
        bgImage={ourShopBgImg}
        title={"Our Shop"}
        paragraph={"Would you like to try a dish?"}
      ></SharedBackground>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>Salad</TabPanel>
          <TabPanel>Pizza</TabPanel>
          <TabPanel>Soups</TabPanel>
          <TabPanel>Desserts</TabPanel>
          <TabPanel>Drinks</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShopBanner;
