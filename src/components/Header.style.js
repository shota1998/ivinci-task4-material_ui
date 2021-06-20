import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '0 10%',
    // width: '100%',
    // height: '5rem',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  title: {
    flex: 1,
  },
  title_font: {
    color: 'black',
  },
}));

export default useStyles;
