import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import userModel, { IUser } from "../models/user";

// Registration
passport.use(
  "registration",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = userModel.create({ email, password });

        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// Login
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = (await userModel.findOne({ email })) as IUser;

        // Fetch user
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await user.isValidPassword(password);

        // Check password
        if (!validate) {
          return done(null, false, { message: "wrong password" });
        }

        // Return success
        return done(null, true, { message: "Logged in Successfully" });
      } catch (error) {
        // Return error
        return done(error);
      }
    }
  )
);
