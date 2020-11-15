import {makeStyles} from '@material-ui/core/styles'
import constant from '../../constant.styles'

const useStyles = makeStyles({
    project_section:{        
        backgroundColor:'#333333'
    },
    company_name:{
        fontWeight:'100',
        fontFamily:'Roboto Condensed',
        color:'#e6e6e6'
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
        display:'flex',
        justifyContent:'center',
        color:'white',
        fontWeight:'100',
        fontSize:'15px',
        fontFamily:'Roboto Condensed',
        borderBottom:'5px solid #FED000',
        padding:'10px',
        cursor:'pointer',
    },
    
})
export default useStyles