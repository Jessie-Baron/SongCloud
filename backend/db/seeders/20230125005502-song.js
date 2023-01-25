'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Songs';
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        title: 'Ice & Fire',
        description: 'King Canyon',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-f:1755954688031022780&th=185e677c3dc55ebc&view=att&disp=safe&realattid=f_ldaysh720',
        imageUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Emotional Mess',
        description: 'Amy Lynn & the Honey Men',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-f:1755954688031022780&th=185e677c3dc55ebc&view=att&disp=safe&realattid=f_ldaysigf1',
        imageUrl: 'https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'God Rest Ye Merry Gentlmen',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-f:1755954688031022780&th=185e677c3dc55ebc&view=att&disp=safe&realattid=f_ldaysjiv2',
        imageUrl: 'https://images.pexels.com/photos/1713953/pexels-photo-1713953.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Oh Christmas Tree',
        description: 'Auld Lang Syne',
        url: 'https://doc-10-08-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/og6k3jp7eba31qi4thbe15equjnq531q/1674608850000/00687250203207478131/11290618621116425720/1cekUFUbRmFcSwT-u6u7injmzCbRb0q-L?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/5990737/pexels-photo-5990737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05'
      },
      {
        userId: 5,
        title: 'Joy To The World',
        description: 'DJ Williams',
        url: 'https://doc-04-08-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/inuaa7fk4uj610k20dhbg9v3d963tf84/1674608850000/00687250203207478131/11290618621116425720/1eebC9yXRv9kT4PWiB9FppOM3LpiyEzC4?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'O Come All Ye Faithful',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0nxr0',
        imageUrl: 'https://images.pexels.com/photos/1181776/pexels-photo-1181776.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Silent Night',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0p1l1',
        imageUrl: 'https://images.pexels.com/photos/6827398/pexels-photo-6827398.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'We Wish You A Merry Christmas',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-6203191592065659690&th=185e68960e9975fa&view=att&disp=safe&realattid=f_ldazj0go0',
        imageUrl: 'https://images.pexels.com/photos/7645271/pexels-photo-7645271.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'O Holy Night',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0pys2',
        imageUrl: 'https://images.pexels.com/photos/6827399/pexels-photo-6827399.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'Deck The Halls',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-1328845230202821221&th=185e67d3dc1f9390&view=att&disp=safe&realattid=f_ldaz0qyk3',
        imageUrl: 'https://images.pexels.com/photos/6827405/pexels-photo-6827405.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'Jingle Bells',
        description: 'DJ Williams',
        url: 'https://doc-0g-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/5goc5gtsr3d5k71ic6n0grtu7q4l1d4i/1674609225000/11290618621116425720/11290618621116425720/1J5lyJsi9NN-9VzvbMr5_RukAE5gYTpoP?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/5825569/pexels-photo-5825569.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Boom Bap Flick',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-6203191592065659690&th=185e68960e9975fa&view=att&disp=safe&realattid=f_ldazj25q2',
        imageUrl: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'Ticklish',
        description: 'DJ Williams',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-6203191592065659690&th=185e68960e9975fa&view=att&disp=safe&realattid=f_ldazj1gu1',
        imageUrl: 'https://images.pexels.com/photos/11060526/pexels-photo-11060526.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Girasol',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-6203191592065659690&th=185e68960e9975fa&view=att&disp=safe&realattid=f_ldazkmaw3',
        imageUrl: 'https://images.pexels.com/photos/7191782/pexels-photo-7191782.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'Dove Love',
        description: 'Quincas Moreira',
        url: 'https://doc-10-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/uiatkoej75q0c3jvgtjll64dovj027e4/1674609975000/11290618621116425720/11290618621116425720/1NNMcCDCn4dr3FxOOxZrvIGLfJMAzKBrt?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/8989320/pexels-photo-8989320.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'Little Fish',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-1769712682171006568&th=185e7487bf2f1293&view=att&disp=safe&realattid=f_ldb70k4f0',
        imageUrl: 'https://images.pexels.com/photos/12342980/pexels-photo-12342980.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Fun Kid',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-1769712682171006568&th=185e7487bf2f1293&view=att&disp=safe&realattid=f_ldb70lnq1',
        imageUrl: 'https://images.pexels.com/photos/12342980/pexels-photo-12342980.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'Little Samba',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-1769712682171006568&th=185e7487bf2f1293&view=att&disp=safe&realattid=f_ldb70n2v2',
        imageUrl: 'https://images.pexels.com/photos/7422154/pexels-photo-7422154.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Siestita',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-1769712682171006568&th=185e7487bf2f1293&view=att&disp=safe&realattid=f_ldb7118i3',
        imageUrl: 'https://images.pexels.com/photos/9264012/pexels-photo-9264012.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'The Trapezist',
        description: 'Quincas Moreira',
        url: 'https://doc-0k-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/m96o4if40d07id4po570cs94q87ob2r0/1674622500000/11290618621116425720/11290618621116425720/1yHOQ1tCvN_sMeqF9MdfW2UZQv9ks1OoT?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/7464822/pexels-photo-7464822.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'Desert Planet',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-1298428670833573897&th=185e74ec36d68172&view=att&disp=safe&realattid=f_ldb79l2d0',
        imageUrl: 'https://images.pexels.com/photos/7464824/pexels-photo-7464824.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Spooky Boop',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-1298428670833573897&th=185e74ec36d68172&view=att&disp=safe&realattid=f_ldb79mba1',
        imageUrl: 'https://images.pexels.com/photos/7464825/pexels-photo-7464825.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'I Wish I Knew',
        description: 'Quincas Moreira',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-1298428670833573897&th=185e74ec36d68172&view=att&disp=safe&realattid=f_ldb79nj92',
        imageUrl: 'https://images.pexels.com/photos/7464823/pexels-photo-7464823.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Forever Young',
        description: 'Otis McDonald',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-1298428670833573897&th=185e74ec36d68172&view=att&disp=safe&realattid=f_ldb79wyl3',
        imageUrl: 'https://images.pexels.com/photos/7464827/pexels-photo-7464827.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'We Cruisin',
        description: 'Otis McDonald',
        url: 'https://doc-08-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/qq7voa830gcrgpf2afdn5d87h71cqgqc/1674622950000/11290618621116425720/11290618621116425720/1ROEelzWfqb8Gkmzf3lGMlFLr8_x6izv0?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/7464827/pexels-photo-7464827.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: "Can't Hide",
        description: 'Otis McDonald',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r6077935218036668774&th=185e75684f4eac02&view=att&disp=safe&realattid=f_ldb7k0xb0',
        imageUrl: 'https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Mulholland',
        description: 'Otis McDonald',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r6077935218036668774&th=185e75684f4eac02&view=att&disp=safe&realattid=f_ldb7k25h1',
        imageUrl: 'https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'It Was a Time',
        description: 'Otis McDonald',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r6077935218036668774&th=185e75684f4eac02&view=att&disp=safe&realattid=f_ldb7kvz02',
        imageUrl: 'https://images.pexels.com/photos/3935703/pexels-photo-3935703.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Silver Waves',
        description: 'King Canyon',
        url: 'https://doc-08-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/qq0h9405toss2qses93i6fks9p8ufmj5/1674623475000/11290618621116425720/11290618621116425720/1EOK-SU0o6oT_6jzRxPrTOBQnUE06EXU2?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'Here it Comes',
        description: 'TrackTribe',
        url: 'https://doc-10-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/qmrppeio19vn3bf12ani13j3c1ohvo2k/1674623475000/11290618621116425720/11290618621116425720/189gMU-nkjkJ74XDTKTFWicFJYnHE3Hnr?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/6877350/pexels-photo-6877350.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'Put It',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r4641962096796624706&th=185e75f23910c858&view=att&disp=safe&realattid=f_ldb7wb550',
        imageUrl: 'https://images.pexels.com/photos/6827292/pexels-photo-6827292.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'As You Were',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r4641962096796624706&th=185e75f23910c858&view=att&disp=safe&realattid=f_ldb7wc7f1',
        imageUrl: 'https://images.pexels.com/photos/6827287/pexels-photo-6827287.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'No Mercy',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r4641962096796624706&th=185e75f23910c858&view=att&disp=safe&realattid=f_ldb7wdfz2',
        imageUrl: 'https://images.pexels.com/photos/6827186/pexels-photo-6827186.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Upstate',
        description: 'TrackTribe',
        url: 'https://doc-0k-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/us9lft7qf7qdrbd39nkt6h35cg4bj5n2/1674624000000/11290618621116425720/11290618621116425720/1FRlBtvQIlMnFFxo7zkfD1TNm509H_n0v?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/6827184/pexels-photo-6827184.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: "Dusk 'til Dawn",
        description: 'TrackTribe',
        url: 'https://doc-0c-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/fbgarqmkd0q3a55lvema7o41vbh68q6h/1674624000000/11290618621116425720/11290618621116425720/1j2f_ZB6Hw9iqvVw8hn6tuRbcPEwumkJy?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/6877350/pexels-photo-6877350.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'Last Train North',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-1978892456865555883&th=185e76455b806804&view=att&disp=safe&realattid=f_ldb83lwx2',
        imageUrl: ''
      },
      {
        userId: 2,
        title: 'Rain Drops',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-1978892456865555883&th=185e76455b806804&view=att&disp=safe&realattid=f_ldb83kmz1',
        imageUrl: 'https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'Soulicious',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-1978892456865555883&th=185e76455b806804&view=att&disp=safe&realattid=f_ldb83mvg3',
        imageUrl: 'https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'Slipping Away',
        description: 'TrackTribe',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-1978892456865555883&th=185e76455b806804&view=att&disp=safe&realattid=f_ldb83jjs0',
        imageUrl: 'https://images.pexels.com/photos/1312488/pexels-photo-1312488.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'Indecision',
        description: 'Dyalla',
        url: 'https://doc-0o-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/7ql2auk46d60tjndcg5m0u1ih09qquc6/1674624375000/11290618621116425720/11290618621116425720/1M-D72X-oiEhq79dmnM8-0vqEeFDk0Zpz?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/12159330/pexels-photo-12159330.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: 'Like It Loud',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r-7626486078860441989&th=185e76661e8ddb36&view=att&disp=safe&realattid=f_ldb86irc3',
        imageUrl: 'https://images.pexels.com/photos/2742812/pexels-photo-2742812.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Organic Guitar House',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r-7626486078860441989&th=185e76661e8ddb36&view=att&disp=safe&realattid=f_ldb86hnc2',
        imageUrl: 'https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'Ringside',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r-7626486078860441989&th=185e76661e8ddb36&view=att&disp=safe&realattid=f_ldb86ffo0',
        imageUrl: 'https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'ILY Baby',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r-7626486078860441989&th=185e76661e8ddb36&view=att&disp=safe&realattid=f_ldb86gjl1',
        imageUrl: 'https://images.pexels.com/photos/7751834/pexels-photo-7751834.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'All I Am',
        description: 'Dyalla',
        url: 'https://doc-10-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/bdglddklkuvs689lq0n6bh0ajv1145bb/1674624525000/11290618621116425720/11290618621116425720/1qMWtSpBFvTb8UC8rX_g2KP8vAVA2v6Og?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/3509970/pexels-photo-3509970.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        title: '368',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.1&permmsgid=msg-a:r6085812078624915922&th=185e76817cdd4dcc&view=att&disp=safe&realattid=f_ldb897bz0',
        imageUrl: 'https://images.pexels.com/photos/1719627/pexels-photo-1719627.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 2,
        title: 'Ringside',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.2&permmsgid=msg-a:r6085812078624915922&th=185e76817cdd4dcc&view=att&disp=safe&realattid=f_ldb89abu3',
        imageUrl: 'https://images.pexels.com/photos/2072583/pexels-photo-2072583.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 3,
        title: 'Organic Guitar House',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.3&permmsgid=msg-a:r6085812078624915922&th=185e76817cdd4dcc&view=att&disp=safe&realattid=f_ldb898fw1',
        imageUrl: 'https://images.pexels.com/photos/5588992/pexels-photo-5588992.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 4,
        title: 'ILY Baby',
        description: 'Dyalla',
        url: 'https://mail.google.com/mail/u/0?ui=2&ik=c3ca6a56cc&attid=0.4&permmsgid=msg-a:r6085812078624915922&th=185e76817cdd4dcc&view=att&disp=safe&realattid=f_ldb899g42',
        imageUrl: 'https://images.pexels.com/photos/2792631/pexels-photo-2792631.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 5,
        title: 'Slipping Away',
        description: 'Dyalla',
        url: 'https://doc-0c-2g-docs.googleusercontent.com/docs/securesc/aclq5hetqf5vi2f6kaoochen977k80hd/7qbh4460dka84hriummf0olt19rqvvg7/1674624600000/11290618621116425720/11290618621116425720/1Jtm3D1zfadhitCqS27moY6IrSByqrVbC?e=download&authuser=0',
        imageUrl: 'https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = 'Songs';
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};
