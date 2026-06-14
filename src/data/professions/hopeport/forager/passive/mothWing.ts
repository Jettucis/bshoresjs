import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const MothWing: PassiveSkillNode = {
    name: 'Moth Wing',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Rubble Road'],
    variants: [
        {
            itemName: 'Brown Moth Wing',
            levelRequired: 29,
            xpPerAction: 4.5,
            albumXp: 596,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Lacy Moth Wing',
            levelRequired: 65,
            xpPerAction: 15,
            albumXp: 1_460,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Hoaxeye Moth Wing',
            levelRequired: 115,
            xpPerAction: 38.3,
            albumXp: 3_240,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Eyed Moth Wing',
            levelRequired: 165,
            xpPerAction: 78.6,
            albumXp: 5_844,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Labyrinth Moth Wing',
            levelRequired: 215,
            xpPerAction: 180.294,
            albumXp: 9_779,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Pinstripe Moth Wing',
            levelRequired: 265,
            xpPerAction: 459.1,
            albumXp: 16_877,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Primrose Moth Wing',
            levelRequired: 315,
            xpPerAction: 970.7,
            albumXp: 26_846,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Gossamer Moth Wing',
            levelRequired: 365,
            xpPerAction: 1_864.8,
            albumXp: 40_731,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Whirled Moth Wing',
            levelRequired: 415,
            xpPerAction: 3_385.4,
            albumXp: 60_118,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Evening Star Moth Wing',
            levelRequired: 465,
            xpPerAction: 5_916.1,
            albumXp: 87_414,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
    ]
}