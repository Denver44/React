import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext({
    col: "red",
    colorPicker: (col) => { },
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState({ col: "red" });
    const colorPicker = (color) => setColor({ col: color });
    return (
        <ColorContext.Provider value={{ ...{ color, colorPicker } }}>
            {children}
        </ColorContext.Provider>
    );
};

const useColor = () => {
    const context = useContext(ColorContext);
    if (context === undefined) {
        throw new Error("useApp must be used within a UserProvider");
    }
    return context;
};

export { ColorProvider, useColor };
