import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = ({ title, subtitle }) => {
	return (
		<Box mb='30x'>
			<Typography
				variant='h3'
				fontWeight='bold'>
				{title}
			</Typography>
			<Typography
				variant='h5'
				fontWeight='italic'>
				{subtitle}
			</Typography>
		</Box>
	);
};
export default Header;
