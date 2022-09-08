import React, { Children } from 'react';
import { useRef } from "react";

export default function Modal({ root, title, children }) {
  const ref = useRef(null);

  function cb() {
    document.querySelector("#modalWrapper").remove();
    root.unmount();
  }
  function handleCloseModal() {
    ref.current.classList.add("fadeOut");
    ref.current.addEventListener("animationend", cb);
    //no solo eliminamos la capa del modal, sino el listener...
  }
  return (
    <div className="modalContainer">
      <div ref={ref} className="modalMiniContainer">
        <header className="modalHeader">{title}</header>
        <div>{children}</div>
        <button onClick={handleCloseModal}>Entendido</button>
      </div>
    </div>
  );
}