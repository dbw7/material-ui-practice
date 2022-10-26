import { createTheme, ThemeProvider, Typography } from "@mui/material";
import "./ErrorPage.css";
const theme = createTheme({
    breakpoints: {
      values: {
        xxs: [0,500], // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
});
  
const ErrorPage = (props) =>{
    return(
        <div className="error">
            <div className="error-info">
                <img style={{width:"85vw", maxWidth:"512px"}} src="https://cdn-icons-png.flaticon.com/512/1156/1156361.png" alt="404 error"></img>
                <ThemeProvider theme={theme}>
                    <Typography variant="h2" sx={{typography:{xxs: "h3"}}}>Page Not Found</Typography>
                    <Typography variant="h4">If you think this is an error, contact me here.</Typography>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default ErrorPage;