const { oauth_accounts, users } = require("../models");

const oauthCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    const provider = "google";
    const providerId = profile.id;
    const email = profile.emails[0].value;

    // check if oauth account is exist
    let oauthAccount = await oauth_accounts.findOne({
      where: {
        provider,
        provider_id: providerId,
      },
      include: {
        model: users,
        as: "user",
      },
    });
    if (!oauthAccount) {
      // Existing user with the same email?
      let user = await users.findOne({ where: { email } });
      if (user) {
        //create a new user
        user = await users.create({
          email: email,
          name: profile.displayName,
        });
      }
      // link oauth account to user
      oauthAccount = await oauth_accounts.create({
        user_id: user.id,
        provider,
        provider_id: providerId,
      });
    }
    return done(null, oauthAccount.user);
  } catch (error) {
    return done(error, null);
  }
};

module.exports = { oauthCallback };
