import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://apurvabhuskute:G1tsiExKme6ZIrpH@cluster0.hmx9zja.mongodb.net/todo-app"
  );
};
