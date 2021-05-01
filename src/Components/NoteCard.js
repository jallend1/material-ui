import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography, makeStyles
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
const NoteCard = ({ note, handleDelete }) => {
  const useStyles = makeStyles({
    test: {
      border: (note) => {
        if(note.category === 'work'){
          return '3px solid red'
        }
      }
    }
  })
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
