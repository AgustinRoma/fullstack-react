import { Suspense, lazy } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { createRoot } from "react-dom/client";

function launchModal(drinks) {
  const Modal = lazy(() => import("../components/Modal"));
  const modalWrapper = document.createElement("div");
  modalWrapper.id = "modalWrapper";
  document.body.append(modalWrapper);

  const root = createRoot(modalWrapper);
  root.render(
    <Suspense fallback={<span>Loading Modal Drinks</span>}>
      <Modal root={root} title={drinks.strCategory} >
        <Row>
          <Col xs={4} md={4}>
            <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
            <h5>{drinks.strDrink}</h5>
          </Col>
          <Col xs={8} md={8}>
            <ListGroup className="card-modal">
              <ListGroup.Item variant="primary">
                <h5>Ingredientes:</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p> {drinks.strIngredient1}</p>
                <p> {drinks.strIngredient2}</p>
                <p> {drinks.strIngredient3}</p>
                <p> {drinks.strIngredient4}</p>
                <p> {drinks.strIngredient5}</p>
                <p> {drinks.strIngredient6}</p>
              </ListGroup.Item>
            </ListGroup>
            <hr/>
            <ListGroup className="card-modal">
              <ListGroup.Item variant="primary">
                <h5> Instrucciones:</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <p> {drinks.strInstructionsES}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Modal>
    </Suspense>
  );
}
export default launchModal
