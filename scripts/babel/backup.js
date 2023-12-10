const fs = require("fs").promises;
const path = require("path");

async function renameBabelFileToBackup() {
  const projectRoot = path.join(__dirname, "../..");
  const babelRcPath = path.join(projectRoot, ".babelrc.js");
  const babelBackupPath = path.join(projectRoot, ".babel_");

  try {
    const babelRcExists = await fs
      .access(babelRcPath)
      .then(() => true)
      .catch(() => false);

    if (babelRcExists) {
      await fs.rename(babelRcPath, babelBackupPath);
    }
  } catch (error) {
    console.error("Error renaming .babelrc.js to .babel_:", error);
  }
}

renameBabelFileToBackup();
