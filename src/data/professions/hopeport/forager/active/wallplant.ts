import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Wallplant: ActiveSkillNode = {
    name: 'Wallplant',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 45,
    nodeCount: 6,
    actionsPerHourBanking: 400,
    actionsPerHourDiscarding: 441,
    locations: ['Old Street West', 'Old Street East'],
    variants: [
        {
            itemName: 'Creamy Wallplant',
            levelRequired: 3,
            xpPerAction: 85,
            knowledgePerAction: 79,
            albumXp: 286,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Secateurs']
        },
        {
            itemName: 'Vibrant Wallplant',
            levelRequired: 52,
            xpPerAction: 335,
            knowledgePerAction: 74,
            albumXp: 1_230,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Secateurs']
        },
        {
            itemName: 'Teal Wallplant',
            levelRequired: 107,
            xpPerAction: 820,
            knowledgePerAction: 74,
            albumXp: 3_031,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Secateurs']
        },
        {
            itemName: 'Scarlet Wallplant',
            levelRequired: 157,
            xpPerAction: 1_489,
            knowledgePerAction: 73,
            albumXp: 5_550,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Secateurs']
        },
        {
            itemName: 'Midnight Wallplant',
            levelRequired: 207,
            xpPerAction: 2_509,
            knowledgePerAction: 73,
            albumXp: 9_360,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Secateurs']
        },
        {
            itemName: 'Midday Wallplant',
            levelRequired: 257,
            xpPerAction: 4_317,
            knowledgePerAction: 73,
            albumXp: 16_219,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Secateurs']
        },
        {
            itemName: 'Marangay Wallplant',
            levelRequired: 307,
            xpPerAction: 6_878,
            knowledgePerAction: 73,
            albumXp: 25_848,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Secateurs']
        },
        {
            itemName: 'Happyday Wallplant',
            levelRequired: 357,
            xpPerAction: 10_367,
            knowledgePerAction: 72,
            albumXp: 39_235,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Secateurs']
        },
        {
            itemName: 'Vivid Wallplant',
            levelRequired: 407,
            xpPerAction: 15_296,
            knowledgePerAction: 72,
            albumXp: 57_883,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Secateurs']
        },
        {
            itemName: 'Festival Wallplant',
            levelRequired: 457,
            xpPerAction: 22_049,
            knowledgePerAction: 72,
            albumXp: 84_065,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Secateurs']
        },
    ]
}