import React from 'react'; // eslint-disable-line no-unused-vars
import shallowCompare from 'react/lib/shallowCompare';
import classnames from 'classnames';

import filterInputAttributes from './filter-input-attributes';

/**
 * The input field
 * @param {Object} props The component's props
 * @return {JSX} The icon component.
 */
class GhostedInput extends React.Component {

  /**
   * Whether or not the component should update
   * @param {Object} nextProps The new properties
   * @param {Object} nextState The new state
   * @return {Boolean} Update or not?
   */
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  /**
   * Make the ghosted text's casing match the user input
   * @return {String} The modified string
   */
  matchUserInputCasing() {
    return this.props.value.replace(new RegExp(this.props.userInput, 'i'), this.props.userInput); // eslint-disable-line max-len
  }

  /**
   * Only display text if user input matches selected item
   * @return {Bool}
   */
  inputMatchesSelectedSuggest() {
    return new RegExp(this.props.userInput, 'i').test(this.props.value);  // eslint-disable-line max-len
  }

  /**
   * Determin ghosted input value
   * @return {String}
   */
  getGhostedValue() {

    // Clear ghosted value if user clears field
    if (!this.props.userInput) {
      return '';
    }

    // Selected input matches user input
    if (this.inputMatchesSelectedSuggest()) {
      return this.matchUserInputCasing();
    }

    return '';
  }


  /**
   * Render the view
   * @return {Function} The React element to render
   */
  render() {
    const attributes = filterInputAttributes(this.props),
      classes = classnames(
        'geosuggest__ghosted-input',
        this.props.className
      );

    return <input className={classes}
      ref='input'
      type='text'
      autoComplete='off'
      {...attributes}
      value={this.getGhostedValue()}
      style={this.props.style} />;
  }
}

/**
 * Default values for the properties
 * @type {Object}
 */
GhostedInput.defaultProps = {
  className: '',
  value: '',
  userInput: ''
};

export default GhostedInput;
