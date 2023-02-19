import * as React from "react";
import Box from "@mui/material/Typography";
import { ResponsiveLine } from "@nivo/line";
import Header from "./Header";

export default function LinechartNevo() {
	const data = [
		{
			id: "japan",
			color: "hsl(65, 70%, 50%)",
			data: [
				{
					x: "plane",
					y: 81,
				},
				{
					x: "helicopter",
					y: 209,
				},
				{
					x: "boat",
					y: 203,
				},
				{
					x: "train",
					y: 158,
				},
				{
					x: "subway",
					y: 192,
				},
				{
					x: "bus",
					y: 203,
				},
				{
					x: "car",
					y: 90,
				},
				{
					x: "moto",
					y: 168,
				},
				{
					x: "bicycle",
					y: 239,
				},
				{
					x: "horse",
					y: 253,
				},
				{
					x: "skateboard",
					y: 267,
				},
				{
					x: "others",
					y: 214,
				},
			],
		},
		{
			id: "france",
			color: "hsl(251, 70%, 50%)",
			data: [
				{
					x: "plane",
					y: 222,
				},
				{
					x: "helicopter",
					y: 155,
				},
				{
					x: "boat",
					y: 204,
				},
				{
					x: "train",
					y: 176,
				},
				{
					x: "subway",
					y: 183,
				},
				{
					x: "bus",
					y: 183,
				},
				{
					x: "car",
					y: 299,
				},
				{
					x: "moto",
					y: 278,
				},
				{
					x: "bicycle",
					y: 4,
				},
				{
					x: "horse",
					y: 18,
				},
				{
					x: "skateboard",
					y: 126,
				},
				{
					x: "others",
					y: 223,
				},
			],
		},
		{
			id: "us",
			color: "hsl(163, 70%, 50%)",
			data: [
				{
					x: "plane",
					y: 244,
				},
				{
					x: "helicopter",
					y: 288,
				},
				{
					x: "boat",
					y: 116,
				},
				{
					x: "train",
					y: 300,
				},
				{
					x: "subway",
					y: 6,
				},
				{
					x: "bus",
					y: 173,
				},
				{
					x: "car",
					y: 272,
				},
				{
					x: "moto",
					y: 34,
				},
				{
					x: "bicycle",
					y: 8,
				},
				{
					x: "horse",
					y: 49,
				},
				{
					x: "skateboard",
					y: 89,
				},
				{
					x: "others",
					y: 183,
				},
			],
		},
		{
			id: "germany",
			color: "hsl(69, 70%, 50%)",
			data: [
				{
					x: "plane",
					y: 298,
				},
				{
					x: "helicopter",
					y: 191,
				},
				{
					x: "boat",
					y: 186,
				},
				{
					x: "train",
					y: 210,
				},
				{
					x: "subway",
					y: 40,
				},
				{
					x: "bus",
					y: 67,
				},
				{
					x: "car",
					y: 24,
				},
				{
					x: "moto",
					y: 119,
				},
				{
					x: "bicycle",
					y: 162,
				},
				{
					x: "horse",
					y: 206,
				},
				{
					x: "skateboard",
					y: 143,
				},
				{
					x: "others",
					y: 293,
				},
			],
		},
		{
			id: "norway",
			color: "hsl(201, 70%, 50%)",
			data: [
				{
					x: "plane",
					y: 39,
				},
				{
					x: "helicopter",
					y: 222,
				},
				{
					x: "boat",
					y: 259,
				},
				{
					x: "train",
					y: 261,
				},
				{
					x: "subway",
					y: 218,
				},
				{
					x: "bus",
					y: 162,
				},
				{
					x: "car",
					y: 274,
				},
				{
					x: "moto",
					y: 85,
				},
				{
					x: "bicycle",
					y: 237,
				},
				{
					x: "horse",
					y: 174,
				},
				{
					x: "skateboard",
					y: 278,
				},
				{
					x: "others",
					y: 258,
				},
			],
		},
	];
	return (
		<Box m='20px'>
			<Header
				title='Line Chart'
				subtitle='View an example of Line Chart'
			/>
			<Box
				m='40px 0 0 0'
				height='75vh'>
				<ResponsiveLine
					data={data}
					margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
					xScale={{ type: "point" }}
					yScale={{
						type: "linear",
						min: "auto",
						max: "auto",
						stacked: true,
						reverse: false,
					}}
					yFormat=' >-.2f'
					axisTop={null}
					axisRight={null}
					axisBottom={{
						orient: "bottom",
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: "transportation",
						legendOffset: 36,
						legendPosition: "middle",
					}}
					axisLeft={{
						orient: "left",
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: "count",
						legendOffset: -40,
						legendPosition: "middle",
					}}
					pointSize={10}
					pointColor={{ theme: "background" }}
					pointBorderWidth={2}
					pointBorderColor={{ from: "serieColor" }}
					pointLabelYOffset={-12}
					useMesh={true}
					legends={[
						{
							anchor: "bottom-right",
							direction: "column",
							justify: false,
							translateX: 100,
							translateY: 0,
							itemsSpacing: 0,
							itemDirection: "left-to-right",
							itemWidth: 80,
							itemHeight: 20,
							itemOpacity: 0.75,
							symbolSize: 12,
							symbolShape: "circle",
							symbolBorderColor: "rgba(0, 0, 0, .5)",
							effects: [
								{
									on: "hover",
									style: {
										itemBackground: "rgba(0, 0, 0, .03)",
										itemOpacity: 1,
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
