import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ClinicAppointments, ClinicContainer, ClinicText} from '../components';
import { getAppointments } from '../utils/redux/actions';

const AppointmentsScreen = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointments);


  

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

    return (
      <ClinicContainer isPage={true}>
        <ClinicText isBold={true} fontSize='27px' value={`Joe's Dr Appointments`}  />
        <ClinicAppointments list={appointments.appointments} />
      </ClinicContainer >
    );
}

export default AppointmentsScreen;