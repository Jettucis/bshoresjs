export const PROGRESS_PER_KNOWLEDGE_POINT = 9000;
export const MAX_KNOWLEDGE_PROGRESS = PROGRESS_PER_KNOWLEDGE_POINT * 2; // 200% cap

/**
 * Coin value (in copper) of redeeming one Knowledge Point for money.
 * Formula: 600 copper base + 30 copper per level of the player's HIGHEST profession level.
 * Max at level 500 = 15,600 copper = 156 silver.
*/
export function knowledgePointCoinValue(highestProfessionLevel: number): number {
    const clamped = Math.min(Math.max(highestProfessionLevel, 0), 500);
    return 600 + clamped * 30;
}

/** Adds progress to a running knowledge total, capping at 200% */
export function addKnowledgeProgress(currentProgress: number, gained: number): number {
    return Math.min(currentProgress + gained, MAX_KNOWLEDGE_PROGRESS);
}

/** How many full Knowledge Points are currently available to spend. */
export function availableKnowledgePoints(currentProgress: number): number {
    return Math.floor(currentProgress / PROGRESS_PER_KNOWLEDGE_POINT);
}