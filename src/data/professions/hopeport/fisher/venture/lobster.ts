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
            equipment: 'Moderate 1 Lobster Pot'
        },
        {
            itemName: 'Striped Lobster',
            levelRequired: 125,
            xpReward: 39_557,
            albumXp: 3_505,
            rewardQuantity: 50,
            equipment: 'Average 2 Lobster Pot'
        },
        {
            itemName: 'Ghost Lobster',
            levelRequired: 175,
            xpReward: 79_132,
            albumXp: 6_219,
            rewardQuantity: 50,
            equipment: 'Fine 3 Lobster Pot'
        },
        {
            itemName: 'Flavorsome Lobster',
            levelRequired: 225,
            xpReward: 195_819,
            albumXp: 10_318,
            rewardQuantity: 50,
            equipment: 'Fine 3 Lobster Pot'
        },
        {
            itemName: 'Heavy Lobster',
            levelRequired: 275,
            xpReward: 473_413,
            albumXp: 17_728,
            rewardQuantity: 50,
            equipment: 'Sturdy 5 Lobster Pot'
        },
        {
            itemName: 'Cunning Lobster',
            levelRequired: 325,
            xpReward: 976_274,
            albumXp: 28_143,
            rewardQuantity: 50,
            equipment: 'Sturdy 5 Lobster Pot'
        },
        {
            itemName: 'Flobber Lobster',
            levelRequired: 375,
            xpReward: 1_849_310,
            albumXp: 42_682,
            rewardQuantity: 50,
            equipment: 'Excellent 7 Lobster Pot'
        },
        {
            itemName: 'Biscuit Lobster',
            levelRequired: 425,
            xpReward: 3_322_651,
            albumXp: 63_048,
            rewardQuantity: 50,
            equipment: 'Excellent 7 Lobster Pot'
        },
        {
            itemName: 'Rock Lobster',
            levelRequired: 475,
            xpReward: 5_775_862,
            albumXp: 91_818,
            rewardQuantity: 50,
            equipment: 'Perfect 9 Lobster Pot'
        }
    ]
}