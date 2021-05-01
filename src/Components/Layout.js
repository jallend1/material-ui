import { makeStyles } from '@material-ui/core';

const Layout = ({ children }) => {
  const useStyles = makeStyles({
    page: {
      background: '#f9f9f9',
      width: '100%'
    }
  });

  const classes = useStyles();
  return (
    <div>
      {/* App Bar */}
      {/* Side Drawer */}
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
