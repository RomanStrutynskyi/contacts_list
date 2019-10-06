import { reversePalette } from "styled-theme/composer";
import { darken } from "polished";

const theme = {};
theme.palette = {
	primary: ["#23405d", "#75808c",darken(0.1, "#f5f7fa"), darken(0.2, "#f5f7fa")],
	light: ["#fff", "#f5f7fa"],
	success: ["green"],
	error: ["red"],
	dark: ["#000"]
};
theme.fonts = {
	primary: "Arial, Helvetica, sans-serif"
};
theme.reversePalette = reversePalette(theme.palette);

export default theme;
