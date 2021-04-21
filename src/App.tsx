import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"

import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }
  
  function hanldeCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransition={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={hanldeCloseNewTransactionModal}
      >
          <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  )
}