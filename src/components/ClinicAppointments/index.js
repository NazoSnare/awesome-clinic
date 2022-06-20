import React from 'react';
import { StyledClinicAppointments } from './ClinicAppointments.styles';
import {ClinicAppointment} from '..';

const ClinicAppointments = (props) => {

    const renderItem = ({ item }) => (
        <ClinicAppointment appointmentData={item} />
      );

    return (
       <StyledClinicAppointments  data={props.list} 
       renderItem={renderItem}
       keyExtractor={item =>item?.id} {...props}>
        </StyledClinicAppointments>
    );
}

export default ClinicAppointments;
