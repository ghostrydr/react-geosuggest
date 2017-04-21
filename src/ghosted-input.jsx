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
    return this.props.activeSuggest.label.replace(new RegExp(this.props.userInput, 'i'), this.props.userInput); // eslint-disable-line max-len
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
      value={this.matchUserInputCasing()}
      style={this.props.style} />;
  }
}

/**
 * Default values for the properties
 * @type {Object}
 */
GhostedInput.defaultProps = {
  className: '',
  activeSuggest: {label: ''},
  userInput: ''
};

export default GhostedInput;
