export const MAX_ACTIVE_BOUNTIES = 6;
export type BountyRarity = 'common' | 'uncommon' | 'rare' | 'epic';

/**
 * Officially, unknown, currently just an assumption
*/
export const BOUNTY_RARITY_WEIGHTS: Record<BountyRarity, number> = {
    common: 60,
    uncommon: 25,
    rare: 12,
    epic: 3
}
// TODO: Bounties
export interface BountyActivity {

}

export interface Bounty {

}
