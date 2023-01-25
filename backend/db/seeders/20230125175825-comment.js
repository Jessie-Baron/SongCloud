'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Comments';
    return queryInterface.bulkInsert(options, [
      {
        songId: 1,
        userId: 1,
        body: "first 100kg bench to this, truly anabolic",
      },
      {
        songId: 2,
        userId: 1,
        body: "I panicked at the gym when i couldnt find this song in my playlist. Forgot the name but finally found it🦾",
      },
      {
        songId: 3,
        userId: 1,
        body: "Still waitin for another song that hits so hard",
      },
      {
        songId: 4,
        userId: 1,
        body: "Breaking ny headphones",
      },
      {
        songId: 5,
        userId: 1,
        body: "Never heard a song CLAP more than this one 🔥🔥🔥🔥",
      },
      {
        songId: 6,
        userId: 1,
        body: "it fits him well",
      },
      {
        songId: 7,
        userId: 1,
        body: "i love this",
      },
      {
        songId: 8,
        userId: 1,
        body: "Hit 165 with this",
      },
      {
        songId: 9,
        userId: 1,
        body: "after spotify deleated it i finaly can hear it again 🔱",
      },
      {
        songId: 1,
        userId: 2,
        body: "time to PR",
      },
      {
        songId: 2,
        userId: 2,
        body: "Drop on Itunes",
      },
      {
        songId: 3,
        userId: 2,
        body: "Im about to murder the weights",
      },
      {
        songId: 4,
        userId: 2,
        body: "very underrated song",
      },
      {
        songId: 5,
        userId: 2,
        body: "Dont stop making music",
      },
      {
        songId: 6,
        userId: 2,
        body: "Wооооw💖🔥🔥",
      },
      {
        songId: 7,
        userId: 2,
        body: "luv💘",
      },
      {
        songId: 8,
        userId: 2,
        body: "I LOVE THIS, yall should check out my music thooo insane freestyle just dropped",
      },
      {
        songId: 9,
        userId: 2,
        body: "Outstаnding!💝🔥",
      },
     {
        songId: 1,
        userId: 3,
        body: "i just wanna rock",
      },
      {
        songId: 2,
        userId: 3,
        body: "❤️💖🔥😘💖",
      },
      {
        songId: 3,
        userId: 3,
        body: "Is my music this good?",
      },
      {
        songId: 4,
        userId: 3,
        body: "fire song",
      },
      {
        songId: 5,
        userId: 3,
        body: "AH AH AH AH AH",
      },
      {
        songId: 6,
        userId: 3,
        body: "buy may beat",
      },
      {
        songId: 7,
        userId: 3,
        body: "W song",
      },
      {
        songId: 8,
        userId: 3,
        body: "hard",
      },
      {
        songId: 9,
        userId: 3,
        body: "Aaaaaaaaaaaaaa",
      },
     {
        songId: 1,
        userId: 4,
        body: "Banger",
      },
      {
        songId: 2,
        userId: 4,
        body: "check my track bro. Im sad boy",
      },
      {
        songId: 3,
        userId: 4,
        body: "Fire song",
      },
      {
        songId: 4,
        userId: 4,
        body: "yeah",
      },
      {
        songId: 5,
        userId: 4,
        body: "best song ever",
      },
      {
        songId: 6,
        userId: 4,
        body: "not a bad song",
      },
      {
        songId: 7,
        userId: 4,
        body: "Mc make another hit",
      },
      {
        songId: 8,
        userId: 4,
        body: "this is 🔥",
      },
      {
        songId: 9,
        userId: 4,
        body: "lmao",
      },
    {
        songId: 1,
        userId: 5,
        body: "This goes hard though",
      },
      {
        songId: 2,
        userId: 5,
        body: "I always love this SONGGGG",
      },
      {
        songId: 3,
        userId: 5,
        body: "Is my music good?",
      },
      {
        songId: 4,
        userId: 5,
        body: "hi",
      },
      {
        songId: 5,
        userId: 5,
        body: "goes soooo hard",
      },
      {
        songId: 6,
        userId: 5,
        body: "this goes incredibly hard",
      },
      {
        songId: 7,
        userId: 5,
        body: "I love this song🔥",
      },
      {
        songId: 8,
        userId: 5,
        body: "DOPE💕",
      },
      {
        songId: 9,
        userId: 5,
        body: "💓💖💖🔥💖",
      },
      {
        songId: 2,
        userId: 5,
        body: "💜💖🔥💖💖💖",
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = 'Comments';
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};
