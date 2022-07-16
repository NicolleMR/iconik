import React, { useCallback, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const modalType = {
  NONE: "none",
  CUSTOMER: "customer",
  EMPLOYEE: "employee",
  CONFIRM: "confirm",
};

const Context = React.createContext({
  modal: { type: modalType.NONE },
  openModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modal, setActive] = useState({ type: modalType.NONE });

  const openModal = useCallback((selectedModal) => {
    setActive(selectedModal);
  }, []);

  const value = useMemo(
    () => ({
      modal,
      openModal,
    }),
    [modal, openModal],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const ModalContext = () => useContext(Context);

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
