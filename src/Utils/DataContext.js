import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const CreateContextProvider = ({ children }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

 
  return (
    <>
      <DataContext.Provider value={{ openModal, closeModal,customStyles,modalIsOpen }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default CreateContextProvider;
