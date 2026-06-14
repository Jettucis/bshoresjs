import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Beetle: PassiveSkillNode = {
    name: 'Beetle',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Stony Meadow'],
    variants: [
        {
            itemName: 'Salt Beetle',
            levelRequired: 44,
            xpPerAction: 6.5,
            albumXp: 780,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Star Beetle',
            levelRequired: 90,
            xpPerAction: 18,
            albumXp: 1_914,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Blackcurrant Beetle',
            levelRequired: 140,
            xpPerAction: 41.4,
            albumXp: 3_914,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Dark Ruby Beetle',
            levelRequired: 190,
            xpPerAction: 80.2,
            albumXp: 6_800,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Fire Beetle',
            levelRequired: 240,
            xpPerAction: 216,
            albumXp: 11_159,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Wish Beetle',
            levelRequired: 290,
            xpPerAction: 491.8,
            albumXp: 19_065,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Carriage Beetle',
            levelRequired: 340,
            xpPerAction: 986.2,
            albumXp: 30_196,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Turquoise Beetle',
            levelRequired: 390,
            xpPerAction: 1_833.5,
            albumXp: 45_793,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Burnished Beetle',
            levelRequired: 440,
            xpPerAction: 3_259.3,
            albumXp: 67_747,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
        {
            itemName: 'Topaz Beetle',
            levelRequired: 490,
            xpPerAction: 5_620.8,
            albumXp: 98_915,
            quantityPerAction: 0.005,
            itemsRequired: ['Jar']
        },
    ]
}