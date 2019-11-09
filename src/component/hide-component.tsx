import React, {FC, ReactNode, useState} from "react";
import {FaTimes} from 'react-icons/fa';
import {animated as a, useTransition} from "react-spring";

import '../style/hide-component.scss';

export type HideComponentProps = {
  WrappedComponent: ReactNode;
  showButtonClass?: string;
  hideButtonClass?: string;
}

const HideComponent: FC<HideComponentProps> =
  ({
     WrappedComponent,
     hideButtonClass = '',
     showButtonClass = ''
   }) => {
    const [show, setShow] = useState(false);

    const showComponent = () => setShow(true);
    const hideComponent = () => setShow(false);

    const ShowTransition =
      (className: string, children: ReactNode) =>
        useTransition(show, null, {
          from: {opacity: 0},
          enter: {opacity: 1},
          leave: {opacity: 0}
        }).map(({item, key, props}) =>
          item && (
            <a.section
              className={`${className}`}
              key={key}
              style={props}
              onClick={() => hideComponent()}
            >
              {children}
            </a.section>
          ));


    return (
      <>
        <button
          className={`hide-component__show-button ${showButtonClass}`}
          onClick={() => showComponent()}
        >
          <FaTimes/>
        </button>

        {ShowTransition(
          "hide-component__wrapper",
          (<section className={`hide-component__container ${hideButtonClass}`}>
            <button
              className="hide-component__hide-button"
              onClick={() => hideComponent()}
            >
              <FaTimes/>
            </button>
            <article className="hide-component__element">
              {WrappedComponent}
            </article>
          </section>)
        )}
      </>
    )
  };

export default HideComponent;