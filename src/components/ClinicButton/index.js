import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ClinicText } from '..';
import { StyledClinicButton } from './ClinicButton.styles';

const ClinicButton = (props) => {
  const navigation = useNavigation();
  const isBold = props.isNotBold ? false : true;

  const onPressDo = () => {
      if(props.isLink) {
        navigation.navigate(props.page);
      }
      if(props.onClick) {
        props.onClick();
      }
  };

    return (
      <StyledClinicButton testID='clinicButton' onPress={() => { onPressDo()}}  {...props}>
        <ClinicText isBold={isBold} color={props.textColor ?? null} value={props.text ?? 'Clinic Button'} />
    </StyledClinicButton>
    );
}

export default ClinicButton;
