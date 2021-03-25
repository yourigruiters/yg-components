import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	${({ theme }) => {
		console.log(theme);
	}}
	width: 100%;
	height: auto;
`;

type Props = {
	text: string;
};

const Popover: React.FC<Props> = ({ text }) => {
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

export default Popover;
