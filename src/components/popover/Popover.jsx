import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
	width: 100%;
	height: auto;
`;

const Popover = ({ text }) => {
	const [open, setOpen] = useState(false);

	return (
		<Container>
			<div
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
			>
				hover me
			</div>
			{open && <div>{text}</div>}
		</Container>
	);
};

Popover.propTypes = {
	text: PropTypes.string.isRequired,
};

Popover.defaultProps = {};

export default Popover;
