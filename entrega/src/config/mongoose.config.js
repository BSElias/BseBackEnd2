import { connect } from "mongoose";

export const connectDB = async () => {
    try {

        await connect(process.env.MONGODB_URI || "");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB", error);
    }
};

// export const connectDB = () => {
//     const URI = process.env.MONGO_URI;

//     // Eliminamos las opciones obsoletas tiraba error en node.
//     connect(URI, { dbName: "cars" })
//         .then(() => console.log("Conectado a MongoDB"))
//         .catch((err) => console.error("Error al conectar con MongoDB", err));
// };

// export const isValidID = (id) => {
//     return Types.ObjectId.isValid(id);
// };