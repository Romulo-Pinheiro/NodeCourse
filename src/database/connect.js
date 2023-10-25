const mongoose = require("mongoose");
const connectToDatabase = async () => {
	await mongoose
		.connect(
			`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.5ufrney.mongodb.net/?retryWrites=true&w=majority`
		)
		.then(console.log("Conexão realizada com sucesso"))
		.catch((error) =>
			console.log(`Ocorreu um erro ao realizar conexão: ${error}`)
		);
};

module.exports = connectToDatabase;
