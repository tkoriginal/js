/// <reference types="node" />
import { PublicKey, Connection, GetProgramAccountsConfig, Commitment, GetProgramAccountsFilter, Context } from '@solana/web3.js';
import { Account } from './Account';
import { Buffer } from 'buffer';
export declare abstract class Program {
    static readonly PUBKEY: PublicKey;
    static findProgramAddress(seeds: (Buffer | Uint8Array)[]): Promise<PublicKey>;
    static getProgramAccounts(connection: Connection, configOrCommitment?: GetProgramAccountsConfig | Commitment): Promise<Account<unknown>[]>;
    static getSubscription(connection: Connection, cb: (data: {
        account: Account;
        context: Context;
    }) => void, commitment?: Commitment, filters?: GetProgramAccountsFilter[]): Promise<number>;
}