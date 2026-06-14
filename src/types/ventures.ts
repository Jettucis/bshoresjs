import { HOUR } from "../util/time";
import { Episode, ItemInput, ProfessionName } from "./general";

export const VENTURE_DURATION_23H = HOUR * 23;
export const VENTURE_DURATION_11H = HOUR * 11;
export const VENTURE_SLOT_DEFAULT = 2;
export const VENTURE_SLOT_MAX_PLANNED = 6;

export function getVentureSlotCount(fallenMonumentCompleted: boolean): number {
    return fallenMonumentCompleted ? 3 : VENTURE_SLOT_DEFAULT;
}

export type VentureKind = 'standard' | 'coinReward' | 'paid';

export interface VentureNodeVariant {
    itemName: string;
    levelRequired: number;
    xpReward: number;
    albumXp: number;
    rewardQuantity: number;
    startCostCoins?: number;
    coinReward?: boolean;
    equipment?: string;
    input?: ItemInput[];
}

export interface VentureNode {
    name: string;
    profession: ProfessionName;
    episode: Episode;
    durationSeconds: number;
    nodeCount: number;
    kind: VentureKind;
    locations: string[];
    questRequired?: string;
    variants: VentureNodeVariant[];
}