import mongoose from "mongoose";
import bcrypt from "bcrypt";

export type IUser = {
  email: string;
  password: string;
  isValidPassword: Function;
};

const UserSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password: string) {
  const compare = await bcrypt.compare(password, this.password);

  return compare;
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
