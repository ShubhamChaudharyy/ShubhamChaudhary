import {makeStyles} from '@material-ui/core/styles'
import constant from '../../constant.styles'

const useStyles = makeStyles({
    project_section:{
        display:'flex',
        alignItems:'flex-start',
        marginTop:'2vh',
        backgroundColor:'#333333'
    },
    heading:{
        margin:'30px',
        color:'white',
        textAlign:'center',
        fontSize:'30px',
        fontWeight:'800'
    },
    duration:{
        color:'white',
        fontWeight:'400',
        fontFamily:'Poppins',
        cursor:'pointer',
    },
    descrip:{
        color:'white',
        fontWeight:'100',
        fontSize:'15px',
        fontFamily:'Roboto Condensed',
        borderBottom:'5px solid #FED000',
        padding:'10px',
        cursor:'pointer',
    },
    themed_button:{
        ...constant.themed_button,
    },
    child_btn_theme:{
        border:'1px solid #FED000',
        color:'white',
        fontSize:'12px',
        padding:'10px',
        paddingRight:'20px',
        paddingLeft:'20px',
        borderRadius:'20px',
        cursor:'pointer'
    },
    href:{
        textDecoration:'none',
        color:'white'
    }
})
export default useStyles