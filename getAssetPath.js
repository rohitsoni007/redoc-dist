const path = require("path");

/**
 * Get the path to the redoc distribution assets
 * @returns {string} Path to the assets directory
 */
function getAssetPath() {
  return __dirname;
}

module.exports = { getAssetPath };
