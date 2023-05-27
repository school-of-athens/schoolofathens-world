import { extendTheme } from "@chakra-ui/react";

import menuTheme from "./menu";
import tabsTheme from "./tabs";
import buttonTheme from "./button";
import inputTheme from "./input";
import selectTheme from "./select";
import cardTheme from "./card";
import dividerTheme from "./divider";
import stepperTheme from "./stepper";
import { textareaTheme } from "./textarea";

const theme = extendTheme({
    components: {
        Menu: menuTheme,
        Tabs: tabsTheme,
        Button: buttonTheme,
        Input: inputTheme,
        Select: selectTheme,
        Card: cardTheme,
        Divider: dividerTheme,
        Stepper: stepperTheme,
        Textarea: textareaTheme
    },
    fonts: {
        body: "DM Sans, sans-serif",
        heading: "DM Sans, sans-serif"
    }
});

export default theme;