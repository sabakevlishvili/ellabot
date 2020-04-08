const Discord = require("discord.js");
const { Attachment } = require("discord.js");
const axios = require("axios");

const client = new Discord.Client();

process.env.LEAGUE_API_PLATFORM_ID = "euw1";

const LeagueJS = require("leaguejs");
const leagueJs = new LeagueJS("RGAPI-3442efd7-35e6-4939-bb5b-8a79b4e8df06");

const Jikan = require('jikan-node');
const mal = new Jikan();

function ChIDToName($id) {
  switch ($id) {
    case 266:
      return "Aatrox";
      break;
    case 412:
      return "Thresh";
      break;
    case 23:
      return "Tryndamere";
      break;
    case 79:
      return "Gragas";
      break;
    case 69:
      return "Cassiopeia";
      break;
    case 136:
      return "Aurelion Sol";
      break;
    case 13:
      return "Ryze";
      break;
    case 78:
      return "Poppy";
      break;
    case 14:
      return "Sion";
      break;
    case 1:
      return "Annie";
      break;
    case 202:
      return "Jhin";
      break;
    case 43:
      return "Karma";
      break;
    case 111:
      return "Nautilus";
      break;
    case 240:
      return "Kled";
      break;
    case 99:
      return "Lux";
      break;
    case 103:
      return "Ahri";
      break;
    case 2:
      return "Olaf";
      break;
    case 112:
      return "Viktor";
      break;
    case 34:
      return "Anivia";
      break;
    case 27:
      return "Singed";
      break;
    case 86:
      return "Garen";
      break;
    case 127:
      return "Lissandra";
      break;
    case 57:
      return "Maokai";
      break;
    case 25:
      return "Morgana";
      break;
    case 28:
      return "Evelynn";
      break;
    case 105:
      return "Fizz";
      break;
    case 74:
      return "Heimerdinger";
      break;
    case 238:
      return "Zed";
      break;
    case 68:
      return "Rumble";
      break;
    case 82:
      return "Mordekaiser";
      break;
    case 37:
      return "Sona";
      break;
    case 96:
      return "Kog'Maw";
      break;
    case 55:
      return "Katarina";
      break;
    case 117:
      return "Lulu";
      break;
    case 22:
      return "Ashe";
      break;
    case 30:
      return "Karthus";
      break;
    case 12:
      return "Alistar";
      break;
    case 122:
      return "Darius";
      break;
    case 67:
      return "Vayne";
      break;
    case 110:
      return "Varus";
      break;
    case 77:
      return "Udyr";
      break;
    case 89:
      return "Leona";
      break;
    case 126:
      return "Jayce";
      break;
    case 134:
      return "Syndra";
      break;
    case 80:
      return "Pantheon";
      break;
    case 92:
      return "Riven";
      break;
    case 121:
      return "Kha'Zix";
      break;
    case 42:
      return "Corki";
      break;
    case 268:
      return "Azir";
      break;
    case 51:
      return "Caitlyn";
      break;
    case 76:
      return "Nidalee";
      break;
    case 85:
      return "Kennen";
      break;
    case 3:
      return "Galio";
      break;
    case 45:
      return "Veigar";
      break;
    case 432:
      return "Bard";
      break;
    case 150:
      return "Gnar";
      break;
    case 90:
      return "Malzahar";
      break;
    case 104:
      return "Graves";
      break;
    case 254:
      return "Vi";
      break;
    case 10:
      return "Kayle";
      break;
    case 39:
      return "Irelia";
      break;
    case 64:
      return "Lee Sin";
      break;
    case 420:
      return "Illaoi";
      break;
    case 60:
      return "Elise";
      break;
    case 106:
      return "Volibear";
      break;
    case 20:
      return "Nunu";
      break;
    case 4:
      return "Twisted Fate";
      break;
    case 24:
      return "Jax";
      break;
    case 102:
      return "Shyvana";
      break;
    case 429:
      return "Kalista";
      break;
    case 36:
      return "Dr. Mundo";
      break;
    case 427:
      return "Ivern";
      break;
    case 131:
      return "Diana";
      break;
    case 223:
      return "Tahm Kench";
      break;
    case 63:
      return "Brand";
      break;
    case 113:
      return "Sejuani";
      break;
    case 8:
      return "Vladimir";
      break;
    case 154:
      return "Zac";
      break;
    case 421:
      return "Rek'Sai";
      break;
    case 133:
      return "Quinn";
      break;
    case 84:
      return "Akali";
      break;
    case 163:
      return "Taliyah";
      break;
    case 18:
      return "Tristana";
      break;
    case 120:
      return "Hecarim";
      break;
    case 15:
      return "Sivir";
      break;
    case 236:
      return "Lucian";
      break;
    case 107:
      return "Rengar";
      break;
    case 19:
      return "Warwick";
      break;
    case 72:
      return "Skarner";
      break;
    case 54:
      return "Malphite";
      break;
    case 157:
      return "Yasuo";
      break;
    case 101:
      return "Xerath";
      break;
    case 17:
      return "Teemo";
      break;
    case 75:
      return "Nasus";
      break;
    case 58:
      return "Renekton";
      break;
    case 119:
      return "Draven";
      break;
    case 35:
      return "Shaco";
      break;
    case 50:
      return "Swain";
      break;
    case 91:
      return "Talon";
      break;
    case 40:
      return "Janna";
      break;
    case 115:
      return "Ziggs";
      break;
    case 245:
      return "Ekko";
      break;
    case 61:
      return "Orianna";
      break;
    case 114:
      return "Fiora";
      break;
    case 9:
      return "Fiddlesticks";
      break;
    case 31:
      return "Cho'Gath";
      break;
    case 33:
      return "Rammus";
      break;
    case 7:
      return "LeBlanc";
      break;
    case 16:
      return "Soraka";
      break;
    case 26:
      return "Zilean";
      break;
    case 56:
      return "Nocturne";
      break;
    case 222:
      return "Jinx";
      break;
    case 83:
      return "Yorick";
      break;
    case 6:
      return "Urgot";
      break;
    case 203:
      return "Kindred";
      break;
    case 21:
      return "Miss Fortune";
      break;
    case 62:
      return "Wukong";
      break;
    case 53:
      return "Blitzcrank";
      break;
    case 98:
      return "Shen";
      break;
    case 201:
      return "Braum";
      break;
    case 5:
      return "Xin Zhao";
      break;
    case 29:
      return "Twitch";
      break;
    case 11:
      return "Master Yi";
      break;
    case 44:
      return "Taric";
      break;
    case 32:
      return "Amumu";
      break;
    case 41:
      return "Gangplank";
      break;
    case 48:
      return "Trundle";
      break;
    case 38:
      return "Kassadin";
      break;
    case 161:
      return "Vel'Koz";
      break;
    case 143:
      return "Zyra";
      break;
    case 267:
      return "Nami";
      break;
    case 59:
      return "Jarvan IV";
      break;
    case 81:
      return "Ezreal";
      break;
    case 523:
      return "Aphelios";
      break;
    case 350:
      return "Yuumi";
      break;
    case 235:
      return "Senna";
      break;
    case 875:
      return "Sett";
      break;
    case 145:
      return "Kai'sa";
      break;

    case 498:
      return "Xayah";
      break;

    case 497:
      return "Rakan";
      break;
  }
}

