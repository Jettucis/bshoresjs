import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Worms: PassiveSkillNode = {
    name: 'Worms',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Scruffy Scrubland'],
    variants: [
        {
            itemName: 'Feast Worms',
            levelRequired: 32,
            xpPerAction: 4.8,
            albumXp: 633,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Pine Needle Worms',
            levelRequired: 70,
            xpPerAction: 15.4,
            albumXp: 1_549,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Red Worms',
            levelRequired: 120,
            xpPerAction: 38.4,
            albumXp: 3_372,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Squirm Worms',
            levelRequired: 170,
            xpPerAction: 77.6,
            albumXp: 6_030,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Kanner Worms',
            levelRequired: 220,
            xpPerAction: 185.4,
            albumXp: 10_047,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Compost Worms',
            levelRequired: 270,
            xpPerAction: 459.2,
            albumXp: 17_299,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Turning Worms',
            levelRequired: 320,
            xpPerAction: 957.5,
            albumXp: 27_487,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Welch Worms',
            levelRequired: 370,
            xpPerAction: 1_828.9,
            albumXp: 41_695,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Lump Worms',
            levelRequired: 420,
            xpPerAction: 3_299.8,
            albumXp: 61_564,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Lurch Worms',
            levelRequired: 470,
            xpPerAction: 5_750.7,
            albumXp: 89_585,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
    ]
}