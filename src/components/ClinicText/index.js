import React from 'react';
import { StyledClinicText } from './ClinicText.styles';

const ClinicText = (props) => {
    return (
       <StyledClinicText testID='clinicText' {...props}>
         {props.value}
       </StyledClinicText>
    );
}

export default ClinicText;
