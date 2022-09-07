import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

function launchModal(drinks) {
  const Modal = lazy(() => import("../components/Modal"));
  const modalWrapper = document.createElement("div");
  modalWrapper.id = "modalWrapper";
  document.body.append(modalWrapper);

  const root = createRoot(modalWrapper);
  root.render(
    <Suspense fallback={<span>Loading Modal Drinks</span>}>
      <Modal root={root} title={drinks.strDrink}>
      <h2>Instrucciones: {drinks.strInstructionsES} </h2>
      </Modal>
    </Suspense>
  );
}
export default launchModal
