import styled from 'styled-components/native';

export const StyledClinicText = styled.Text`
    font-size: ${(props) => props.fontSize ?? '18px'};
    color: ${(props) => props.color ?? props.theme?.colors?.accent};
    font-weight: ${(props) => props.boldness ?? '500'};
    flex-wrap: wrap;
    font-weight: ${props => props.isBold ? 'bold' : 'normal'};
    font-style: ${props => props.isItalics ? 'italic' : 'normal'};
`;