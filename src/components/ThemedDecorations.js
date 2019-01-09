// Code  Component Here
import React from 'react'
import PropTypes from 'prop-types';

export default class ThemedDecoration extends React.Component{
  render() {
    const childrenWithClassName = React.Children.map(this.props.children, child => React.cloneElement(child, {
            className: this.props.theme,
          })
        );


          return (
            <div>
            {childrenWithClassName}
            </div>
          )

  }
}
