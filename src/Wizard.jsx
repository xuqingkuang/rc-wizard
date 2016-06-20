import React, { Component, PropTypes } from 'react';
import Locale from './locale/zh_CN';

const noop = () => {};
const PREVIOUS = 'previous';
const NEXT = 'next';

export default class Wizard extends Component {

  static defaultProps = {
    className: 'wizard',
    locale: Locale,
    displayKey: undefined,
    onDone: noop,
  }

  constructor(props) {
    super(props);
    const { children } = props;
    this.childrenKeys = [];
    if (children.length > 0) {
      this.childrenKeys = children.map((child) => {
        return child.key;
      });
    }
    let displayingKey = props.displayKey;
    if (!displayingKey) {
      displayingKey = children[0].key;
    }
    this.state = { displayingKey };
  }

  handleSteps(action, callback) {
    const index = this.childrenKeys.indexOf(this.state.displayingKey);
    if (index < 0) {
      return console.error(
        `Current key ${this.state.displayingKey} seems\
 got mistake, we have ${this.childrenKeys}`
      );
    }
    let nextKey;
    if (action === PREVIOUS) {
      if (index === 0) {
        return this.state.displayingKey;
      }
      nextKey = this.childrenKeys[index - 1];
    }
    if (action === NEXT) {
      if (index === this.childrenKeys.length - 1) {
        return this.state.displayingKey;
      }
      nextKey = this.childrenKeys[index + 1];
    }
    this.setState({
      displayingKey: nextKey,
    });
    if (typeof callback === 'function') {
      callback();
    }
  }

  renderPage(child, index, onDone) {
    const { onPrevious, onNext } = child.props;
    const keyIndex = this.childrenKeys.indexOf(child.key);
    const newChildProps = {
      orignalKey: child.key,
      displayKey: this.state.displayingKey,
      locale: this.props.locale,
      isFirst: keyIndex === 0,
      isLast: keyIndex === this.childrenKeys.length - 1,
      onPrevious: () => { this.handleSteps(PREVIOUS, onPrevious); },
      onNext: () => { this.handleSteps(NEXT, onNext); },
      onDone,
    };
    return React.cloneElement(child, newChildProps);
  }


  render() {
    const { id, className, children, onDone } = this.props;
    return (
      <div id={id} className={className}>
        {
          children.map((child, index) => {
            return this.renderPage(child, index, onDone);
          })
        }
      </div>
    );
  }

}

Wizard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  locale: PropTypes.object.isRequired,
  displayKey: PropTypes.string.isRequired,
  onDone: PropTypes.func,
};
