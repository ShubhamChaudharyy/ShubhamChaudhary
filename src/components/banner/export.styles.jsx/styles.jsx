import {makeStyles} from '@material-ui/core/styles'
import constant from '../../constant.styles'
const useStyles=makeStyles({
    basic:{
        display:'flex',
        flexDirection:'row',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
    },
    child:{
        display:'flex',
        alignItems:'center'
    },
    center:{
        ...constant.decent_center,
        justifyContent:'space-around',
        flexWrap:'wrap-reverse',
    },
    banner:{
        height:'85vh',
        width:"100vw",
        display:'flex',
        flexDirection:'column',
        backgroundColor:'black',
        borderRadius:'20px',
        overflowY:'scroll'
    },
    intro:{
        margin:'30px',
        color:'white',
        fontSize:'40px',
        fontWeight:'800',
        // backgroundColor:'Yellow',
        lineHeight:'2.6rem'
    },
    dp_child:{
        border:'3px solid #FED000',
        borderRadius:'50%',
        width:'200px'
    },
    href:{
        color:'white'
    },
    dp:{
        margin:'80px',
        color:'white',
        // backgroundColor:'Yellow'
    },
    fb:{
        fontSize:'2rem'
    },
    lkd:{
        fontSize:'2rem'
    },
    git:{
        fontSize:'2rem'
    },
    doc:{
        fontSize:'2rem'
    },
    contact_icons:{
        fontSize:'25px',
        marginTop:'30px'
    },
    contact_mediums:{
        ...constant.decent_center,
        fontSize:'25px',
        fontWeight:'100',
        lineHeight:'1.7rem'
    }
})
export default useStyles