import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

type MenuItemProps = {
  menuItem: {index: number, icon?: string, text?: string};
};

export const MenuItem = ({ menuItem }: MenuItemProps) => {
	const style = { border: `2px solid ${colors[menuItem.index]}` };
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
      className="my-li"
		>
			<div className="w-12 h-12 rounded-full mr-4" style={style} >
        {menuItem?.icon}
      </div>
			<div className="border w-28 rounded-lg text-gray-950 p-2" style={style} >
        {menuItem?.text}
      </div>
		</motion.li>
	);
};
