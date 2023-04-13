const ms = require("ms");

module.exports = async durationMs => {

    const now = new Date();
    const arrivalTimeMs = now.getTime() + ms(durationMs);
    const arrivalDate = new Date(arrivalTimeMs);
    const date = arrivalDate.toLocaleDateString("fr-FR", { day: "numeric", month: "numeric" });
    const time = arrivalDate.toLocaleTimeString("fr-FR", { hour: "numeric", minute: "numeric" });
    return `${date} ${time}`;
}

  