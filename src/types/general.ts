export type Episode = 
    | 'global'
    | 'hopeport'
    | 'hopeforest'
    | 'mine_of_mantuban'
    | 'crenopolis'
    | 'stonemaw_hill'
    | 'bleakholm_crags';

export type DamageType = 'Impact' | 'Cryonae' | 'Infernae' | 'Tempestae' | 'Arborae' | 'Necromae';

export type ProfessionName = 
    | 'combat'
    | 'forager'
    | 'fisher'
    | 'chef'
    | 'alchemist'
    | 'botanist'
    | 'woodcutter'
    | 'carpenter'
    | 'miner'
    | 'bonewright'
    | 'blacksmith'
    | 'stonemason'
    | 'detective'
    | 'leatherworker'
    | 'merchant'
    | 'builder'
    | 'armorer'
    | 'delver';

/**
 * A "level" in Brighter Shores is displayed as Milestone + Level-within-milestone,
 * e.g. 2:34 means Milestone 2, Level 34 -> absolute level 134 (milestones are blocks of 50).
 * Internally we always work with the absolute level (0-500).
*/
export interface DisplayLevel {
    milestone: number; // 0-10
    level: number; // 0-49
    absolute: number; // 0-500
}

export function toDisplayLevel(absoluteLevel: number): DisplayLevel {
    const milestone = Math.floor(absoluteLevel / 50);
    const level = absoluteLevel % 50;
    return { milestone, level, absolute: absoluteLevel };
}

/** Result of simulating a training session on a skill node */
export interface TrainingResult {
    actionsCompleted: number;
    xpGained: number;
    itemsGained: Record<string, number>;
    variantUsed: string;
    knowledgeProgressGained: number; 
    knowledgePointsGained: number;
}