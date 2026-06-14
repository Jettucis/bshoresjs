import { Episode, ItemInput, ProfessionName } from "./general";

/** A single harvestable variant of passive skill node. Each profession level range unlocks a new variant of the node (e.g. Brown Kelp -> Green Kelp). */
export interface PassiveSkillNodeVariant {
    itemName: string;
    levelRequired: number;
    xpPerAction: number;
    albumXp: number;
    quantityPerAction: number;
    isPaid?: boolean;
    equipment?: string;
    input?: ItemInput[];
}
/** A gatherable passive skill node. Shared shape used by Forager, Fisher, Woodcutter, Miner, Botanist etc. */
export interface PassiveSkillNode {
    name: string;
    profession: ProfessionName;
    episode: Episode;
    activityTimeSeconds: number;
    nodeCount: number;
    actionsPerHour: number;
    locations: string[];
    variants: PassiveSkillNodeVariant[];
}