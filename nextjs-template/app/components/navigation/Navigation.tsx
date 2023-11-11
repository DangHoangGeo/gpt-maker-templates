import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

type NavigationProps = {
  isOpen: boolean;
};

export const Navigation = ({isOpen}:NavigationProps) => (
  <motion.ul variants={variants} className={isOpen ? "my-ul":"hidden"}>
    {itemIds.map(item => (
      <MenuItem menuItem={item} key={item.index} />
    ))}
  </motion.ul>
);

const itemIds = [
  {index: 0, icon:'', text:'Learning', href:'/test-components'},
  {index: 1, icon:'', text:'Discovery', href:'/discovery'},
  {index: 2, icon:'', text:'Practice', href:'/practice'},
  {index: 3, icon:'', text:'Dashboard', href:'/dashboard'},
  {index: 4, icon:'', text:'Settings', href:'/settings'},
  {index: 5, icon:'', text:'Profile', href:'/profile'},
  {index: 6, icon:'', text:'Logout', href:'/logout'},
];
