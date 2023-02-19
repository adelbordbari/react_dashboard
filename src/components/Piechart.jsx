import * as React from "react";
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import Header from "./Header";

export default function Contacts() {
	const data = [
		{
			id: "c",
			label: "c",
			value: 216,
			color: "hsl(264, 70%, 50%)",
		},
		{
			id: "javascript",
			label: "javascript",
			value: 592,
			color: "hsl(33, 70%, 50%)",
		},
		{
			id: "scala",
			label: "scala",
			value: 520,
			color: "hsl(139, 70%, 50%)",
		},
		{
			id: "haskell",
			label: "haskell",
			value: 272,
			color: "hsl(66, 70%, 50%)",
		},
		{
			id: "sass",
			label: "sass",
			value: 442,
			color: "hsl(180, 70%, 50%)",
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
				<ResponsivePie
					data={data}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: "color",
						modifiers: [["darker", 0.2]],
					}}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabelsTextColor='#333333'
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: "color" }}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{
						from: "color",
						modifiers: [["darker", 2]],
					}}
					defs={[
						{
							id: "dots",
							type: "patternDots",
							background: "inherit",
							color: "rgba(255, 255, 255, 0.3)",
							size: 4,
							padding: 1,
							stagger: true,
						},
						{
							id: "lines",
							type: "patternLines",
							background: "inherit",
							color: "rgba(255, 255, 255, 0.3)",
							rotation: -45,
							lineWidth: 6,
							spacing: 10,
						},
					]}
					fill={[
						{
							match: {
								id: "ruby",
							},
							id: "dots",
						},
						{
							match: {
								id: "c",
							},
							id: "dots",
						},
						{
							match: {
								id: "go",
							},
							id: "dots",
						},
						{
							match: {
								id: "python",
							},
							id: "dots",
						},
						{
							match: {
								id: "scala",
							},
							id: "lines",
						},
						{
							match: {
								id: "lisp",
							},
							id: "lines",
						},
						{
							match: {
								id: "elixir",
							},
							id: "lines",
						},
						{
							match: {
								id: "javascript",
							},
							id: "lines",
						},
					]}
					legends={[
						{
							anchor: "bottom",
							direction: "row",
							justify: false,
							translateX: 0,
							translateY: 56,
							itemsSpacing: 0,
							itemWidth: 100,
							itemHeight: 18,
							itemTextColor: "#999",
							itemDirection: "left-to-right",
							itemOpacity: 1,
							symbolSize: 18,
							symbolShape: "circle",
							effects: [
								{
									on: "hover",
									style: {
										itemTextColor: "#000",
									},
								},
							],
						},
					]}
				/>
			</Box>
		</Box>
	);
}
