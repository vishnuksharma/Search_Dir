import React, { useState, useEffect, memo } from "react";
import get from 'lodash/get';
import PropTypes from 'prop-types';
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
  
  const {
    getSearchDir,
    updateEmpSearchState,
    searchDirData,
    navigate,
    location,
  } = props;
  const { search } = location;
  const queryParams = new URLSearchParams(search);
  const [inputValue, setInputValue] = useState(queryParams.get('name') || '');
  const classes = useStyles();
  useEffect(() => {
    getSearchDir(queryParams.get('name') || '');
  }, []);


  const onRequestSearch = () => {
    getSearchDir(inputValue);
    if (inputValue){
      navigate(`/overview?name=${inputValue}`);
    } else {
      navigate(`/overview`);
    }
  }
  const onCancelSearch = () => {
    setInputValue('');
    updateEmpSearchState({});
  }

  const onChangehandler = () => {
    updateEmpSearchState({});
  }
  
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
            onChange={onChangehandler}
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
        {(!isEmpty(searchDirData) && !get(searchDirData, 'error', false)) && (
          <Grid item xs={8} className={classes.marginTop}>
            <EmpOverviewComponent {...props} searchInputValue={inputValue} />
          </Grid>
        )}
        { get(searchDirData, 'error', false) && (
            <Grid item xs={8}>
              <Box pt={3}>
                <Typography 
                variant="h6"
                component="div">
                  Record(s) not found. Please try other name.
                </Typography>
              </Box>
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
  const { searchDir: { getSearchDir, updateEmpSearchState } } = dispatch;
  return {
    getSearchDir,
    updateEmpSearchState,
  };
};

Searchlayout.propTypes = {
  getSearchDir: PropTypes.func.isRequired,
  updateEmpSearchState: PropTypes.func.isRequired,
  searchDirData: PropTypes.instanceOf(Object).isRequired,
}

Searchlayout.defaultProps = {
  searchDirData: {},
}

export default connect(
  mapState,
  mapDispatch
)(memo(Searchlayout));
