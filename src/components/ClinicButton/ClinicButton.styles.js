import styled from 'styled-components/native';

// export const Container = styled.SafeAreaView`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   background-color: wheat;
// `;

export const StyledClinicButton = styled.TouchableOpacity`
  margin: 6px;
  align-items:center;
  justify-content:center;
  border-radius: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${(props) => props.bgColor ?? props.theme?.colors?.primary};
`;