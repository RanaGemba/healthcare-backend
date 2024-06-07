const mongoose = require('mongoose');

class Database {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log("Connected to database.");
    } catch (error) {
      console.error("Database connection error:", error);
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from database.");
    } catch (error) {
      console.error("Database disconnection error:", error);
      throw error;
    }
  }
}

module.exports = Database;
