import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
const contanier = document.getElementById("root");
const root = createRoot(contanier);

root.render(<App />);
