import { useRef } from "react";
import style from "./modal.module.scss";

export default function Modal({ children, title, root }) {
  const ref = useRef(null);
  function callback(e) {
    root.unmount();
    document.querySelector("#modal").remove();
    ref.current.removeEventListener("animationend", callback);
  }

  function handleClick() {
    ref.current.classList.add(style.fadeOut);
    ref.current.addEventListener("animationend", callback, { once: true });
  }

  return (
    <div ref={ref} className={style.modalContainer}>
      <div className={style.modalView}>
        <div className={style.modalHeader}>
          <div>{title}</div>
          <div>
            <button className={style.closeButton} onClick={handleClick}>
              X
            </button>
          </div>
        </div>
        <div className={style.modalContent}>{children}</div>
      </div>
    </div>
  );
}
