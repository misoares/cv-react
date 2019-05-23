import { makeStyles, createStyles, Typography, Theme, createMuiTheme } from "@material-ui/core";
import { responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ResponsiveFontSizesOptions } from "@material-ui/core/styles/responsiveFontSizes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        background: {
            background: `url("../static/images/banner.webp")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    })
);

export default function TitleBanner(props) {
    const classes = useStyles();

    const options: ResponsiveFontSizesOptions = {
        factor: 10
    }
    const theme = responsiveFontSizes(createMuiTheme(), options);

    return (
        <div className={classes.background}>
            <ThemeProvider theme={theme}>
                <Typography variant='h2' align='center' style={{ color: 'white' }}>
                    {props.title}
                </Typography>
                <Typography variant='subtitle1' align='center' style={{ color: '#f0f0f0', fontStyle: 'italic' }}>
                    {props.quote}
                    <br />
                    {props.quotePerson}
                </Typography>
            </ThemeProvider>
        </div >
    )
}