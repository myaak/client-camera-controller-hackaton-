import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'


export  const StyledTextField = styled(TextField)({
    "& label": {
        color: "#2a79cd",
        fontWeight:600
      },
      "& label.Mui-focused": {
        color: "#2a79cd",
        fontWeight:700
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#2a79cd"
      },
      "& .MuiInputBase-root": {
        color:"#e5e5e5"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#2a79cd",
          borderWidth:2,
          
        },
        "&:hover fieldset": {
          borderColor: "#2a79cd",
          borderWidth: 2
        },
        "&.Mui-focused fieldset": {
          borderColor: "#2a79cd",
        }
      } 
})
