import { HOUR } from "../util/time";
import { Episode, ProfessionName } from "./general";

export const VENTURE_DURATION_23H = HOUR * 23;
export const VENTURE_DURATION_11H = HOUR * 11;
export const VENTURE_SLOT_DEFAULT = 2;
export const VENTURE_SLOT_MAX_PLANNED = 6;

export function getVentureSlotCount(fallenMonumentCompleted: boolean): number {
    return fallenMonumentCompleted ? 3 : VENTURE_SLOT_DEFAULT;
}

export interface VentureInput {
    itemName: string;
    quantity: number;
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
    itemsRequired?: VentureInput[];
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