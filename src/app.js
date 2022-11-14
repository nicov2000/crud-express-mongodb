// @ts-check
import express from "express";
import indexRoutes from "./routes/index.routes";
import { engine } from "express-handlebars";
import path from "path";

const app = express();

// Views
app.set("views", path.join(__dirname, "views"));

app.engine(
	".hbs",
	engine({
		layoutsDir: path.join(app.get("views"), "layouts"),
		partialsDir: path.join(app.get("views"), "partials"),
		defaultLayout: "main",
		extname: ".hbs",
	})
);

app.set("view engine", ".hbs");

// Routes
app.use(indexRoutes);

export default app;
