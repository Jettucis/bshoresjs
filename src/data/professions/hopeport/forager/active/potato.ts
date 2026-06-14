import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Potato: ActiveSkillNode = {
    name: 'Potato',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 302,
    actionsPerHourDiscarding: 338,
    locations: ['Fallen Monument', 'Overgrown Field'],
    variants: [
        {
            itemName: 'Piper Potato',
            levelRequired: 20,
            xpPerAction: 143,
            knowledgePerAction: 104,
            albumXp: 488,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Trowel']
        },
        {
            itemName: 'King Phelwan Potato',
            levelRequired: 75,
            xpPerAction: 441,
            knowledgePerAction: 97,
            albumXp: 1_639,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Calystra Potato',
            levelRequired: 127,
            xpPerAction: 953,
            knowledgePerAction: 97,
            albumXp: 3_559,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Colawan Potato',
            levelRequired: 177,
            xpPerAction: 1_672,
            knowledgePerAction: 96,
            albumXp: 6_295,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Bitterbide Potato',
            levelRequired: 227,
            xpPerAction: 2_768,
            knowledgePerAction: 96,
            albumXp: 10_428,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Reuben Potato',
            levelRequired: 277,
            xpPerAction: 4_716,
            knowledgePerAction: 95,
            albumXp: 17_902,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Bollbark Potato',
            levelRequired: 327,
            xpPerAction: 7_483,
            knowledgePerAction: 95,
            albumXp: 28_409,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Greengrail Potato',
            levelRequired: 377,
            xpPerAction: 11_264,
            knowledgePerAction: 95,
            albumXp: 43_084,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Yamitan Potato',
            levelRequired: 427,
            xpPerAction: 16_644,
            knowledgePerAction: 95,
            albumXp: 63_653,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Galimeer Potato',
            levelRequired: 477,
            xpPerAction: 24_048,
            knowledgePerAction: 80,
            albumXp: 92_729,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Trowel']
        },
    ]
}