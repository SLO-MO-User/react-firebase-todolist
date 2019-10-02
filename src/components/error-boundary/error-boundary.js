import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    //process the error

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className='text-center text-danger'>
          <h1>Error!!! Error!!!</h1>
          We have to evacuate the website effective immediately
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
