import React from "react";
import {
  HomeOutlined,
  CalendarOutlined,
  InboxOutlined,
  CarryOutOutlined,
  ShopOutlined,
  CommentOutlined,
  UsergroupAddOutlined 
} from "@ant-design/icons";
export const SideBarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeOutlined />,
    cName: "nav-text",
  },
 
  {
    title: "Produit",
    path: "/produit",
    icon: <InboxOutlined />,
    cName: "nav-text",
  },
  
  {
    title: "Categorie",
    path: "/categorie",
    icon: <InboxOutlined />,
    cName: "nav-text",
  },
  {
    title: "User",
    path: "/user",
    icon: <InboxOutlined />,
    cName: "nav-text",
  },
];
