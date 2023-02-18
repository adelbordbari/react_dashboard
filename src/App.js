import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveDrawer from "./components/PrimarySidebar";
import GeoMap from "./components/Worldmap";
import PrimaryAppBar from "./components/PrimaryAppbar";

function App() {
	return (
		<div className='App'>
			<Grid>
				<Grid
					item
					xs={10}>
					<PrimaryAppBar />
				</Grid>
			</Grid>
			{/* <Grid
				container
				spacing={2}>
				<Grid
					container
					xs={2}>
					<ResponsiveDrawer />
				</Grid>
			</Grid> */}
		</div>
	);
}

export default App;
