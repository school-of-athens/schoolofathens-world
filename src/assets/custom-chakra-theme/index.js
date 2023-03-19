import { extendTheme } from "@chakra-ui/react";

import menuTheme from "./menuTheme";
import tabsTheme from "./tabsTheme";
import buttonTheme from "./buttonTheme";
import inputTheme from "./inputTheme";
import selectTheme from "./selectTheme";

const theme = extendTheme({
    components: {
        Menu: menuTheme,
        Tabs: tabsTheme,
        Button: buttonTheme,
        Input: inputTheme,
        Select: selectTheme
    },
    fonts: {
        body: "DM Sans, sans-serif",
        heading: "DM Sans, sans-serif"
    }
});

export default theme;