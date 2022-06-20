import React, { useContext } from 'react'
import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'
import CheckBox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Ascent from './images/Ascent.png'
import Bind from './images/Bind.png'
import Split from './images/Split.png'
import Haven from './images/Haven.png'
import Breeze from './images/Breeze.png'
import Icebox from './images/Icebox.png'
import Fracture from './images/Fracture.png'
import { PlayerCheckLimit, PlayerNameList } from './TotalProvider'
import { unstable_createChainedFunction } from '@mui/utils'

const BackGroundPaper = styled(Paper)({
    width: '1400px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const PlayersPaper = styled(Paper)({
    width: '300px',
    height: '40em',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const ResultPaper = styled(Paper)({
    width: '1050px',
    height: '40em',
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

const AddPlayerPaper = styled(Paper)({
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const StyledButton = styled(Button)({
    margin: '5px',
});

const TopPage = () => {
    const vltMaps = ['Ascent', 'Bind', 'Split', 'Icebox', 'Haven', 'Fracture', 'Breeze']
    const [playerCheck, setPlayerCheck] = useContext(PlayerCheckLimit)
    const [playerNameList, setPlayerNameList] = useContext(PlayerNameList)
    const newPlayer = {
        playerName: '',
        playerTag: ''
    }

    const drawMaps = () => {
        return vltMaps.sort().map((vltMap) => {
            var style = {
                backgroundColor: 'rgba(255,255,255,0.5)',
                backgroundBlendMode: 'lighten',
                backgroundSize: 'cover',
            }
            switch (vltMap) {
                case 'Ascent':
                    style.backgroundImage = `url(${Ascent})`
                    break
                case 'Bind':
                    style.backgroundImage = `url(${Bind})`
                    break
                case 'Split':
                    style.backgroundImage = `url(${Split})`
                    break
                case 'Haven':
                    style.backgroundImage = `url(${Haven})`
                    break
                case 'Icebox':
                    style.backgroundImage = `url(${Icebox})`
                    break
                case 'Breeze':
                    style.backgroundImage = `url(${Breeze})`
                    break
                case 'Fracture':
                    style.backgroundImage = `url(${Fracture})`
                    break
                default:
            }

            return (
                <MapPaper style={style} key={vltMap}>
                    {vltMap}
                </MapPaper>
            )
        }) 
    }

    const handleUserName = (e) => {
        newPlayer.playerName = e.target.value
    }

    const handleUserTag = (e) => {
        newPlayer.playerTag = e.target.value
    }

    const handleAddClick = () => {
        playerNameList.push(newPlayer)
        setPlayerNameList([...playerNameList])
        var nameForm = document.getElementById("userName")
        var tagForm = document.getElementById("userTag")
        nameForm.value = null
        tagForm.value = null
        console.log(playerNameList)
    }

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
                <AddPlayerPaper>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <TextField margin="normal" id="userName" label="UserName" onChange={handleUserName} />
                        <TextField margin="normal" id="userTag" label="UserTag" onChange={handleUserTag} />
                    </div>
                    <StyledButton variant="contained" color="primary" onClick={handleAddClick}>
                        Add Player
                    </StyledButton>
                </AddPlayerPaper>
            </PlayersPaper>
            <ResultPaper>
                {drawMaps()}
            </ResultPaper>
        </BackGroundPaper>
    )
}

export default TopPage