let handler  = async (m, { conn, usedPrefix, command }) => {
//conn.reply(m.chat,`*┌────「 RETO 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 Mystic 」─*`, m)
conn.sendHydrated(m.chat, `╭━━━━━[ 𝙍𝙀𝙏𝙊 😏 ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, md, '𝗞𝗚𝗢𝗡-𝗚𝗜𝗔𝗡', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 🧐', `${usedPrefix}reto`],
['𝙏𝙤𝙥𝙨 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `${usedPrefix}menu`]
], m,)}

handler.help = ['reto']
handler.tags = ['fun']
handler.command = /^reto/i
handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"Dile a tus amigos que te gusta la pinga y m谩ndame una captura de lo que te haya dicho",
"Graba un audio gimiendo por 6 segundos",
"Escribe el nombre de tu crush",
"Debes de poner el nombre de mi creador en tu estado de WhatsApp, sin dar contexto",
"Env铆ame una fotograf铆a de tu poto馃構",
"Debes de dibujar en alguna parte de tu cuerpo el nombre de alg煤n integrante del grupo, luego realiza una foto y env铆ala",
"Hazte una foto d谩ndole un beso a tu reflejo del espejo",
 "M谩ndame una fotograf铆a en ropa interior",
"Escribe en tu estado de WhatsApp que te gusta comer test铆culos de burro",
"Debes de poner la fotograf铆a de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 3 d铆as 馃摳馃摳",
"Tienes que mandar un audio cantando la canci贸n: Pluma Pluma Gay",
"Env铆a un mensaje a tu ex y dile todav铆a no la olvidas", "Env铆a un audio diciendo que eres bajito en left", 
"Dile a tu crush para cachar en el kinder", "Env铆a un audio diciendo que el admi te da anal(mencionar a cualquier admi)", 
"Env铆a una foto en la que salgas tu sin taparte la cara ni nada", "Env铆a un video perreando a tu perro", 
"Invita a personas que no conoces a tomarse una selfi contigo y luego env铆alo al grupo", 
"Elija algunos n煤meros aleatorios de sus contactos y env铆eles un mensaje de texto con el mensaje 'Estoy embarazad@'.", 
"隆Agarre un plumon y dibuja un pene en tu barriga y manda foto(dibujar un pene venoso y cabezon)", 
"Tome un n煤mero aleatorio de sus contactos, ll谩melo y d铆gale 'te amo' ", 
"Compra un pepino y metetelo al culo (puede usar una zanahoria) ", 
" Meta su webo en el pico de la botella", 
" Forma un corazon en tu mano con tu lechita馃挧", 
" Dibuja un pene en una hoja de cuaderno y escriba, lo que me como(mandar foto al grupo)", 
"Menciona a las personas con qui茅n harias un tr铆o", 
" Manda un audio aplaudiendo y diciendo: 'yes yes yes, Oh my god(mencionando a un admi)", 
" Manda un audio gritando(Jorge cachame).", 
" Manda un audio gritando(Gian cachame)", 
" Manda un audio gritando(Daniel cachame)", 
" Manda un audio gritando(valentino cachame) ", 
" Manda un audio gritando(Juan cachame) ", 
" 隆Arranca el pelo de tu propia pierna 3 veces!", 
" Escribe a tu mam谩 y dile que te iras de la casa a vivir con el amor de tu vida que tiene 5 a帽os", 
" Escribe a algun contacto y dile que vendes/intercambias CP ", 
" Dibuja un pene en tu cachete cerca a la boca y manda foto al grupo", 
" Toma leche dejando un poco en los labios y di: que rica leche", 
" Dile a tu prima que la amas ", 
"Pregunta a cualquiera de tus padres si puedes usar su cama para cachar con tu perro' ", 
"Pregunta a cualquiera de tus padres si puedes usar su cama para jalarte la pinga.", 
" Dile a tu pap谩 por mensaje que te jalaste la pinga imagin谩ndote a el y a tu mam谩 en pleno cache ", 
" Metele dedo a tu perro/gato(mandar foto)", 
" Pon en tu estado: 'Me canse de ser peruano, me voy a suicidar.", 
" Grita: saquenme de (Nacionalidad)", 
"Mete medio huevo crudo a tu boca y escribe que rico (mandar foto)", 
"manda audio diciendo: 'me trago los instans de los chargers mmm'.", 
"Anda al kinder y saca plan a una ni帽ita.", 
"Del 7 al 10, cuanto te pones de ser gay", 
"Manda foto de tu cara馃槏", 
"Mandale un mensaje a tu mam谩 diciendole que dejaste semen en el ba帽o y que lo limpie "
] 
