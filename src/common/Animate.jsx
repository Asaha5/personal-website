import React from "react";
import { IntersectionObserverContext } from "./IntersectionObserverContext";

const withAnimate = (WrappedComponent) => {
  class AnimatedComponent extends React.Component {
    static contextType = IntersectionObserverContext;
    constructor(props, context) {
      super(props, context);
      this.id = `id_random_${Math.random()}`;
      this.state = {
        scrolledIntoView: false
      }
    }
    componentDidMount(){
      const elem = document.getElementById(this.id);
      if(elem){
        this.context.observerMe(elem);
        this.context.setHandlerOnOnserved(this.id, () => {
          this.setState(prevState => ({
            scrolledIntoView: true
          }))
        })
      }
    }

    render(){
      return(
        <WrappedComponent {...this.props} id={this.id} scrolledIntoView={this.state.scrolledIntoView}/>
      )
    }
  };

  return AnimatedComponent;
}

export default withAnimate;

