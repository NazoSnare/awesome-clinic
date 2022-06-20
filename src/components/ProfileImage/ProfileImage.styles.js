import styled from 'styled-components/native';

// export const StyledProfileImage = styled.View`
//    flex: 0.4;
//    width: 100%;
//    flex-direction: ${props => props.isHorizontal ? 'row' : 'column'};
//    align-items: center;
//    justify-content: ${props => props.isEvenLayout ? 'space-around' : 'center'};
//    background-color: ${props => props.color ?? props.theme?.colors?.primary};
// `;
export const StyledProfileImage = styled.Image`
min-height: 150px;
min-width: 150px;
resize-mode: stretch;
`;