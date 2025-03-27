import React from 'react'

function Profile(props) {
    const {profil}=props;
  return (
    <div>
        <img src={profil.avatar} />
        <p>{profil.name}</p>
    </div>
  )
}

export default Profile