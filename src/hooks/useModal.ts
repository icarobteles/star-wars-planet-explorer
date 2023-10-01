import { useCallback, useState } from "react";

export function useModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return { modalIsOpen, openModal, closeModal };
}
