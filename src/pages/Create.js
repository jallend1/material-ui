import { Container, Typography, Button, makeStyles } from '@material-ui/core/'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }  
})

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button 
        className={classes.btn}
        onClick={() => console.log('Clicked!!!')} 
        endIcon={<KeyboardArrowRightIcon />}
        type="submit" 
        color="secondary" 
        variant="contained">
          Submit
      </Button>
    </Container>
  )
}
