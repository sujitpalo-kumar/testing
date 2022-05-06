import React, { useState } from 'react'


const User = ({data}) => {
    const [showUser, setShowUser] = useState(false)
    const storeChange = () => {
        setShowUser(!showUser)
        

    };
       console.log(showUser)
    return (
        <>
        <ul>
            <li>{d}</li>
        </ul>
            <div>
                <div className="info-check">
                    <input
                        type="checkbox"
                        onChange={storeChange}
                        className="checkboxUser"
                        checked={showUser}
                    />
                    <label className="checkbox-label">Show Info</label>
                </div>
               </div>
        </>
    );
}

export default User;