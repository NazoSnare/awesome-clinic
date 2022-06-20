export const GET_USER = 'GET_USER';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS';
export const VIEW_APPOINTMENT = 'VIEW_APPOINTMENT';



export const getUser = () => dispatch => {

    dispatch({
        type: GET_USER
    });
};

export const viewAppointment = (id) => dispatch => {

    dispatch({
        type: VIEW_APPOINTMENT,
        payload: id
    });
};

export const deleteAppointment = (id) => dispatch => {

    dispatch({
        type: DELETE_APPOINTMENT,
        payload: id
    });

};

export const getAppointments = () => dispatch => {

    dispatch({
        type: GET_APPOINTMENTS
    });
};