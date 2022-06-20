import React from 'react';
import { StyledProfileImage } from './ProfileImage.styles';

const ProfileImage = (props) => {
    return (
       <StyledProfileImage resizeMode={'cover'} {...props}>
        {/* {props.children} */}
       </StyledProfileImage>
    );
}

export default ProfileImage;
