import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import ModalLoading from "./modalLoading.js";

export function openModalSetting() {
  const Modal = lazy(() => import("./modalSetting.js"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading/>}>
      <Modal root={root} title="Modal de Configuraciones" />
    </Suspense>
  );
}
export function openModalAccount() {
    const Modal = lazy(() => import("./modalAccount.js"));
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal";
    document.body.appendChild(modalDiv);
  
    const root = createRoot(modalDiv);
    root.render(
      <Suspense fallback={<ModalLoading/>}>
        <Modal root={root} title="Modal de Cuenta" />
      </Suspense>
    );
  }
