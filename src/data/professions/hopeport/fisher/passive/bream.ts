import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Bream: PassiveSkillNode = {
    name: 'Bream',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 3,
    actionsPerHour: 180,
    locations: ['Central Waterfront'],
    variants: [
        {
            itemName: 'Leathery Bream',
            levelRequired: 25,
            xpPerAction: 4,
            albumXp: 548,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Fishing Rod',
            input: [
                { itemName: 'Feast Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Black Bream',
            levelRequired: 58,
            xpPerAction: 13,
            albumXp: 1_336,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Pine Needle Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Surf Bream',
            levelRequired: 108,
            xpPerAction: 35,
            albumXp: 3_057,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Red Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Graceful Bream',
            levelRequired: 158,
            xpPerAction: 72,
            albumXp: 5_586,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Squirm Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Cream Bream',
            levelRequired: 208,
            xpPerAction: 154,
            albumXp: 9_412,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Kanner Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Broad Bream',
            levelRequired: 258,
            xpPerAction: 410,
            albumXp: 16_300,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Compost Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Gilt-Headed Bream',
            levelRequired: 308,
            xpPerAction: 882,
            albumXp: 25_971,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Turning Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Dream Bream',
            levelRequired: 358,
            xpPerAction: 1_717,
            albumXp: 39_419,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Welch Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Brilliant Bream',
            levelRequired: 408,
            xpPerAction: 3_136,
            albumXp: 58_157,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Lump Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Extreme Bream',
            levelRequired: 458,
            xpPerAction: 5_507,
            albumXp: 84_476,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Fishing Rod',
            input: [
                { itemName: 'Lurch Worms', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
    ]
}