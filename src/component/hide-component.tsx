import React, {FC, ReactNode, useState} from "react";
import {FaTimes} from 'react-icons/fa';
import {animated as a, useSpring} from "react-spring";

export type HideComponentProps = {
  WrappedComponent: ReactNode;
}

const HideComponent: FC<HideComponentProps> = ({WrappedComponent}) => {
  const [isShow, setShow] = useState(false);
  const [props, set] = useSpring(() => ({opacity: 0}));
// Update spring with new props
  set({opacity: isShow ? 1 : 0});

  return (
    <>
      <button
        className="hide-component__show"
        onClick={() => setShow(true)}
      >
        <FaTimes/>
      </button>

      <a.section
        style={props}
        className="hide-component__wrapper"
        onAnimationEnd={() => console.log('End')}
      >
        <section className="hide-component__container">
          <button
            className="hide-component__display"
            onClick={() => setShow(false)}
          >
            <FaTimes/>
          </button>
          <article className="hide-component__element">
            {WrappedComponent}
          </article>
        </section>
      </a.section>
    </>
  )
};

export default HideComponent;