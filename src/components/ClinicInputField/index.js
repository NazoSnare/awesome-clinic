import React from 'react';
import { StyledInputField } from './ClinicInputField.styles';

const ClinicInputField = (props) => {
    return (
        <StyledInputField editable={false} {...props}>
        </StyledInputField>
    );
}

export default ClinicInputField;
