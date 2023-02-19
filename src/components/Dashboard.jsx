import Header from "./Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Dashboard = () => {
	return (
		<Box m='20px'>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='center'>
				<Header
					title='Home'
					subtitle='press Esc to close sidebar'
				/>
			</Box>
			<Box
				style={{
					justifyContent: "center",
					display: "inline-grid",
					width: "100%",
				}}>
				<Typography
					variant='h4'
					mb='15px'>
					<strong>Press the top left button for more features.</strong>
				</Typography>
				<Divider />
				<Typography
					variant='h3'
					mt='15px'>
					<strong>Features:</strong>
				</Typography>
				<Typography variant='p'>
					this dashboard is made using ReacJS and MaterialUI, plus some additional
					libraries including:
					<ul>
						<li>
							<a href='https://nivo.rocks/'>Nivo Charts</a> to draw the charts
						</li>
						<li>
							<a href='https://www.npmjs.com/package/formik'>Formik</a>+
							<a href='https://www.npmjs.com/package/yup'>Yup</a> for form
							rendering and validation
						</li>
						<li>
							<a href='https://reactrouter.com/en/main'>React Router</a> for
							routing
						</li>
					</ul>
				</Typography>
				<Typography variant='h3'>
					<strong>Notes:</strong>
				</Typography>
				<Typography variant='p'>
					<ul>
						<li>You can toggle dark theme using the top right button.</li>
						<li>
							This app is responsive, suited for large/small desktop and mobile
							viewers.
						</li>
						<li>All the charts use SVG, except for Geo, it uses Canvas.</li>
					</ul>
				</Typography>
			</Box>
		</Box>
	);
};

export default Dashboard;
