import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const SharkJaw: ActiveSkillNode = {
    name: 'Shark Jaw',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 372,
    actionsPerHourDiscarding: 450,
    locations: ['Scruffy Shoreline', 'Stony Coast'],
    variants: [
        {
            itemName: 'Damaged Shark Jaw',
            levelRequired: 55,
            xpPerAction: 276,
            knowledgePerAction: 63,
            albumXp: 1_283,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Eroded Shark Jaw',
            levelRequired: 110,
            xpPerAction: 664,
            knowledgePerAction: 63,
            albumXp: 3_109,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Brittle Shark Jaw',
            levelRequired: 160,
            xpPerAction: 1_199,
            knowledgePerAction: 62,
            albumXp: 5_659,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Intact Shark Jaw',
            levelRequired: 210,
            xpPerAction: 2_014,
            knowledgePerAction: 62,
            albumXp: 9_516,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Gray Shark Jaw',
            levelRequired: 260,
            xpPerAction: 3_464,
            knowledgePerAction: 62,
            albumXp: 16_463,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Durable Shark Jaw',
            levelRequired: 310,
            xpPerAction: 5_515,
            knowledgePerAction: 62,
            albumXp: 26_218,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Iron Jaw Shark Jaw',
            levelRequired: 360,
            xpPerAction: 8_318,
            knowledgePerAction: 62,
            albumXp: 39_789,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Flawless Shark Jaw',
            levelRequired: 410,
            xpPerAction: 12_273,
            knowledgePerAction: 62,
            albumXp: 58_710,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Great White Shark Jaw',
            levelRequired: 460,
            xpPerAction: 17_721,
            knowledgePerAction: 61,
            albumXp: 85_303,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Trowel']
        }
    ]
}