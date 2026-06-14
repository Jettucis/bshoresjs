import { Episode, ItemInput, ProfessionName } from "./general";

/** A single harvestable variant of active skill node. Each profession level range unlocks a new variant of the node (e.g. Brown Kelp -> Green Kelp). */
export interface ActiveSkillNodeVariant {
    itemName: string;
    levelRequired: number;
    xpPerAction: number;
    knowledgePerAction: number;
    albumXp: number;
    quantityPerAction: number;
    equipment?: string;
    input?: ItemInput[];
}
/** A gatherable active skill node. Shared shape used by Forager, Fisher, Woodcutter, Miner, Botanist etc. */
export interface ActiveSkillNode {
    name: string;
    profession: ProfessionName;
    episode: Episode;
    activityTimeSeconds: number;
    respawnTimeSeconds: number;
    nodeCount: number;
    actionsPerHourBanking: number;
    actionsPerHourDiscarding: number;
    locations: string[];
    variants: ActiveSkillNodeVariant[];
}