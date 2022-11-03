import style from "./modal.module.scss";
export default function ModalLoading() {
  return (
    <div className={style.modalContainer}>
      <div className={style.loadingView}>
        <h1>Loading...</h1></div>
    </div>
  );
}
