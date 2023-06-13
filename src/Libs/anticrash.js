module.exports = () => {
    process.on('uncaughtException', (reason, p) => { return console.log(reason, p); });
    process.on('uncaughtExceptionMonitor', (reason, p) => { return console.log(reason, p); });
    process.on('multipleResolves', (reason, p) => { return console.log(reason, p); });
    process.on('unhandledRejection', (reason, p) => { return console.log(reason, p); });
};