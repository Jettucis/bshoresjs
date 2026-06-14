import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Feather: PassiveSkillNode = {
    name: 'Feather',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Little Square'],
    variants: [
        {
            itemName: 'Red and Black Feather',
            levelRequired: 26,
            xpPerAction: 3.5,
            albumXp: 560,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'White Fluffy Feather',
            levelRequired: 60,
            xpPerAction: 12,
            albumXp: 1_371,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Orange and Black Feather',
            levelRequired: 110,
            xpPerAction: 31.5,
            albumXp: 3_109,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Shimmering Feather',
            levelRequired: 160,
            xpPerAction: 65.4,
            albumXp: 5_659,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Magnificent Feather',
            levelRequired: 210,
            xpPerAction: 143.7,
            albumXp: 9_516,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Pied Feather',
            levelRequired: 260,
            xpPerAction: 378.2,
            albumXp: 16_463,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Fluffy Feather',
            levelRequired: 310,
            xpPerAction: 809.1,
            albumXp: 26_218,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Streaky Feather',
            levelRequired: 360,
            xpPerAction: 1_569.6,
            albumXp: 39_789,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Flamboyant Feather',
            levelRequired: 410,
            xpPerAction: 2_858.5,
            albumXp: 58_710,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Sapphire Feather',
            levelRequired: 460,
            xpPerAction: 5_019.3,
            albumXp: 85_303,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
    ]
}