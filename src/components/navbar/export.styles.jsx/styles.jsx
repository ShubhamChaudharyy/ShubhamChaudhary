import constant from '../../constant.styles.js'
import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles({
    nav_special:{
        position:'absolute',
        left:'10vw',
        fontWeight:'800',
        margin:'30px'
    },
    nav_items:{
        fontWeight:'200',
        margin:'30px',
        fontSize:'15px'
    },
    nav_parent:{
        ...constant.decent_center,
        backgroundColor:'transparent',
    }
})
export default useStyles