const parseDiscordMessageParams = (messageContent) => {
    return messageContent.split(" ").slice(1).map(a => a.trim())
}

module.exports = parseDiscordMessageParams
