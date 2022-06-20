import React from 'react';
import {ClinicButton, ClinicText} from '..';
import { StyledClinicAppointment } from './ClinicAppointment.styles';
import { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { viewAppointment, deleteAppointment } from '../../utils/redux/actions';

const ClinicAppointment = (props) => {
    const appointment = props.appointmentData;
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
       <StyledClinicAppointment onPress={() => {
             dispatch(viewAppointment(appointment.id));
       }} {...props}>

           <ClinicText fontSize='18px' color={theme.colors.accent}  value={appointment.address} />
            <ClinicText color="blue" isBold={true} value={appointment.doctorName} />
            <ClinicText isItalics={true}  color={theme.colors.primary} isBold={true}  value={appointment.isViewed ? 'viewed' : 'not viewed'} />
            <ClinicButton onPress={() => {
             dispatch(deleteAppointment(appointment.id));
       }} text="delete" />
          </StyledClinicAppointment> 
    );
}

export default ClinicAppointment;
