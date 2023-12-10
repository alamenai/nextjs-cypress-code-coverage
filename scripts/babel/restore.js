const fs = require("fs").promises;
const path = require("path");

async function restoreBabelRC() {
  const projectRoot = path.join(__dirname, "../..");
  const babelRcPath = path.join(projectRoot, ".babelrc.js");
  const babelBackupPath = path.join(projectRoot, ".babel_");

  try {
    const babelBackupExists = await fs
      .access(babelBackupPath)
      .then(() => true)
      .catch(() => false);

    if (babelBackupExists) {
      await fs.rename(babelBackupPath, babelRcPath);
    }
  } catch (error) {
    console.error("Error renaming .babel_ to .babelrc.js:", error);
  }
}

restoreBabelRC();
