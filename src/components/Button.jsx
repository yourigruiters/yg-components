import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
	width: 100px;
	height: 100px;
	background-color: red;
`;

export default function Button({ text }) {
	return (
		<Container>
			<button>{text}</button>
		</Container>
	);
}
