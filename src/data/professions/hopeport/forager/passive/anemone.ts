import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Anemone: PassiveSkillNode = {
    name: 'Anemone',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Seashells Seashore'],
    variants: [
        {
            itemName: 'Beadlet Anemone',
            levelRequired: 35,
            xpPerAction: 4.6,
            albumXp: 669,
            quantityPerAction: 0.005,
            itemsRequired: ['Basic 0 Pond Net', 'Bucket']
        },
        {
            itemName: 'Strawberry Anemone',
            levelRequired: 75,
            xpPerAction: 14.2,
            albumXp: 1_639,
            quantityPerAction: 0.005,
            itemsRequired: ['Moderate 1 Pond Net', 'Bucket']
        },
        {
            itemName: 'Dahlia Anemone',
            levelRequired: 125,
            xpPerAction: 34.4,
            albumXp: 3_505,
            quantityPerAction: 0.005,
            itemsRequired: ['Moderate 1 Pond Net', 'Bucket']
        },
        {
            itemName: 'Snakelocks Anemone',
            levelRequired: 175,
            xpPerAction: 68.9,
            albumXp: 6_219,
            quantityPerAction: 0.005,
            itemsRequired: ['Fine 3 Pond Net', 'Bucket']
        },
        {
            itemName: 'Elegant Anemone',
            levelRequired: 225,
            xpPerAction: 170.294,
            albumXp: 10_318,
            quantityPerAction: 0.005,
            itemsRequired: ['Fine 3 Pond Net', 'Bucket']
        },
        {
            itemName: 'Riterri Anemone',
            levelRequired: 275,
            xpPerAction: 411.7,
            albumXp: 17_728,
            quantityPerAction: 0.005,
            itemsRequired: ['Sturdy 5 Pond Net', 'Bucket']
        },
        {
            itemName: 'Gem Anemone',
            levelRequired: 325,
            xpPerAction: 849,
            albumXp: 28_143,
            quantityPerAction: 0.005,
            itemsRequired: ['Sturdy 5 Pond Net', 'Bucket']
        },
        {
            itemName: 'Satin Anemone',
            levelRequired: 375,
            xpPerAction: 1_608.1,
            albumXp: 42_682,
            quantityPerAction: 0.005,
            itemsRequired: ['Excellent 7 Pond Net', 'Bucket']
        },
        {
            itemName: 'Giant Green Anemone',
            levelRequired: 425,
            xpPerAction: 2_889.3,
            albumXp: 63_048,
            quantityPerAction: 0.005,
            itemsRequired: ['Excellent 7 Pond Net', 'Bucket']
        },
        {
            itemName: 'Starburst Anemone',
            levelRequired: 475,
            xpPerAction: 5_022.5,
            albumXp: 91_818,
            quantityPerAction: 0.005,
            itemsRequired: ['Perfect 9 Pond Net', 'Bucket']
        },
    ]
}