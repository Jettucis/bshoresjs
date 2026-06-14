import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const MonumentStone: ActiveSkillNode = {
    name: 'Monument Stone',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 408,
    actionsPerHourDiscarding: 450,
    locations: ['Crater', 'Wasteland'],
    variants: [
        {
            itemName: 'Huge Monument Stone',
            levelRequired: 16,
            xpPerAction: 134,
            knowledgePerAction: 72,
            albumXp: 440,
            quantityPerAction: 1
        },
        {
            itemName: 'Substantial Monument Stone',
            levelRequired: 72,
            xpPerAction: 461,
            knowledgePerAction: 72,
            albumXp: 1_585,
            quantityPerAction: 1
        },
        {
            itemName: 'Chunky Monument Stone',
            levelRequired: 125,
            xpPerAction: 1_015,
            knowledgePerAction: 72,
            albumXp: 3_505,
            quantityPerAction: 1
        },
        {
            itemName: 'Large Monument Stone',
            levelRequired: 175,
            xpPerAction: 1_797,
            knowledgePerAction: 72,
            albumXp: 6_219,
            quantityPerAction: 1
        },
        {
            itemName: 'Medium Monument Stone',
            levelRequired: 225,
            xpPerAction: 2_980,
            knowledgePerAction: 72,
            albumXp: 10_318,
            quantityPerAction: 1
        },
        {
            itemName: 'Average Monument Stone',
            levelRequired: 275,
            xpPerAction: 5_177,
            knowledgePerAction: 72,
            albumXp: 17_728,
            quantityPerAction: 1
        },
        {
            itemName: 'Small Monument Stone',
            levelRequired: 325,
            xpPerAction: 8_122,
            knowledgePerAction: 72,
            albumXp: 28_143,
            quantityPerAction: 1
        },
        {
            itemName: 'Teeny Monument Stone',
            levelRequired: 375,
            xpPerAction: 12_317,
            knowledgePerAction: 72,
            albumXp: 42_682,
            quantityPerAction: 1
        },
        {
            itemName: 'Weeny Monument Stone',
            levelRequired: 425,
            xpPerAction: 18_196,
            knowledgePerAction: 72,
            albumXp: 63_048,
            quantityPerAction: 1
        },
        {
            itemName: 'Miniscule Monument Stone',
            levelRequired: 475,
            xpPerAction: 26_503,
            knowledgePerAction: 72,
            albumXp: 91_818,
            quantityPerAction: 1
        },
    ]
}