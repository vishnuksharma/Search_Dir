import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import { grey } from '@material-ui/core/colors'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'

const styles = {
  root: {
    height: 48,
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconButton: {
    opacity: 0.54,
    transform: 'scale(1, 1)',
    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  iconButtonHidden: {
    transform: 'scale(0, 0)',
    '& > $icon': {
      opacity: 0
    }
  },
  iconButtonDisabled: {
    opacity: 0.38
  },
  searchIconButton: {
    marginRight: -48
  },
  icon: {
    opacity: 0.54,
    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
  },
  input: {
    width: '100%'
  },
  searchContainer: {
    margin: 'auto 16px',
    width: 'calc(100% - 48px - 32px)' // 48px button + 32px margin
  }
}

const SimpleSearchBar = (props) => {
    const { 
        cancelOnEscape,
        className,
        classes,
        closeIcon,
        disabled,
        onCancelSearch,
        onRequestSearch,
        searchIcon,
        style,
        inputValue,
        setInputValue,
        ...inputProps
     } = props;

     const [stateFocus, setStateFocus] = useState(false);
    const inputRef = React.createRef();
     const [active, setActive] = useState(false);

    const handleFocus = (e) => {
        setStateFocus(true)
        if (props.onFocus) {
        props.onFocus(e)
        }
    }

    const handleBlur = (e) => {
        // setFocus(false)
        if (inputValue.trim().length === 0) {
          setInputValue(inputValue)
        }
        if (props.onBlur) {
        props.onBlur(e)
        }
    }

    const handleInput = (e) => {
        setInputValue(e.target.value)
        if (props.onChange) {
        props.onChange(e.target.value)
        }
    }

    const handleCancel = () => {
        setActive({active: false, value: ''})
        if (props.onCancelSearch) {
        props.onCancelSearch()
        }
    }

    const handleKeyUp = (e) => {
        if (e.charCode === 13 || e.key === 'Enter') {
        handleRequestSearch()
        } else if (props.cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {
        handleCancel()
        }
        if (props.onKeyUp) {
        props.onKeyUp(e)
        }
    }

    const handleRequestSearch = () => {
        if (props.onRequestSearch) {
        props.onRequestSearch(inputValue)
        }
    }

    /**
     * @public
     * Focus the input component.
     */
    const focus = () => {
        inputRef.current.focus()
    }

    /**
     * @public
     * Blur the input component.
     */
    const blur = () => {
        inputRef.current.blur()
    }
    return (
        <Paper
        className={classNames(classes.root, className)}
        style={style}
      >
        <div className={classes.searchContainer}>
          <Input
            {...inputProps}
            inputRef={inputRef}
            onBlur={handleBlur}
            value={inputValue}
            onChange={handleInput}
            onKeyUp={handleKeyUp}
            onFocus={handleFocus}
            fullWidth
            className={classes.input}
            disableUnderline
            disabled={disabled}
          />
        </div>
        <IconButton
          onClick={handleRequestSearch}
          classes={{
            root: classNames(classes.iconButton, classes.searchIconButton, {
              [classes.iconButtonHidden]: inputValue !== ''
            }),
            disabled: classes.iconButtonDisabled
          }}
          disabled={disabled}
        >
          {React.cloneElement(searchIcon, {
            classes: { root: classes.icon }
          })}
        </IconButton>
        <IconButton
          onClick={handleCancel}
          classes={{
            root: classNames(classes.iconButton, {
              [classes.iconButtonHidden]: inputValue === ''
            }),
            disabled: classes.iconButtonDisabled
          }}
          disabled={disabled}
        >
          {React.cloneElement(closeIcon, {
            classes: { root: classes.icon }
          })}
        </IconButton>
      </Paper>
    )
};

SimpleSearchBar.defaultProps = {
  className: '',
  closeIcon: <ClearIcon style={{ color: grey[500] }} />,
  disabled: false,
  placeholder: 'Search Employee',
  searchIcon: <SearchIcon style={{ color: grey[500] }} />,
  style: null,
  value: ''
}

SimpleSearchBar.propTypes = {
  cancelOnEscape: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  closeIcon: PropTypes.node,
  disabled: PropTypes.bool,
  onCancelSearch: PropTypes.func,
  onChange: PropTypes.func,
  onRequestSearch: PropTypes.func,
  placeholder: PropTypes.string,
  searchIcon: PropTypes.node,
  style: PropTypes.object,
  value: PropTypes.string
}

export default withStyles(styles)(SimpleSearchBar)