import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.div`
	width: 100%;
	height: auto;
`;

const StyledButton = styled.button``;

const Button = ({ text, title }) => {
	return (
		<Container>
			<StyledButton title={title ? title : text}>{text}</StyledButton>
		</Container>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	title: PropTypes.string,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	title: "",
};

export default Button;
