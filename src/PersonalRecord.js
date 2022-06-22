import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'
import { useLocation } from 'react-router-dom'

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
    alignItems: 'center',
    overflow: 'scroll'
})

const PersonalRecord = () => {
    const location = useLocation()
    console.log(location.state.playerName)
    return (
        <BackGroundPaper>
            <PlayersPaper>

            </PlayersPaper>
            <ResultPaper>

            </ResultPaper>
        </BackGroundPaper>
    )
}
export default PersonalRecord