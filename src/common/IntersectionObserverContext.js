import React from 'react';

const createIntersectionObserverDefault = function () {
  const intersectionObserverOptions = {
    root: null,
    threshold: 0.5
  }
  const onObserved = {};

  const observer = new IntersectionObserver((entries, observerRef) => {
    entries.forEach(({target, isIntersecting}) => {
      if(isIntersecting){
        if(onObserved[target.id]){
          const handler = onObserved[target.id];
          handler();
        }
        observerRef.unobserve(target);
      }
    })
  }, intersectionObserverOptions)

  return {
    setHandlerOnOnserved: (id, handler) => {
      onObserved[id] = handler;
    },
    observerMe: target => {
      observer.observe(target);
    }
  }
}
export const IntersectionObserverDefault = createIntersectionObserverDefault();
export const IntersectionObserverContext = React.createContext(IntersectionObserverDefault);