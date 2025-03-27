import React ,{useEffect, useState} from 'react'
import Profile from './Profile';
import { profile_data } from '../data';

function ProfileList() {
    const[profiles, setProfiles] =useState([]);

    useEffect(()=>{
        setProfiles(profile_data)
    }, [])

  return (
    <div>{profiles.map((profile, index) =>(
    <Profile key={index} profil={profile}/>
        ))

}</div>
  )
}

export default ProfileList