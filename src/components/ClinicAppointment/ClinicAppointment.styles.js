import styled from 'styled-components/native';

export const StyledClinicAppointment = styled.TouchableOpacity`
backgroundColor: ${props => props.theme.colors.secondary};
border: ${props => `1px solid ${props.theme.colors.primary}`};
    padding: 18px;
    margin-vertical: 15px;
    margin-horizontal: 15px;
    align-items: center;
    justify-content: center;
`;