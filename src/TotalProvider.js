import React, { useState } from 'react'

export const PlayerCheckLimit = React.createContext()
export const PlayerNameList = React.createContext()

const Provider = ({children}) => {
    const [playerCheck, setPlayerCheck] = useState([])
    const [playerNameList, setPlayerNameList] = useState([])

    return (
        <PlayerCheckLimit.Provider value={[playerCheck, setPlayerCheck]}>
            <PlayerNameList.Provider value={[playerNameList, setPlayerNameList]}>
                {children}
            </PlayerNameList.Provider>
        </PlayerCheckLimit.Provider>
    )
}

export default Provider