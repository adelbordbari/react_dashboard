import * as React from "react";
import { Box } from "@mui/material";
import { ResponsiveGeoMap, ResponsiveChoroplethCanvas } from "@nivo/geo";
import Header from "./Header";
import { countries } from "../data/world_countries.js";

export default function Contacts() {
	const data = [
		{
			id: "AFG",
			value: 627742,
		},
		{
			id: "AGO",
			value: 24838,
		},
		{
			id: "ALB",
			value: 731428,
		},
		{
			id: "ARE",
			value: 111432,
		},
		{
			id: "ARG",
			value: 946002,
		},
		{
			id: "ARM",
			value: 877860,
		},
		{
			id: "ATA",
			value: 603281,
		},
		{
			id: "ATF",
			value: 974949,
		},
		{
			id: "AUT",
			value: 846514,
		},
		{
			id: "AZE",
			value: 98852,
		},
		{
			id: "BDI",
			value: 163505,
		},
		{
			id: "BEL",
			value: 836031,
		},
		{
			id: "BEN",
			value: 303675,
		},
		{
			id: "BFA",
			value: 842491,
		},
		{
			id: "BGD",
			value: 233947,
		},
		{
			id: "BGR",
			value: 594096,
		},
		{
			id: "BHS",
			value: 505866,
		},
		{
			id: "BIH",
			value: 754823,
		},
		{
			id: "BLR",
			value: 561705,
		},
		{
			id: "BLZ",
			value: 8879,
		},
		{
			id: "BOL",
			value: 464111,
		},
		{
			id: "BRN",
			value: 216567,
		},
		{
			id: "BTN",
			value: 864201,
		},
		{
			id: "BWA",
			value: 382599,
		},
		{
			id: "CAF",
			value: 789342,
		},
		{
			id: "CAN",
			value: 424811,
		},
		{
			id: "CHE",
			value: 548219,
		},
		{
			id: "CHL",
			value: 560571,
		},
		{
			id: "CHN",
			value: 358217,
		},
		{
			id: "CIV",
			value: 493952,
		},
		{
			id: "CMR",
			value: 743780,
		},
		{
			id: "COG",
			value: 685954,
		},
		{
			id: "COL",
			value: 129706,
		},
		{
			id: "CRI",
			value: 790605,
		},
		{
			id: "CUB",
			value: 388103,
		},
		{
			id: "-99",
			value: 653386,
		},
		{
			id: "CYP",
			value: 61460,
		},
		{
			id: "CZE",
			value: 97587,
		},
		{
			id: "DEU",
			value: 951143,
		},
		{
			id: "DJI",
			value: 881631,
		},
		{
			id: "DNK",
			value: 295547,
		},
		{
			id: "DOM",
			value: 487921,
		},
		{
			id: "DZA",
			value: 334435,
		},
		{
			id: "ECU",
			value: 774494,
		},
		{
			id: "EGY",
			value: 835303,
		},
		{
			id: "ERI",
			value: 317538,
		},
		{
			id: "ESP",
			value: 541675,
		},
		{
			id: "EST",
			value: 207009,
		},
		{
			id: "ETH",
			value: 562035,
		},
		{
			id: "FIN",
			value: 987850,
		},
		{
			id: "FJI",
			value: 793574,
		},
		{
			id: "FLK",
			value: 398903,
		},
		{
			id: "FRA",
			value: 297291,
		},
		{
			id: "GAB",
			value: 430113,
		},
		{
			id: "GBR",
			value: 253808,
		},
		{
			id: "GEO",
			value: 230430,
		},
		{
			id: "GHA",
			value: 265228,
		},
		{
			id: "GIN",
			value: 239591,
		},
		{
			id: "GMB",
			value: 185841,
		},
		{
			id: "GNB",
			value: 211312,
		},
		{
			id: "GNQ",
			value: 616407,
		},
		{
			id: "GRC",
			value: 645937,
		},
		{
			id: "GTM",
			value: 287194,
		},
		{
			id: "GUY",
			value: 465672,
		},
		{
			id: "HND",
			value: 810013,
		},
		{
			id: "HRV",
			value: 775856,
		},
		{
			id: "HTI",
			value: 522245,
		},
		{
			id: "HUN",
			value: 498888,
		},
		{
			id: "IDN",
			value: 572178,
		},
		{
			id: "IND",
			value: 558256,
		},
		{
			id: "IRL",
			value: 708347,
		},
		{
			id: "IRN",
			value: 208741,
		},
		{
			id: "IRQ",
			value: 292393,
		},
		{
			id: "ISL",
			value: 889528,
		},
		{
			id: "ISR",
			value: 716986,
		},
		{
			id: "ITA",
			value: 247850,
		},
		{
			id: "JAM",
			value: 830770,
		},
		{
			id: "JOR",
			value: 729611,
		},
		{
			id: "JPN",
			value: 318203,
		},
		{
			id: "KAZ",
			value: 360085,
		},
		{
			id: "KEN",
			value: 105856,
		},
		{
			id: "KGZ",
			value: 145948,
		},
		{
			id: "KHM",
			value: 904876,
		},
		{
			id: "OSA",
			value: 745033,
		},
		{
			id: "KWT",
			value: 851501,
		},
		{
			id: "LAO",
			value: 928165,
		},
		{
			id: "LBN",
			value: 109451,
		},
		{
			id: "LBR",
			value: 452287,
		},
		{
			id: "LBY",
			value: 607012,
		},
		{
			id: "LKA",
			value: 499453,
		},
		{
			id: "LSO",
			value: 698345,
		},
		{
			id: "LTU",
			value: 258372,
		},
		{
			id: "LUX",
			value: 391390,
		},
		{
			id: "LVA",
			value: 704085,
		},
		{
			id: "MAR",
			value: 978702,
		},
		{
			id: "MDA",
			value: 656949,
		},
		{
			id: "MDG",
			value: 814381,
		},
		{
			id: "MEX",
			value: 266506,
		},
		{
			id: "MKD",
			value: 194589,
		},
		{
			id: "MLI",
			value: 339102,
		},
		{
			id: "MMR",
			value: 544583,
		},
		{
			id: "MNE",
			value: 620312,
		},
		{
			id: "MNG",
			value: 455257,
		},
		{
			id: "MOZ",
			value: 776024,
		},
		{
			id: "MRT",
			value: 868178,
		},
		{
			id: "MWI",
			value: 421944,
		},
		{
			id: "MYS",
			value: 169453,
		},
		{
			id: "NAM",
			value: 103062,
		},
		{
			id: "NCL",
			value: 898442,
		},
		{
			id: "NER",
			value: 511296,
		},
		{
			id: "NGA",
			value: 245554,
		},
		{
			id: "NIC",
			value: 380613,
		},
		{
			id: "NLD",
			value: 60323,
		},
		{
			id: "NOR",
			value: 240874,
		},
		{
			id: "NPL",
			value: 495081,
		},
		{
			id: "NZL",
			value: 998718,
		},
		{
			id: "OMN",
			value: 756526,
		},
		{
			id: "PAK",
			value: 96660,
		},
		{
			id: "PAN",
			value: 153434,
		},
		{
			id: "PER",
			value: 8798,
		},
		{
			id: "PHL",
			value: 462287,
		},
		{
			id: "PNG",
			value: 691870,
		},
		{
			id: "POL",
			value: 890780,
		},
		{
			id: "PRI",
			value: 789663,
		},
		{
			id: "PRT",
			value: 594303,
		},
		{
			id: "PRY",
			value: 238437,
		},
		{
			id: "QAT",
			value: 988719,
		},
		{
			id: "ROU",
			value: 468085,
		},
		{
			id: "RUS",
			value: 327324,
		},
		{
			id: "RWA",
			value: 611831,
		},
		{
			id: "ESH",
			value: 728788,
		},
		{
			id: "SAU",
			value: 555363,
		},
		{
			id: "SDN",
			value: 961900,
		},
		{
			id: "SDS",
			value: 37726,
		},
		{
			id: "SEN",
			value: 828513,
		},
		{
			id: "SLB",
			value: 823761,
		},
		{
			id: "SLE",
			value: 807483,
		},
		{
			id: "SLV",
			value: 892060,
		},
		{
			id: "ABV",
			value: 849805,
		},
		{
			id: "SOM",
			value: 794066,
		},
		{
			id: "SRB",
			value: 507479,
		},
		{
			id: "SUR",
			value: 338649,
		},
		{
			id: "SVK",
			value: 745637,
		},
		{
			id: "SVN",
			value: 411027,
		},
		{
			id: "SWZ",
			value: 577446,
		},
		{
			id: "SYR",
			value: 840130,
		},
		{
			id: "TCD",
			value: 778420,
		},
		{
			id: "TGO",
			value: 134834,
		},
		{
			id: "THA",
			value: 193564,
		},
		{
			id: "TJK",
			value: 867864,
		},
		{
			id: "TKM",
			value: 611013,
		},
		{
			id: "TLS",
			value: 50890,
		},
		{
			id: "TTO",
			value: 863998,
		},
		{
			id: "TUN",
			value: 252014,
		},
		{
			id: "TUR",
			value: 571749,
		},
		{
			id: "TWN",
			value: 891045,
		},
		{
			id: "TZA",
			value: 550540,
		},
		{
			id: "UGA",
			value: 688345,
		},
		{
			id: "UKR",
			value: 114712,
		},
		{
			id: "URY",
			value: 879825,
		},
		{
			id: "USA",
			value: 445275,
		},
		{
			id: "UZB",
			value: 583664,
		},
		{
			id: "VEN",
			value: 196490,
		},
		{
			id: "VNM",
			value: 642640,
		},
		{
			id: "VUT",
			value: 747862,
		},
		{
			id: "PSE",
			value: 885926,
		},
		{
			id: "YEM",
			value: 157037,
		},
		{
			id: "ZAF",
			value: 745178,
		},
		{
			id: "ZMB",
			value: 518139,
		},
		{
			id: "ZWE",
			value: 572455,
		},
		{
			id: "KOR",
			value: 78550,
		},
	];
	const features = countries;
	return (
		<Box m='20px'>
			<Header
				title='Map'
				subtitle='View an example of Geological Data'
			/>
			<Box
				m='40px 0 0 0'
				height='75vh'>
				<ResponsiveChoroplethCanvas
					data={data}
					features={features}
					margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
					colors='RdBu'
					domain={[0, 1000000]}
					unknownColor='#101b42'
					label='properties.name'
					valueFormat='.2s'
					projectionTranslation={[0.5, 0.5]}
					projectionRotation={[0, 0, 0]}
					enableGraticule={true}
					graticuleLineColor='rgba(0, 0, 0, .2)'
					borderWidth={0.5}
					borderColor='#101b42'
					legends={[
						{
							anchor: "bottom-left",
							direction: "column",
							justify: true,
							translateX: 20,
							translateY: -60,
							itemsSpacing: 0,
							itemWidth: 92,
							itemHeight: 18,
							itemDirection: "left-to-right",
							itemOpacity: 0.85,
							symbolSize: 18,
						},
					]}
				/>
			</Box>
		</Box>
	);
}
