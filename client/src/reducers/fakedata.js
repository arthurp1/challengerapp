

export const contribution = {
  success: true,
  userid: 20,
  challengeid: 18,
  contamount: 1,
  createdAt: '2008-11-11 13:23:44'
}

export const fakechallenge = [ {
  challengeid: 1,
  challengeTitle: '500 pushups',
  challengeStatus: 'pending',
  challengeCreatedAt: '2017-01-01 13:23:44',
  challengeDue: '2017-04-04 13:23:44',
  mediaPrev: 'http://lorempixel.com/400/200/sports/1/PREVIEW',
  minCont: 50,
  currCont: 30,
  userid: 23,
  username: 'marcel20',
  firstname: 'Marcel',
  charityid: 3,
  charityname: 'Amnesty International',
}]

export const createchallenge = {
  userId: 1,
  title: '500 pushups',
  dueDate: '2017-04-04 13:23:44',
  mediaPrev: 'http://lorempixel.com/400/200/sports/1/PREVIEW',
  minStake: 50,
  charityId: 3,
  tags: ['sexy','yolo']
}


export const fakeuser = [
  { userid: 29,
    username: "charlyyy",
    emailaddress: 'charles.olafssen@gmail.com',
    firstname: 'Charles',
    quote: 'Just do it!',
    kredits: 25,
    karma: 2983,
    karmalvl: 5,
    createdAt: '2008-11-11 13:23:44',
    friends: [
      { userid: 23,
        username: 'marcel20'
      }, {
        userid: 88,
        username: 'johnzinho'
      }],
    activity: {
      conts: [{
          challengeid: 392,
          creatorid: 23,
          username: 'marcel20',
          firstname: 'Marcel',
          charityid: 1,
          charityname: 'Amnesty International',
          challengeTitle: '500 pushups',
          challengeStatus: 'pending',
          challengeDue: '2017-04-23 13:23:44',
          contAt:  '2017-04-05 13:23:44',
          contAmount: 10
        },
        {
          challengeid: 18,
          creatorid: 99,
          username: 'johanson',
          firstname: 'John',
          charityid: 1,
          charityname: 'Amnesty International',
          challengeTitle: 'Marathon in New York',
          challengeDue: '2017-04-23 13:23:44',
          challengeStatus: 'done',
          contAt:  '2017-04-05 13:23:44',
          contAmount: 10

        }],
      deposits: [{
        depositedAt: '2016-08-11 13:23:44',
        depositAmount: 40,
        paymentMethod: 'Paypal',
        currency: 'dollars',
        value: '0.99'
      },
      {
        depositedAt: '2016-08-11 13:23:44',
        depositAmount: 10,
        paymentMethod: 'Facebook invite'
      }],
      challenges: [{
        challengeid: 2391,
        challengeTitle: 'something'
      }]

    }

   }
]
