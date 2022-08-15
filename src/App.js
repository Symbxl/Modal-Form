import { useState } from "react";
import Modal from "./components/Modal";
import OpenModal from "./components/OpenModal";
import MultiStepForm from "./components/MultiStepForm";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const open = () => setIsOpen(true);
  const closed = () => setIsOpen(false);
  const openForm = () => setIsFormOpen(true);
  const closedForm = () => setIsFormOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={open}>open</button>
      <Modal isOpen={isOpen}>
        <OpenModal closed={closed} />
      </Modal>
      <button onClick={openForm}>open form</button>
      <Modal isOpen={isFormOpen}>
        <MultiStepForm
          isOpen={openForm}
          closed={closedForm}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};
export default App;
