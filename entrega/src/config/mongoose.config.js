import { connect, Types } from "mongoose";

// export const connectDB = () => {

//     const URI = process.env.MONGO_URI;
//     const options = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         dbName: "cars",
//     };

//     connect(URI, options)
//         .then(() => console.log("Conectado a MongoDB"))
//         .catch((err) => console.error("Error al conectar con MongoDB", err));

// };

// export const isValidID = (id) => {
//     return Types.ObjectId.isValid(id);
// };

export const connectDB = () => {
    const URI = process.env.MONGO_URI;

    // Eliminamos las opciones obsoletas tiraba error en node.
    connect(URI, { dbName: "cars" })
        .then(() => console.log("Conectado a MongoDB"))
        .catch((err) => console.error("Error al conectar con MongoDB", err));
};

export const isValidID = (id) => {
    return Types.ObjectId.isValid(id);
};