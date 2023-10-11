const settings = require("../Models/SettingsSchema");

const Create = async (req, res) => {
  try {
    const {
      companyName,
      companyEmail,
      companyLogo,
      companyAddress,
      companyPhoneNumber,
      companyWhatsapp,
    } = req.body;
    const user = req.params.id;
    const all = await settings.findOneAndUpdate(
      { userid: user },
      {
        userid: user,
        companyName: companyName,
        companyEmail: companyEmail,
        companyLogo: companyLogo,
        companyAddress: companyAddress,
        companyPhoneNumber: companyPhoneNumber,
        companyWhatsapp: companyWhatsapp,
      },
      { upsert: true }
    );
    res.send(companyName);
    console.log(req.body);
  } catch (error) {
    const err = error;
    res.send(err);
  }
};
const Get = async (req, res) => {
  try {
    const users = req.params.id;

    const all = await settings.findOne({ userid: users });
    console.log(all, "this");
    res.send(all);
  } catch (error) {
    res.send("Error:" + error);
  }
};

module.exports = { Create, Get };
