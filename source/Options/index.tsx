import * as React from "react";
import { createRoot } from "react-dom/client";

import Options from "./Options";

const root = createRoot(document.getElementById("root")!);
root.render(<Options />);
