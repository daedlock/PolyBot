const formatPercentage = percentage => {
    return percentage > 0 ? `+${percentage}%` : `${percentage}%`
}

module.exports = formatPercentage
