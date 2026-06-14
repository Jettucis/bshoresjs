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
            itemsRequired: ['Basic 0 Trowel', 'Bucket']
        },
        {
            itemName: 'Pine Needle Worms',
            levelRequired: 70,
            xpPerAction: 15.4,
            albumXp: 1_549,
            quantityPerAction: 0.005,
            itemsRequired: ['Moderate 1 Trowel', 'Bucket']
        },
        {
            itemName: 'Red Worms',
            levelRequired: 120,
            xpPerAction: 38.4,
            albumXp: 3_372,
            quantityPerAction: 0.005,
            itemsRequired: ['Moderate 1 Trowel', 'Bucket']
        },
        {
            itemName: 'Squirm Worms',
            levelRequired: 170,
            xpPerAction: 77.6,
            albumXp: 6_030,
            quantityPerAction: 0.005,
            itemsRequired: ['Fine 3 Trowel', 'Bucket']
        },
        {
            itemName: 'Kanner Worms',
            levelRequired: 220,
            xpPerAction: 185.4,
            albumXp: 10_047,
            quantityPerAction: 0.005,
            itemsRequired: ['Fine 3 Trowel', 'Bucket']
        },
        {
            itemName: 'Compost Worms',
            levelRequired: 270,
            xpPerAction: 459.2,
            albumXp: 17_299,
            quantityPerAction: 0.005,
            itemsRequired: ['Sturdy 5 Trowel', 'Bucket']
        },
        {
            itemName: 'Turning Worms',
            levelRequired: 320,
            xpPerAction: 957.5,
            albumXp: 27_487,
            quantityPerAction: 0.005,
            itemsRequired: ['Sturdy 5 Trowel', 'Bucket']
        },
        {
            itemName: 'Welch Worms',
            levelRequired: 370,
            xpPerAction: 1_828.9,
            albumXp: 41_695,
            quantityPerAction: 0.005,
            itemsRequired: ['Excellent 7 Trowel', 'Bucket']
        },
        {
            itemName: 'Lump Worms',
            levelRequired: 420,
            xpPerAction: 3_299.8,
            albumXp: 61_564,
            quantityPerAction: 0.005,
            itemsRequired: ['Excellent 7 Trowel', 'Bucket']
        },
        {
            itemName: 'Lurch Worms',
            levelRequired: 470,
            xpPerAction: 5_750.7,
            albumXp: 89_585,
            quantityPerAction: 0.005,
            itemsRequired: ['Perfect 9 Trowel', 'Bucket']
        },
    ]
}