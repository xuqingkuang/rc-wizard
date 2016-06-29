import React, { Component, PropTypes } from 'react';
import Locale from './locale/zh_CN';

const noop = () => {};
const PREVIOUS = 'previous';
const NEXT = 'next';

export default class Wizard extends Component {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.array.isRequired,
    locale: PropTypes.object.isRequired,
    displayKey: PropTypes.string,
    onDone: PropTypes.func,
  }

  static defaultProps = {
    className: 'wizard',
    locale: Locale,
    displayKey: undefined,
    onDone: noop,
  }

  constructor(props) {
    super(props);
    const { children } = props;
    let childrenKeys = [];
    if (children.length > 0) {
      childrenKeys = (this.getChildrenKeys(children));
    }
    let displayingKey = props.displayKey;
    if (!displayingKey) {
      displayingKey = children[0].key;
    }
    this.state = { childrenKeys, displayingKey };
  }

  componentWillReceiveProps(nextProps) {
    const childrenKeys = this.getChildrenKeys(nextProps.children);
    const newState = { childrenKeys };
    if (childrenKeys.indexOf(this.state.displayingKey) < 0) {
      newState.displayKey = childrenKeys[0];
    }
    if (nextProps.displayKey && nextProps.displayKey !== this.state.displayKey) {
      newState.displayKey = nextProps.displayKey;
    }
    this.setState(newState);
  }

  getChildrenKeys(children) {
    return children.filter((child) => {
      return child;
    }).map((child) => { return child.key; });
  }

  handleSteps(action, callback) {
    const index = this.state.childrenKeys.indexOf(this.state.displayingKey);
    if (index < 0) {
      return console.error(
        `Current key ${this.state.displayingKey} seems\
 got mistake, we have ${this.state.childrenKeys}`
      );
    }
    let nextKey;
    if (action === PREVIOUS) {
      if (index === 0) {
        return this.state.displayingKey;
      }
      nextKey = this.state.childrenKeys[index - 1];
    }
    if (action === NEXT) {
      if (index === this.state.childrenKeys.length - 1) {
        return this.state.displayingKey;
      }
      nextKey = this.state.childrenKeys[index + 1];
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
    const keyIndex = this.state.childrenKeys.indexOf(child.key);
    const newChildProps = {
      orignalKey: child.key,
      displayKey: this.state.displayingKey,
      locale: this.props.locale,
      isFirst: keyIndex === 0,
      isLast: keyIndex === this.state.childrenKeys.length - 1,
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
          children.filter((child) => {
            return child;
          }).map((child, index) => {
            return this.renderPage(child, index, onDone);
          })
        }
      </div>
    );
  }

}
