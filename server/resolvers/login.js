const { User } = require("../models/");

const login = async (_, { input }) => {
  const { email, password } = input;

  const user = await USer.findOne({ email });

  if (!user) {
    throw new AuthenticationError("User not found");
  }

  const validPassword = user.isCorrectPassword(password);

  if (!validPassword) {
    throw new AuthenticationError("Invalid Password");
  }

  const token = 
};

module.exports = login;
