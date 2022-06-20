import React, { useEffect} from 'react';
import { useTheme } from 'styled-components';
import { ClinicContainer, ClinicInputField, ClinicText, ProfileImage } from '../components';
import {useDispatch, useSelector} from 'react-redux';
import { getUser } from '../utils/redux/actions';

const ProfileScreen = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    

    useEffect(() => {
      dispatch(getUser());
    }, []);


    return (
      <ClinicContainer color={theme?.colors?.primary} isPage={true} isStartLayout={true} >
        <ProfileImage source={{uri: user.profile}} />
        <ClinicText isBold={true} fontSize='12px' value='name'  />
        <ClinicInputField  keyboardType="default" value={user.name} placeholder="Enter name" />

        <ClinicText isBold={true} fontSize='12px' value='email address'  />
        <ClinicInputField  keyboardType="email-address" value={user.email} placeholder="Enter email address" />

        <ClinicText isBold={true} fontSize='12px' value='cellphone'  />
        <ClinicInputField  keyboardType="phone-pad" value={user.phone} placeholder="Enter phone" />

        <ClinicText isBold={true} fontSize='12px' value='address'  />
        <ClinicInputField  multiline={true} numberOfLines={4} maxLength={40} value={user.address} placeholder="address" />

        <ClinicText isItalics={true} fontSize='18px' value={`Member since: ${user.memberSince}`}  />
        
        
      </ClinicContainer >
    );
}

export default ProfileScreen;