export const idlFactory = ({ IDL }) => {
  const Score = IDL.Record({ 'name' : IDL.Text, 'score' : IDL.Nat });
  return IDL.Service({
    'getHighScores' : IDL.Func([], [IDL.Vec(Score)], ['query']),
    'submitScore' : IDL.Func([IDL.Text, IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
