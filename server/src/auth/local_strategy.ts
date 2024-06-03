import passport from "passport";
import { User } from "../db/schemas/userSchema";
import { Strategy } from "passport-local";
import { comparePassword } from "./hash";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((email, done) => {
  try {
    const user = User.findOne({ email: email });
    if (!user) throw new Error("User not found");
    done(null, user);
  } catch (e) {
    done(e, false);
  }
});

export default passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email: email });

        if (!user) throw new Error("User not found");
        if (!comparePassword(password, user.password))
          throw new Error("Incorrect password");

        done(null, user);
      } catch (e) {
        done(e, false);
      }
    }
  )
);
