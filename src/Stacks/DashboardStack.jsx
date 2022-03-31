import { createDrawerNavigator } from '@react-navigation/drawer';
import {Home} from "../pages/Dashboard/Home";
import {Profile} from "../pages/Dashboard/Profile";
import React from "react";

const Drawer = createDrawerNavigator();

export const MyDrawer=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}