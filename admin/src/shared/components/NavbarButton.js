import React from "react";
import { NavLink } from "react-router-dom";

const NavbarButton = (props) => {
	return (
		<NavLink to={props.path}>
			<div
				// button
				className={
					"flex flex-row cursor-pointer shadow-inner hover:shadow-lg transform duration-300 active:translate-y-2 " +
					(props.path === props.currentPath
						? "bg-mainBlue"
						: "bg-navbarBgCol") +
					" w-[220px] py-1 px- rounded-xl items-center gap-5 my-2"
				}
			>
				<div
					// icon
					className={
						props.path === props.currentPath
							? "fill-navbarTextCol"
							: "fill-navbarTextCol"
					}
				>
					{props.children}
				</div>
				<div
					// button name
					className={
						"tracking-wider text-sm font-navbarText font-bold " +
						(props.path === props.currentPath
							? "text-navbarTextCol"
							: "text-navbarTextGrey")
					}
				>
					{props.name}
				</div>
			</div>
		</NavLink>
	);
};

export default NavbarButton;