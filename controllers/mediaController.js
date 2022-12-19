const Media = require("../Models/Media");

exports.create = async (req, res) => {
  const { name } = req.body;
  let filePaths = [];

  if (Array.isArray(req.files.files) && req.files.files.length > 0) {
    for (let video of req.files.files) {
      filePaths.push("/" + video.path);
    }
  }

  try {
    const createdMedia = await Media.create({
      name,
      files: filePaths,
    });

    res.json({ message: "File uploaded successfully", createdMedia });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
