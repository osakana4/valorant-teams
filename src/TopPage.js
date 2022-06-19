import React from 'react'
import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'
import CheckBox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import Ascent from './images/Ascent.png'

const BackGroundPaper = styled(Paper)({
    width: '1400px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const PlayersPaper = styled(Paper)({
    width: '300px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const ResultPaper = styled(Paper)({
    width: '1050px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
})

const MapPaper = styled(Paper)({
    width: '330px',
    height: '185px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const TopPage = () => {
    const maps = ['Ascent', 'Bind', 'Split', 'Icebox', 'Haven', 'Fracture', 'Breeze']

    return (
        <BackGroundPaper>
            <PlayersPaper>
                <h2>Players</h2>
                <FormGroup>
                    <FormControlLabel value="Player1" control={<CheckBox />} label="Player1" />
                    <FormControlLabel value="Player2" control={<CheckBox />} label="Player2" />
                    <FormControlLabel value="Player3" control={<CheckBox />} label="Player3" />
                    <FormControlLabel value="Player4" control={<CheckBox />} label="Player4" />
                    <FormControlLabel value="Player5" control={<CheckBox />} label="Player5" />
                    <FormControlLabel value="Player5" control={<CheckBox />} label="Player6" />
                </FormGroup>
            </PlayersPaper>
            <ResultPaper>
                {/* {maps.map((vltMap) => {
                    return <MapPaper style={{ 
                        opacity: '0.2',
                        backgroundImage: `url(${vltMap})`,
                        backgroundSize: 'cover'
                    }}>
                        {vltMap}
                    </MapPaper>
                })} */}

                {(() => {
                    return (
                        maps.map((vltMap) => {
                            switch(vltMap) {
                                case 'Ascent':
                                    return (
                                        <MapPaper style={{ 
                                            opacity: '0.2',
                                            backgroundImage: `url(${Ascent})`,
                                            backgroundSize: 'cover'
                                        }}>
                                            {vltMap}
                                        </MapPaper>
                                    )
                                default:
                                    return null
                            }
                        })
                    )
                })}    
            </ResultPaper>
        </BackGroundPaper>
    )
}

export default TopPage