import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import SimpleSearchBar from "../components/SimpleSearchBar";

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
  root: {
    flexGrow: 1,
  },
}));

const Searchlayout = props => {
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();
  useEffect(() => {
    
  }, [])


  const onRequestSearch = () => {
    console.log('onRequestSearch', inputValue);
    
  }
  const onCancelSearch = () => {
    setInputValue('');
    console.log('onCancelSearch');

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
      </Grid>
      
    </Container>


   
  );
};

const mapState = state => ({
  userProgress: state.user
});
const maspDispatch = dispatch => ({
  getUser: (payload) => dispatch({ type: "user/getUser", payload })
})
export default connect(
  mapState,
  maspDispatch
)(Searchlayout);
