import { 
    DELETE_APPOINTMENT,
    GET_APPOINTMENTS,
    VIEW_APPOINTMENT,
    GET_USER
} from './actions';

const dummyUser = {
    name: 'Joe Banana',
    email: 'joe@babs.com',
    phone: '078-968-7656',
    address: `154 South hills,johannesburg,gauteng`,
    memberSince: '20 July 2020',
    profile: 'https://via.placeholder.com/150'
  
};

const dummyAppointments = [
  {
      id: 1,
      isViewed: false,
      doctorName: 'Dr John King',
      address: 'Mandela Square, Sandton, South Africa',
      specialty: 'Physiotherapist'
  },
  {
      id: 2,
      isViewed: false,
      doctorName: 'Dr Mshefana',
      address: 'maputsoe,Buthabuthe,Lesotho',
      specialty: 'Dentist'
  },
  {
      id: 3,
      isViewed: false,
      doctorName: 'Dr Mshefana',
      address: 'maputsoe,Buthabuthe,Lesotho',
      specialty: 'Dentist'
  },
  {
      id: 4,
      isViewed: false,
      doctorName: 'Dr Abigail',
      address: 'Mandela Square, Sandton, South Africa',
      specialty: 'Psychologist'
  },
];

const initialUserState = {
  user: dummyUser
};

const initialAppointmentsState = {
    appointments: dummyAppointments
} 


export const userReducer = (state =initialUserState,action) => {

   switch (action.type) {
       case GET_USER:
           return {...state, user: dummyUser};
        default:
            return state;

   }
};

export const appointmentsReducer = (state =initialAppointmentsState,action) => {

   switch (action.type) {
       case GET_APPOINTMENTS:
           return {...state,appointments: dummyAppointments};

        case VIEW_APPOINTMENT:
            return {...state, appointments: state?.appointments?.map(a => {
                if(a.id === action.payload) {
                    a.isViewed = true;
                }
                return a;
            })};
        
        case DELETE_APPOINTMENT:
        
            return {...state, appointments: state?.appointments.filter(a => a.id !== action.payload)};
        
        default:
            return state;

   }


};

