import React, {FC, ReactNode, useState} from "react";
import {FaTimes} from 'react-icons/fa';
import {animated as a, useTransition} from "react-spring";

import '../style/hide-component.scss';

export type HideComponentProps = {
  WrappedComponent: ReactNode;
}

const HideComponent: FC<HideComponentProps> = ({WrappedComponent}) => {
  const [show, setShow] = useState(false);

  const showComponent = () => setShow(true);
  const hideComponent = () => setShow(false);
  const transition = useTransition(show, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  });

  const ShowTransition = (children: ReactNode) => transition
    .map(({item, key, props}) =>
      item && (
        <a.section
          className="hide-component__wrapper"
          key={key}
          style={props}
        >
          {children}
        </a.section>
      ));


  return (
    <>
      <button
        className="hide-component__show-button"
        onClick={() => showComponent()}
      >
        <FaTimes/>
      </button>

      {ShowTransition((<>
        <article
          className="hide-component__background"
          onClick={() => hideComponent()}
        />

        <article className="hide-component__container">
          <button
            className="hide-component__hide-button"
            onClick={() => hideComponent()}
          >
            <FaTimes/>
          </button>
          <div className="hide-component__element">
            {WrappedComponent}
          </div>
        </article>
      </>))}
    </>
  )
};

export default HideComponent;