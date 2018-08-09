import React from 'react';

const withMobile = (Component, size) => (
  class Mobile extends React.Component {
    state = {
      mobile: false,
    }

    componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
      const isMobile = window.innerWidth < size;
      this.setState({ mobile: isMobile });
    }

    render() {
      const { mobile } = this.state;
      return <Component mobile={mobile} />;
    }
  }
);


export default withMobile;
