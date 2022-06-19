import React from 'react'
import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'
import CheckBox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'


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
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})



const TopPage = () => {
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
                <MapPaper>
                    <h3>Ascent</h3>
                </MapPaper>
                <MapPaper>
                    <h3>Bind</h3>
                </MapPaper>
                <MapPaper>
                    <h3>Split</h3>
                </MapPaper>
                <MapPaper>
                    <h3>Icebox</h3>
                </MapPaper>
                <MapPaper>
                    <h3>Haven</h3>
                </MapPaper>
                <MapPaper>
                    <h3>Fracture</h3>
                </MapPaper>
                <MapPaper>
                    <h3>Breeze</h3>
                </MapPaper>
            </ResultPaper>
        </BackGroundPaper>
    )
}

export default TopPage