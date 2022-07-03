let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <=5) ? '*CACA III* 💩'
        : ((user.level >= 5) && (user.level <= 15)) ? '*CACA II* 💩'
            : ((user.level >= 15) && (user.level <= 19)) ? '*CACA I* 💩'
                : ((user.level >= 19) && (user.level <= 22)) ? '*BAJITO III* 🥑'
                    : ((user.level >= 22) && (user.level <= 25)) ? '*BAJITO II* 🥑'
                        : ((user.level >= 25) && (user.level <= 28)) ? '*BAJITO I* 🥑'
                            : ((user.level >= 28) && (user.level <= 31)) ? '*NOVATO(A) III* 🪓'
                                : ((user.level >= 31) && (user.level <= 34)) ? '*NOVATO(A) II* 🪓'
                                    : ((user.level >= 34) && (user.level <= 37)) ? '*NOVATO(A) I* 🪓'
                                        : ((user.level >= 37) && (user.level <= 40)) ? '*CHATARRA III* 💀️'
                                            : ((user.level >= 40) && (user.level <= 43)) ? '*CHATARRA II* 💀'
                                                : ((user.level >= 43) && (user.level <= 46)) ? '*CHATARRA I* 💀️'
                                                    : ((user.level >= 46) && (user.level <= 49)) ? '*ORO III* 🌟'
                                                        : ((user.level >= 49) && (user.level <= 52)) ? '*ORO II* 🌟'
                                                            : ((user.level >= 52) && (user.level <= 55)) ? '*ORO I* 🌟'
                                                                : ((user.level >= 55) && (user.level <= 58)) ? '*DIAMANTE III* 💎'
                                                                    : ((user.level >= 58) && (user.level <= 61)) ? '*DIAMANTE II* 💎'
                                                                        : ((user.level >= 61) && (user.level <= 64)) ? '*DIAMANTE I* 💎'
                                                                            : ((user.level >= 64) && (user.level <= 67)) ? '*LEDER III* 🧔🏿'
                                                                                : ((user.level >= 67) && (user.level <= 70)) ? '*LEDER II* 🧔🏿'
                                                                                    : ((user.level >= 70) && (user.level <= 73)) ? '*LEDER I* 🧔🏿'
                                                                                        : ((user.level >= 73) && (user.level <= 76)) ? '*PRO III* ☠️'
                                                                                            : ((user.level >= 76) && (user.level <= 79)) ? '*PRO II* ☠️'
                                                                                                : ((user.level >= 79) && (user.level <= 81)) ? '*PRO I* ☠️'
                                                                                                    : ((user.level >= 81) && (user.level <= 84)) ? '*LEGENDARIO III* 😈'
                                                                                                        : ((user.level >= 84) && (user.level <= 87)) ? '*LEGENDARIO II* 😈'
                                                                                                            : ((user.level >= 87) && (user.level <= 90)) ? '*LEGENDARIO I* 😈'
                                                                                                                : ((user.level >= 70) && (user.level <= 90)) ? '*CACHERITO III* 💦'
                                                                                                                    : ((user.level >= 93) && (user.level <= 96)) ? '*CACHERO II* 💦'
                                                                                                                        : ((user.level >= 96) && (user.level <= 100)) ? '*CACHERAZO I* 💦'
                                                                                                        '

    user.role = role
    return true
}

export default handler
