import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Maggots: PassiveSkillNode = {
    name: 'Maggots',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Collapsed Hovels'],
    variants: [
        {
            itemName: 'Blotchy Maggots',
            levelRequired: 41,
            xpPerAction: 6.9,
            albumXp: 743,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Pasty Maggots',
            levelRequired: 85,
            xpPerAction: 19.6,
            albumXp: 1_821,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Icky Maggots',
            levelRequired: 135,
            xpPerAction: 46,
            albumXp: 3_776,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Rosy Maggots',
            levelRequired: 185,
            xpPerAction: 89.9,
            albumXp: 6_604,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Writhing Maggots',
            levelRequired: 235,
            xpPerAction: 236.1,
            albumXp: 10_874,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Festering Maggots',
            levelRequired: 285,
            xpPerAction: 547.7,
            albumXp: 18_611,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Sticky Maggots',
            levelRequired: 335,
            xpPerAction: 1_106.1,
            albumXp: 29_496,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'High Protein Maggots',
            levelRequired: 385,
            xpPerAction: 2_070.4,
            albumXp: 44_731,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Ravenous Maggots',
            levelRequired: 435,
            xpPerAction: 3_686.8,
            albumXp: 66_138,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
        {
            itemName: 'Meaty Maggots',
            levelRequired: 485,
            xpPerAction: 6_380.3,
            albumXp: 96_481,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Jar', quantity: 0.005 }]
        },
    ]
}