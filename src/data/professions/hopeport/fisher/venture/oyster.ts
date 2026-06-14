import { VENTURE_DURATION_23H, VentureNode } from "../../../../../types/ventures";

export const Oyster: VentureNode = {
    name: 'Oyster',
    profession: 'fisher',
    episode: 'hopeport',
    durationSeconds: VENTURE_DURATION_23H,
    nodeCount: 2,
    kind: 'standard',
    locations: ['East Waterfront'],
    variants: [
        {
            itemName: 'Beach Oyster',
            levelRequired: 100,
            xpReward: 30_823,
            albumXp: 2_850,
            rewardQuantity: 150,
            equipment: 'Average 2 Oyster Net'
        },
        {
            itemName: 'Signal Oyster',
            levelRequired: 150,
            xpReward: 66_065,
            albumXp: 5_298,
            rewardQuantity: 150,
            equipment: 'Fine 3 Oyster Net'
        },
        {
            itemName: 'Speckled Oyster',
            levelRequired: 200,
            xpReward: 130_016,
            albumXp: 9_000,
            rewardQuantity: 150,
            equipment: 'Robust 4 Oyster Net'
        },
        {
            itemName: 'Spotshell Oyster',
            levelRequired: 250,
            xpReward: 370_609,
            albumXp: 15_657,
            rewardQuantity: 150,
            equipment: 'Sturdy 5 Oyster Net'
        },
        {
            itemName: 'Saltflow Oyster',
            levelRequired: 300,
            xpReward: 819_965,
            albumXp: 25_000,
            rewardQuantity: 150,
            equipment: 'Sturdy 5 Oyster Net'
        },
        {
            itemName: 'Kumo Oyster',
            levelRequired: 350,
            xpReward: 1_620_265,
            albumXp: 37_971,
            rewardQuantity: 150,
            equipment: 'Excellent 7 Oyster Net'
        },
        {
            itemName: 'Rusty Oyster',
            levelRequired: 400,
            xpReward: 2_989_555,
            albumXp: 56_000,
            rewardQuantity: 150,
            equipment: 'Excellent 7 Oyster Net'
        },
        {
            itemName: 'Graduated Oyster',
            levelRequired: 450,
            xpReward: 5_285_668,
            albumXp: 81_255,
            rewardQuantity: 150,
            equipment: 'Perfect 9 Oyster Net'
        }
    ]
}