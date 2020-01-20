import React from 'react';
import get from 'lodash/get';
import { Grid, Typography, List, ListItem, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'left',
  },
  alignMent: {
    textAlign: 'left',
    paddingLeft: '16px',
  }
}));

const EmpOverviewComponent = (props) => {
  const { searchDirData, searchInputValue } = props;
  const classes = useStyles();
  console.log(searchDirData, 'searchDirData');
  
  const renderEmpList = () => {
    return get(searchDirData, '[1].direct-subordinates', []).map(item => {
      return (
      <ListItem>
        <Typography className={classes.alignMent}
            variant="h6"
            component="div">{item}</Typography>
      </ListItem>
      )
    })
  }
  return (
    <Grid container>
      <Grid item xs={12}>
      <Typography
            variant="h6"
            component="div">Employee Overview</Typography>
      </Grid>
      <Grid item xs={12} className={classes.alignMent}>
      <Box pt={3}>
        <Typography 
            variant="h6"
            component="div">
              Subordinates of employee <b>{searchInputValue}</b>:
            </Typography>
      </Box>
      </Grid>
      <Grid item xs={12}>
        <List className={classes.root}>
          {renderEmpList()}
        </List>
      </Grid>
    </Grid>
  )
};

export default (EmpOverviewComponent);
