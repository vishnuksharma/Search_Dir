import React, { useState, useEffect, memo } from "react";
import isEmpty from "lodash/isEmpty";
import { connect } from "react-redux";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import SimpleSearchBar from "../components/SimpleSearchBar";
import EmpOverviewComponent from "../components/EmpOverview.component";
import { getEmpDirSearchState } from "../models/selectors";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(1)
  },
  marginTop: {
    marginTop:'40px',
  },
}));

const Searchlayout = props => {
  const { getSearchDir, updateEmpSearchState, searchDirData } = props;
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();
  useEffect(() => {
    getSearchDir('');
  }, [])


  const onRequestSearch = () => {
    getSearchDir(inputValue);
    console.log('onRequestSearch', inputValue);
    
  }
  const onCancelSearch = () => {
    setInputValue('');
    updateEmpSearchState({});
    console.log('onCancelSearch');
    

  }

  // console.log(updateEmpSearchState({}), 'updateEmpSearchState');
  
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Box pt={6}>
            <Typography
            variant="h6"
            component="div">Employee Explorer</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={6}>
          <SimpleSearchBar
            onCancelSearch={onCancelSearch}
            onChange={() => console.log('onChange')}
            onRequestSearch={onRequestSearch}
            inputValue={inputValue}
            setInputValue={setInputValue}
            style={{
              margin: '0 auto',
              maxWidth: 800
            }}
          />
        </Box>
        </Grid>
        {!isEmpty(searchDirData) && (
          <Grid item xs={8} className={classes.marginTop}>
            <EmpOverviewComponent {...props} searchInputValue={inputValue} />
          </Grid>
        )}
        

      </Grid>
      
    </Container>


   
  );
};

const mapState = state => {
  return {
    searchDirData: getEmpDirSearchState(state),
  };
};

const mapDispatch = (dispatch) => {
  console.log(dispatch, 'dispatch');
  
  const { searchDir: { getSearchDir, updateEmpSearchState } } = dispatch;
  return {
    getSearchDir,
    updateEmpSearchState,
  };
};

export default connect(
  mapState,
  mapDispatch
)(memo(Searchlayout));
