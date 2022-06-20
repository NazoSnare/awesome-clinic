import React from 'react';
import { StyledClinicContainer } from './ClinicContainer.styles';

const ClinicContainer = (props) => {
    return (
        <StyledClinicContainer {...props}>
            {props.children}
        </StyledClinicContainer>    
    );
}

export default ClinicContainer;
