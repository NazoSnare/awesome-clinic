import React from 'react';
import { StyledClinicText } from './ClinicText.styles';

const ClinicText = (props) => {
    return (
       <StyledClinicText {...props}>
         {props.value}
       </StyledClinicText>
    );
}

export default ClinicText;
