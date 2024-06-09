import Array "mo:base/Array";
import Debug "mo:base/Debug";

actor {
    type Game = {
        id: Nat;
        name: Text;
        year: Nat;
        photo: Text;
        amount: Nat;
    };

    stable var games: [Game] = [
        { id = 1; name = "Game 1"; year = 2020; photo = "photo1.jpg"; amount = 0 },
        { id = 2; name = "Game 2"; year = 2021; photo = "photo2.jpg"; amount = 0 },
        { id = 3; name = "Game 3"; year = 2022; photo = "photo3.jpg"; amount = 0 }
    ];

    public func updateGameList(prevGames: [Game], gameToAdd: Game): async [Game] {
        Debug.print("GameId: ");
        Debug.print(debug_show(gameToAdd.id));

        var found: Bool = false;

        var updatedGames = Array.map<Game, Game>(prevGames, func (game: Game): Game {
            if (game.id == gameToAdd.id) {
                found := true;
                { game with amount = game.amount + 1 }
            } else {
                game
            }
        });

        Debug.print("Found: ");
        Debug.print(debug_show(found));

        if (not found) {
            let existingGame = Array.find<Game>(prevGames, func(g: Game): Bool { g.id == gameToAdd.id });
            switch existingGame {
                case (?g) {
                    updatedGames := Array.append<Game>(updatedGames, [{ g with amount = 1 }]);
                };
                case null {
                    updatedGames := Array.append<Game>(updatedGames, [gameToAdd]);
                };
            };
        };

        Debug.print("UpdatedGames: ");
        Debug.print(debug_show(updatedGames));

        return updatedGames;
    };

    public func removeFromCart(prevGames: [Game], gameId: Nat) : async [Game] {
        return Array.filter<Game>(prevGames, func(game: Game): Bool {
            game.id != gameId;
        });
    }

}
