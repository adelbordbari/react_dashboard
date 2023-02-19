import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../data/mockData";
import Header from "./Header";

export default function Contacts() {
	const columns = [
		{ field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "NAME",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "age",
			headerName: "AGE",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
	];
	return (
		<Box m='20px'>
			<Header
				title='Contacts'
				subtitle='View company contacts'
			/>
			<Box
				m='40px 0 0 0'
				height='75vh'>
				<DataGrid
					rows={mockDataTeam}
					columns={columns}
				/>
			</Box>
		</Box>
	);
}
