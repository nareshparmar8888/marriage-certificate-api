function commonFunctions() {
    return {
      generateMessage(msg, replaceLoop) {
            let message = msg;

            for (const item of replaceLoop) {
                message = message.replace(item[0], item[1]);
            }

            return message;
      },
    }
}

module.exports = commonFunctions
