import { connect } from "mongoose";

(async () => {
	try {
		const db = await connect("mongodb://127.0.0.1:27017/crud-fazt");
		console.log("DB connected to", db.connection.name);
	} catch (error) {
		console.log(error);
	}
})();
