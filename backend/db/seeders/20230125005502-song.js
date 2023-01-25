// 'use strict';

// let options = {};
// if (process.env.NODE_ENV === 'production') {
//   options.schema = process.env.SCHEMA;  // define your schema in options object
// }

// const bcrypt = require("bcryptjs");

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     options.tableName = 'Songs';
//     return queryInterface.bulkInsert(options, [
//       {
//         userId: 1,
//         title: 'Ice & Fire',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-f:1755954688031022780&th=185e677c3dc55ebc&view=att&disp=safe&realattid=f_ldaysh720',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: 'Emotional Mess',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-f:1755954688031022780&th=185e677c3dc55ebc&view=att&disp=safe&realattid=f_ldaysigf1',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: 'God Rest Ye Merry Gentlmen',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-f:1755954688031022780&th=185e677c3dc55ebc&view=att&disp=safe&realattid=f_ldaysjiv2',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: 'Oh Christmas Tree',
//         description: 'Auld Lang Syne',
//         url: 'https://doc-10-08-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/og6k3jp7eba31qi4thbe15equjnq531q/1674608850000/00687250203207478131/11290618621116425720/1cekUFUbRmFcSwT-u6u7injmzCbRb0q-L?e=download&authuser=0',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: 'Joy To The World',
//         description: '',
//         url: 'https://doc-04-08-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/inuaa7fk4uj610k20dhbg9v3d963tf84/1674608850000/00687250203207478131/11290618621116425720/1eebC9yXRv9kT4PWiB9FppOM3LpiyEzC4?e=download&authuser=0',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: 'O Come All Ye Faithful',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0nxr0',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: 'Silent Night',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0p1l1',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: 'We Wish You A Merry Christmas',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: 'O Holy Night',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0pys2',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: 'Deck The Halls',
//         description: '',
//         url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0qyk3',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: 'Jingle Bells',
//         description: '',
//         url: 'https://doc-0g-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/5goc5gtsr3d5k71ic6n0grtu7q4l1d4i/1674609225000/11290618621116425720/11290618621116425720/1J5lyJsi9NN-9VzvbMr5_RukAE5gYTpoP?e=download&authuser=0',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 1,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 2,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 3,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 4,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//       {
//         userId: 5,
//         title: '',
//         description: '',
//         url: '',
//         imageUrl: ''
//       },
//     ], {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     const Op = Sequelize.Op;
//     options.tableName = 'Songs';
//     return queryInterface.bulkDelete(options, {
//       userId: { [Op.in]: [1, 2, 3, 4, 5] }
//     }, {});
//   }
// };
