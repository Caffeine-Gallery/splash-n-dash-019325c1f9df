import Nat "mo:base/Nat";
import Text "mo:base/Text";

import Array "mo:base/Array";

actor {
  public type Score = {
    name : Text;
    score : Nat;
  };

  stable var highScores : [Score] = [];

  public func submitScore(name : Text, score : Nat) : async () {
    highScores := Array.append<Score>(highScores, [{ name = name; score = score }]);
  };

  public query func getHighScores() : async [Score] {
    return highScores;
  };
}
