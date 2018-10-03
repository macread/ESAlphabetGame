import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Results from './results';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {

  constructor() {
    super()
    
    this.state = {
      enteredText: '',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      letters: [],
      counts: [],
      
    }
  }

  componentDidMount() {
    //put the alphbet into an array (let the computer do the work)
    const letters = this.state.alphabet.split('');
    let counts = this.state.letters.map(count => count = 0);
    this.setState({letters, counts});
  }

  handleChange(val) {
    this.setState({
      enteredText: val,
    });
  };

  countLetterOccurances() {
    //initialize the count array
    let counts = this.state.letters.map(count => count = 0);
    //put the entered text into an arry
    const letters = this.state.enteredText.split('');
    //now count the letters
    letters.forEach(letter => {
      const idx = this.state.letters.indexOf(letter.toUpperCase());
      counts[idx]++;
    });
    //update state so we can display the counts
    this.setState({counts})
  }

  render() {
    const { classes } = this.props;

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A Way Fun Alphabet Game</h1>
        </header>
        <p className="App-intro"></p>

      
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="alphabet"
            label="Enter your text here"
            multiline
            rowsMax="10"
            value={this.state.enteredText}
            onChange={( e ) => this.handleChange( e.target.value )}
            className={classes.textField}
            margin="normal"
            helperText="Enter some text and I will count the number of times each letter is used."
            variant="filled"
          />
          
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={() => this.countLetterOccurances()}
          >
            Count
          </Button>
        </form>

        <Results letters={this.state.letters} counts={this.state.counts} />
        
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
