  const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 20
        },
        {
            firstName: 'Christiano',
            lastName: 'Ronaldo',
            age: 20
        },
        {
        firstName: 'Messi',
            lastName: 'Vanpaezi',
            age: 20
        }
    ],
    _games: [
     {
        opponent: 'Drogba',
        teamPoints: 21,
        opponentPoints: 17
     },
     {
        opponent: 'San',
        teamPoints: 25,
        opponentPoints: 20
     },
     {
        opponent: 'Lovie',
        teamPoints: 30,
        opponentPoints: 15
     }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },
    addGame(opponentName, teamsPoints,opponentsPoints) {
        let games = {
            opponent: opponentName,
            teamPoints: teamsPoints,
            opponentPoints: opponentsPoints
        };
        this._games.push(games);
    }
  };

  team.addPlayer('Stephen', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);

  console.log(team._players);

  team.addGame('Jane', 12, 14);
  team.addGame('Joy', 20, 20);
  team.addGame('Jernice', 24, 15);

  console.log(team._games);