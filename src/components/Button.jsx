import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
	width: 100%;
	height: auto;
`;

const Button = ({ text, title }) => {
	return (
		<Container>
			<button title={title ? title : text}>{text}</button>
		</Container>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

Button.defaultProps = {
	title: "",
};

export default Button;
