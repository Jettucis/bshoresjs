import { VENTURE_DURATION_23H, VentureNode } from "../../../../../types/ventures";

export const Lobster: VentureNode = {
    name: 'Lobster',
    profession: 'fisher',
    episode: 'hopeport',
    durationSeconds: VENTURE_DURATION_23H,
    nodeCount: 2,
    kind: 'standard',
    locations: ['West Waterfront'],
    variants: [
        {
            itemName: 'Orange Lobster',
            levelRequired: 50,
            xpReward: 11_011,
            albumXp: 1_195,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Moderate 1 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Striped Lobster',
            levelRequired: 125,
            xpReward: 39_557,
            albumXp: 3_505,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Average 2 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Ghost Lobster',
            levelRequired: 175,
            xpReward: 79_132,
            albumXp: 6_219,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Fine 3 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Flavorsome Lobster',
            levelRequired: 225,
            xpReward: 195_819,
            albumXp: 10_318,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Fine 3 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Heavy Lobster',
            levelRequired: 275,
            xpReward: 473_413,
            albumXp: 17_728,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Sturdy 5 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Cunning Lobster',
            levelRequired: 325,
            xpReward: 976_274,
            albumXp: 28_143,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Sturdy 5 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Flobber Lobster',
            levelRequired: 375,
            xpReward: 1_849_310,
            albumXp: 42_682,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Excellent 7 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Biscuit Lobster',
            levelRequired: 425,
            xpReward: 3_322_651,
            albumXp: 63_048,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Excellent 7 Lobster Pot', quantity: 1 }
            ]
        },
        {
            itemName: 'Rock Lobster',
            levelRequired: 475,
            xpReward: 5_775_862,
            albumXp: 91_818,
            rewardQuantity: 50,
            itemsRequired: [
                { itemName: 'Perfect 9 Lobster Pot', quantity: 1 }
            ]
        }
    ]
}