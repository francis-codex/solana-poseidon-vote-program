import { Account, Pubkey, type Result, i64, u8, Signer } from "@solanaturbine/poseidon";

export default class VoteProgram {
    static PROGRAM_ID = new Pubkey("GtqMPZ8A3ZgKM4Ew4B1qp56XTg7UHZndmBpFhFu66Eet");

    initialize(state: VoteState, user: Signer): Result {
        state.derive(["vote"])
           .init(user);

        state.vote = new i64(0);
    }
    upvote(state: VoteState): Result {
        state.derive(['vote']);
        state.vote = state.vote.add(1);
    }
    downvote(state: VoteState): Result {
        state.derive(['vote']);
        state.vote = state.vote.sub(1);
    }
}

export interface VoteState extends Account {
   vote: i64;
   bump: u8;
}