const frogArray = ["1", "2", "3"];

getMastery = async (sumName) => {
  let sumID = leagueJs.Summoner.gettingByName(sumName)
    .then((data) => {
      "use strict";
      console.log(data, "summoner data");
      //   summoner = data;
      return data.id;
    })
    .catch((err) => {
      "use strict";
      console.log(err);
    });

  // console.log (await sumID, "sdasdnajsdbnasndioasdnioasdbnaoisdboi")

  let summoner = leagueJs.ChampionMastery.gettingBySummoner(await sumID)
    .then((data) => {
      "use strict";

      console.log(data, "mastery");

      // console.log(ChIDToName(data.championId), data);
      let summonerMastery = data;

      //   summoner = data;
      return summonerMastery;
    })
    .catch((err) => {
      "use strict";
      console.log(err);
    });

  return await summoner;
};

console.log(client.channels["661564985935265802"]) 

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("dsandansdlasndl");
});

client.on("message", async (msg) => {

  
  console.log(msg.author.username);
  let msgArray = msg.content.split(" ");

  if (
    msgArray.length === 1 &&
    msg.author.username !== "ellabot" &&
    msg.author.username === "ellacxela"
  ) {
    msg.react("🤔");
    msg.reply("What is" + " " + msg.content + "?");
  }

  if (msg.author.username !== "ellabot" && msg.author.username === "mchigo13") {
    msg.react("👎");
  }

  if (msgArray[0] === "ella" && msgArray[1] === "gafeede") {
    const attachment = new Attachment(
      "https://media0.giphy.com/media/uWcNWtfqzySDYqkORw/source.gif"
    );
    msg.channel.send(attachment);
  }

  if (msgArray[0] === "ella" && msgArray[1] === "frog") {
    const attachment = new Attachment(
      `images/${frogArray[Math.floor(Math.random() * frogArray.length)]}.jpg`
    );
    msg.channel.send(attachment);
  }

  if (msgArray[0] === "ella" && msgArray[1] === "cxela") {
    msg.react("🔥");
    msg.reply(":fire: :fire: :fire:");
  }

  if (msgArray[0] === "ella" && msgArray[1] === "anime" ) {
    axios
      .get(
        `https://api.jikan.moe/v3/search/anime?q=${msgArray[2]}&page=1`
      )
      .then(function (response) {
        // handle success

        let result = response.data.results[0]
        
        msg.reply(`\n title: ${result.title}, \n airing: ${result.airing}, \n synopsis: ${result.synopsis}, \n type: ${result.type}, \n episodes: ${result.episodes}, \n score: ${result.score}`);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  console.log(msg.content);

  if (msg.content === "ella how long is my schlong?") {
    if (
      msg.author.username === "Xalicha" ||
      msg.author.username === "ellacxela"
    ) {
      msg.reply("2bjilion" + " inches");
    } else {
      msg.reply(Math.floor(Math.random() * 15) + " inches");
    }
  }

  if (
    msgArray[0] === "ella" &&
    msgArray[1] === "mastery" &&
    msgArray.length === 3
  ) {
    let mastery = await getMastery(msgArray[2]);

    mastery.sort(function (a, b) {
      return b.championPoints - a.championPoints;
    });

    let i = 0;
    let slicedarray = mastery.slice(0, 5);

    slicedarray.forEach((champion) => {
      i++;
      champion.championId = ChIDToName(champion.championId);
      console.log(champion);
      console.log(i);

      msg.reply(`
      ${i}. Champ: ${champion.championId}, Champion Level: ${champion.championLevel}, chest: ${champion.chestGranted}, mastery: ${champion.championPoints}`);
    });
  }
});




client.login("NjYxNTYzMDk3Mjk0ODMxNjM1.XgtPGQ.GvAGlqifX89Jyuz1qKd-8ok2tgM");
