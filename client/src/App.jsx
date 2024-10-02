import { useState } from "react";

import { createData, readData, updateData, deleteData } from "./methods";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  height: 78vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px;
  height: 100px;
  width: 100px;
`;

function App() {
  const operations = ["create", "read", "update", "delete"];
  const buttonClickHandler = async (operation) => {
    let res = null;
    if (operation === "create") {
      res = await createData();
    } else if (operation === "read") {
      res = await readData();
    } else if (operation === "update") {
      res = await updateData();
    } else if (operation === "delete") {
      res = await deleteData();
    }

    alert(
      operation + " operation performed successfully. \nData:\n" + res
    );
  };

  return (
    <ButtonGroup>
      {operations.map((operation) => (
        <Button key={operation} onClick={() => buttonClickHandler(operation)}>
          {operation}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default App;
