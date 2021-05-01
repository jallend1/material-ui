import {
  makeStyles,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const drawerWidth = 240;
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ];

  const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3)
      },
      drawer: {
        width: drawerWidth
      },
      drawerPaper: {
        width: drawerWidth
      },
      root: {
        display: 'flex'
      },
      active: {
        background: '#f4f4f4'
      },
      title: {
        padding: theme.spacing(2)
      }
    };
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Future Home of App Bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => {
                history.push(item.path);
              }}
              className={
                item.path === location.pathname ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
