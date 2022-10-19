import React from "react";

import { makeStyles, Button } from "@mui/material";

const Nav = () => {
  const styles = {
    border: "1px solid rgb(19, 19, 19)",
    borderRadius: 20,
    padding: "0 30px",
    height: 40,
    textAlign: "center",
    color: "rgb(19, 19, 19)",
    ":hover": {
      background: " #49c7b8",
      color: "white",
      border: "1px solid #49c7b8",
    },
  };
  return (
    <div>
      <Button sx={styles}>button</Button>
    </div>
  );
};
export default Nav;
