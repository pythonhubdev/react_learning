import styled from "styled-components";


// Tagged template literal

// Styled components are just functions that return a React component with some styles applied to it.
// They use tagged template literals to do this.

const StyledH2 = styled.h2`
  // We can pass dynamic props to our styled components with the help of the props object.
  font-size: ${props => props.fontSize || "1.5em"};
  color: red;

  // We can also add media queries to our styled components.

  @media (max-width: 900px) {
    font-size: 1em;
  }
`;


const StyledComponent = () => {
    return (
        <StyledH2>
            This is a styled component
        </StyledH2>
    );
}

export default StyledComponent;
