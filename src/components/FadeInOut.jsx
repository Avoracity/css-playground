/* -------------- *\
  Outsourced from: https://codesandbox.io/p/sandbox/react-fadein-out-transition-component-eww6j?file=%2Fsrc%2FFadeInOut.js%3A3%2C2-105%2C1
  Defined Component in compliance with React 18 for compatible use
  Defined Component's Prop Type in compliance with React 18 for compatible use

\* -------------- */
import React from "react";
import PropTypes from 'prop-types'; // Import prop-types package

const UNMOUNTED = "unmounted";
const EXITED = "exited";
const ENTERING = "entering";
const ENTERED = "entered";
const EXITING = "exiting";

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

// Define the Component as a React Component
class FadeInOut extends React.Component {
  // Define the Prop Types of the Component
  static propTypes = {
    children: PropTypes.node.isRequired,
    duration: PropTypes.number.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    show: PropTypes.bool.isRequired // Ensure it is defined as a boolean prop type
  };

  constructor(props) {
    super(props);
    this.state = { status: UNMOUNTED };
  }

  componentDidMount() {
    const { show } = this.props;
    if (show) {
      this.performEnter();
    }
  }

  componentDidUpdate(prevProps) {
    let nextStatus = null;
    if (prevProps !== this.props) {
      const { status } = this.state;
      if (this.props.show) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(nextStatus);
  }

  updateStatus(nextStatus) {
    if (nextStatus !== null) {
      if (nextStatus === ENTERING) {
        this.performEnter();
      } else {
        this.performExit();
      }
    } else if (this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  }

  performEnter() {
    this.setState({ status: ENTERING }, () => {
      setTimeout(() => {
        this.setState({ status: ENTERED }, () => {});
      }, 0);
    });
  }

  performExit() {
    const { duration } = this.props;
    this.setState({ status: EXITING }, () => {
      setTimeout(() => {
        this.setState({ status: EXITED }, () => {});
      }, duration);
    });
  }

  render() {
    const { status } = this.state;
    if (status === UNMOUNTED) {
      return null;
    }

    const { children, duration, className, style } = this.props;
    return (
      <div
        className={className}
        style={{
          ...style,
          transition: `opacity ${duration}ms ease-in-out`,
          opacity: 0.1,
          ...transitionStyles[status]
        }}
      >
        {children}
      </div>
    );
  }
}

FadeInOut.defaultProps = {
  show: false,
  duration: 300
};

export default FadeInOut;
