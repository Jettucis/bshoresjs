import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const GoatHorn: ActiveSkillNode = {
    name: 'Goat Horn',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 389,
    actionsPerHourDiscarding: 450,
    locations: ['Overgrown Pond', 'Rubble Road'],
    variants: [
        {
            itemName: 'Battered Goat Horn',
            levelRequired: 13,
            xpPerAction: 102,
            knowledgePerAction: 87,
            albumXp: 404,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Trowel']
        },
        {
            itemName: 'Gray Goat Horn',
            levelRequired: 63,
            xpPerAction: 330,
            knowledgePerAction: 82,
            albumXp: 1_424,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Ridged Goat Horn',
            levelRequired: 117,
            xpPerAction: 759,
            knowledgePerAction: 82,
            albumXp: 3_292,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Crooked Goat Horn',
            levelRequired: 167,
            xpPerAction: 1_355,
            knowledgePerAction: 81,
            albumXp: 5_918,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Long Goat Horn',
            levelRequired: 217,
            xpPerAction: 2_260,
            knowledgePerAction: 81,
            albumXp: 9_886,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Looping Goat Horn',
            levelRequired: 267,
            xpPerAction: 3_871,
            knowledgePerAction: 81,
            albumXp: 17_045,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Hooked Goat Horn',
            levelRequired: 317,
            xpPerAction: 6_153,
            knowledgePerAction: 81,
            albumXp: 27_101,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Smooth Goat Horn',
            levelRequired: 367,
            xpPerAction: 9_267,
            knowledgePerAction: 80,
            albumXp: 41_113,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Robust Goat Horn',
            levelRequired: 417,
            xpPerAction: 13_681,
            knowledgePerAction: 80,
            albumXp: 60_692,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Greatest Goat Horn',
            levelRequired: 467,
            xpPerAction: 19_753,
            knowledgePerAction: 80,
            albumXp: 88_275,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Trowel']
        },
    ]
}