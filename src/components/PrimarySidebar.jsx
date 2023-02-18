// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Typography from "@mui/material/Typography";
// import HomeIcon from "@mui/icons-material/Home";
// import ShowChartIcon from "@mui/icons-material/ShowChart";
// import PieChartIcon from "@mui/icons-material/PieChart";
// import MapIcon from "@mui/icons-material/Map";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
// import AppBar from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";

// const data = [
// 	{ name: "Dashboard", icon: <HomeIcon /> },
// 	{ name: "Line Chart", icon: <ShowChartIcon /> },
// 	{ name: "Pie Chart", icon: <PieChartIcon /> },
// 	{ name: "Geography", icon: <MapIcon /> },
// 	{ name: "Docs", icon: <LibraryBooksIcon /> },
// ];

// export default function ResponsiveDrawer() {
	
	
// 	return (
		
// 	);
// }

// // const drawerWidth = 240;

// // function ResponsiveDrawer(props) {
// // 	const { window } = props;
// // 	const [mobileOpen, setMobileOpen] = React.useState(false);

// // 	const handleDrawerToggle = () => {
// // 		setMobileOpen(!mobileOpen);
// // 	};

// // 	const drawer = (
// // 		<div>
// // 			<Divider />
// // 			<List>
// // 				<ListItem disablePadding>
// // 					<ListItemButton>
// // 						<ListItemIcon>
// // 							<HomeIcon />
// // 						</ListItemIcon>
// // 						<ListItemText primary='Dashboard' />
// // 					</ListItemButton>
// // 				</ListItem>
// // 			</List>
// // 			<Divider />
// // 			<List>
// // 				<ListItem disablePadding>
// // 					<ListItemButton>
// // 						<ListItemIcon>
// // 							<ShowChartIcon />
// // 						</ListItemIcon>
// // 						<ListItemText primary='Line Chart' />
// // 					</ListItemButton>
// // 				</ListItem>
// // 				<ListItem disablePadding>
// // 					<ListItemButton>
// // 						<ListItemIcon>
// // 							<PieChartIcon />
// // 						</ListItemIcon>
// // 						<ListItemText primary='Pie Chart' />
// // 					</ListItemButton>
// // 				</ListItem>
// // 				<ListItem disablePadding>
// // 					<ListItemButton>
// // 						<ListItemIcon>
// // 							<MapIcon />
// // 						</ListItemIcon>
// // 						<ListItemText primary='Geography' />
// // 					</ListItemButton>
// // 				</ListItem>
// // 			</List>
// // 			<Divider />
// // 			<List>
// // 				<ListItem disablePadding>
// // 					<ListItemButton>
// // 						<ListItemIcon>
// // 							<LibraryBooksIcon />
// // 						</ListItemIcon>
// // 						<ListItemText primary='Docs' />
// // 					</ListItemButton>
// // 				</ListItem>
// // 			</List>
// // 		</div>
// // 	);

// // 	const container =
// // 		window !== undefined ? () => window().document.body : undefined;

// // 	return (
// // 		<Box sx={{ display: "flex" }}>
// // 			<CssBaseline />
// // 			<AppBar
// // 				position='fixed'
// // 				sx={{
// // 					width: { sm: `calc(100% - ${drawerWidth}px)` },
// // 					ml: { sm: `${drawerWidth}px` },
// // 				}}>
// // 				<Toolbar>
// // 					<IconButton
// // 						color='inherit'
// // 						aria-label='open drawer'
// // 						edge='start'
// // 						onClick={handleDrawerToggle}
// // 						sx={{ mr: 2, display: { sm: "none" } }}>
// // 						<MenuIcon />
// // 					</IconButton>
// // 				</Toolbar>
// // 			</AppBar>
// // 			<Box
// // 				component='nav'
// // 				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
// // 				aria-label='mailbox folders'>
// // 				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
// // 				<Drawer
// // 					container={container}
// // 					variant='temporary'
// // 					open={mobileOpen}
// // 					onClose={handleDrawerToggle}
// // 					ModalProps={{
// // 						keepMounted: true, // Better open performance on mobile.
// // 					}}
// // 					sx={{
// // 						display: { xs: "block", sm: "none" },
// // 						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
// // 					}}>
// // 					{drawer}
// // 				</Drawer>
// // 				<Drawer
// // 					variant='permanent'
// // 					sx={{
// // 						display: { xs: "none", sm: "block" },
// // 						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
// // 					}}
// // 					open>
// // 					{drawer}
// // 				</Drawer>
// // 			</Box>
// // 		</Box>
// // 	);
// // }

// // ResponsiveDrawer.propTypes = {
// // 	/**
// // 	 * Injected by the documentation to work in an iframe.
// // 	 * You won't need it on your project.
// // 	 */
// // 	window: PropTypes.func,
// // };

// // export default ResponsiveDrawer;
