const saveUser = (logger) => (user) => {
  logger(`Saving user with id: ${user.id}`);

  // many lines to save user
};

const saveAdmin = (logger) => (admin) => {
  logger(`Saving admin with id: ${admin.id}`);

  // many lines to save admin
};

const saveBook = (logger) => (book) => {
  logger(`Saving book with id: ${book.id}`);

  // many lines to save book
};

const createLogger = (consoleMethod, prefix) => (message) => {
  const date = new Date();

  const time = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ].join(":");

  consoleMethod(`${prefix} [${time}]: ${message}`);
};

const combineLoggers = (...loggers) => (message) => {
  loggers.forEach((logger) => logger(message));
};

const infoLogger = createLogger(console.info, "INFO");
const logLogger = createLogger(console.log, "LOG");

const main = () => {
  const userSaver = saveUser(infoLogger);

  const adminSaver = saveAdmin(
    combineLoggers(infoLogger, logLogger)
  );

  const bookSaver = saveBook(logLogger);

  userSaver({ id: "1" });
  adminSaver({ id: "2" });
  bookSaver({ id: "3" });
};

main();