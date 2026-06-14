import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Sprey: PassiveSkillNode = {
    name: 'Sprey',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Disused Path'],
    variants: [
        {
            itemName: 'Butter Sprey',
            levelRequired: 38,
            xpPerAction: 6,
            albumXp: 706,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Ditch Sprey',
            levelRequired: 80,
            xpPerAction: 17.6,
            albumXp: 1_730,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Gravel Sprey',
            levelRequired: 130,
            xpPerAction: 42,
            albumXp: 3_640,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Balk Sprey',
            levelRequired: 180,
            xpPerAction: 83,
            albumXp: 6_410,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Tuffet Sprey',
            levelRequired: 230,
            xpPerAction: 212,
            albumXp: 10_594,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Sentinel Sprey',
            levelRequired: 280,
            xpPerAction: 501.5,
            albumXp: 18_165,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Fine Sprey',
            levelRequired: 330,
            xpPerAction: 1_023.6,
            albumXp: 28_812,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Pepper Sprey',
            levelRequired: 380,
            xpPerAction: 1_924.1,
            albumXp: 43_694,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Mystic Sprey',
            levelRequired: 430,
            xpPerAction: 3_443.6,
            albumXp: 64_573,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
        {
            itemName: 'Duke Sprey',
            levelRequired: 480,
            xpPerAction: 5_972.2,
            albumXp: 94_116,
            quantityPerAction: 0.005,
            input: [{ itemName: 'Sack', quantity: 0.005 }]
        },
    ]
}