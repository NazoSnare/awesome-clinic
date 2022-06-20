import styled from 'styled-components/native';

export const StyledClinicContainer = styled.View`
   flex: 1;
   flex-direction: ${props => props.isHorizontal ? 'row' : 'column'};
   align-items: center;
   justify-content: ${props => props.isEvenLayout ? 'space-around' : props.isStartLayout ? 'flex-start' : 'center'};
   backgroundColor: ${ ({isPage, color}) =>  color ?? (isPage && '#fbf0e8')};
`;