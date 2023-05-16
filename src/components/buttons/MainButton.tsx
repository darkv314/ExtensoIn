import React from "react";
import { motion } from "framer-motion";
import "./MainButton.css";

type MainButton = {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: React.ReactNode;
    backgroundColor?: string;
    color?: string;
    border?: string;
    width?: string;
};

const MainButton = ({
    type = "button",
    onClick = () => {},
    children = "Click Me",
    backgroundColor = "white",
    color = "black",
    border = "1px solid black",
    width = "100%",
}: MainButton) => {
    const style = {
        backgroundColor,
        color,
        border,
        width,
    };

    return (
        <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            type={type}
            onClick={onClick}
            style={style}
        >
            {children}
        </motion.button>
    );
};

export default MainButton;
