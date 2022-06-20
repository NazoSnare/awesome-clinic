import * as React from 'react';
import  {ClinicButton, ClinicContainer, ClinicText}  from '../components';

const HomeScreen = () => {
    return (
      <ClinicContainer isPage={true}>
        <ClinicContainer isEvenLayout={true}>
            <ClinicText isBold={true} fontSize='36px' value='Awesome Clinic' />
            <ClinicText isItalics={true} value='Please click one of the buttons to continue' />
        </ClinicContainer>
        <ClinicContainer isHorizontal={true}>
            <ClinicButton isLink={true} page='Profile'  text='My Profile'/>
            <ClinicButton isLink={true} page='Appointments' text='My Appointments'/>
        </ClinicContainer>
      </ClinicContainer>
    );
}

export default HomeScreen;