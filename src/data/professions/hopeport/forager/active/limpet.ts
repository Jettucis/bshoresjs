import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Limpet: ActiveSkillNode = {
    name: 'Limpet',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 325,
    actionsPerHourDiscarding: 338,
    locations: ['Ray Bay', 'Pirate Hideout'],
    variants: [
        {
            itemName: 'Common Limpet',
            levelRequired: 36,
            xpPerAction: 223,
            knowledgePerAction: 113,
            albumXp: 681,
            quantityPerAction: 1
        },
        {
            itemName: 'Arc Limpet',
            levelRequired: 88,
            xpPerAction: 597,
            knowledgePerAction: 113,
            albumXp: 1_877,
            quantityPerAction: 1
        },
        {
            itemName: 'Tiger Limpet',
            levelRequired: 140,
            xpPerAction: 1_242,
            knowledgePerAction: 113,
            albumXp: 3_914,
            quantityPerAction: 1
        },
        {
            itemName: 'Blueridge Limpet',
            levelRequired: 190,
            xpPerAction: 2_155,
            knowledgePerAction: 113,
            albumXp: 6_800,
            quantityPerAction: 1
        },
        {
            itemName: 'Clinchshell Limpet',
            levelRequired: 240,
            xpPerAction: 3_534,
            knowledgePerAction: 113,
            albumXp: 11_159,
            quantityPerAction: 1
        },
        {
            itemName: 'Pebble Limpet',
            levelRequired: 290,
            xpPerAction: 6_035,
            knowledgePerAction: 113,
            albumXp: 19_065,
            quantityPerAction: 1
        },
        {
            itemName: 'Crusty Limpet',
            levelRequired: 340,
            xpPerAction: 9_557,
            knowledgePerAction: 113,
            albumXp: 30_196,
            quantityPerAction: 1
        },
        {
            itemName: 'Irongrip Limpet',
            levelRequired: 390,
            xpPerAction: 14_493,
            knowledgePerAction: 113,
            albumXp: 45_793,
            quantityPerAction: 1
        },
        {
            itemName: 'Trench Limpet',
            levelRequired: 440,
            xpPerAction: 21_444,
            knowledgePerAction: 113,
            albumXp: 67_747,
            quantityPerAction: 1
        },
        {
            itemName: 'Hardcase Limpet',
            levelRequired: 490,
            xpPerAction: 31_314,
            knowledgePerAction: 113,
            albumXp: 98_915,
            quantityPerAction: 1
        },
    ]
}