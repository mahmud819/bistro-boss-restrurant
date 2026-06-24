import React, { useState } from "react";
import OurShopBanner from "../OurShopBanner/OurShopBanner";
import OurShop from "../OurShop";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OurMenuBanner from "../../OurMenu/OurMenuBanner/OurMenuBanner";
import { useParams } from "react-router-dom";
import AllMenuData from "../../../CustomHook/AllMenuData/AllMenuData";

const OurShopMenu = () => {
    const foodMenus = ["salad","pizza","soups","dessert","drinks"]
    const {buttonTitle}= useParams();
    const initialIndex = foodMenus.indexOf(buttonTitle);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(buttonTitle,initialIndex,tabIndex);
  return (
    <div>
      {/* <OurMenuBanner></OurMenuBanner> */}
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel><AllMenuData selectedMenu={'salad'}></AllMenuData> </TabPanel>
          <TabPanel>Pizza</TabPanel>
          <TabPanel>Soups</TabPanel>
          <TabPanel>Desserts</TabPanel>
          <TabPanel>Drinks</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShopMenu;
