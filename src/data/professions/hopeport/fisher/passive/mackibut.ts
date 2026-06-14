
import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Mackibut: PassiveSkillNode = {
    name: 'Mackibut',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 3,
    actionsPerHour: 180,
    locations: ['Salty Swine'],
    variants: [
        {
            itemName: 'Spotted Mackibut',
            levelRequired: 45,
            xpPerAction: 7,
            albumXp: 792,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Fishing Rod',
            input: [
                { itemName: 'Gray Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Whitespot Mackibut',
            levelRequired: 91,
            xpPerAction: 20,
            albumXp: 1_932,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Bark Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Blue Jack Mackibut',
            levelRequired: 141,
            xpPerAction: 44,
            albumXp: 3_942,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Reclusive Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Streaked Mackibut',
            levelRequired: 191,
            xpPerAction: 85,
            albumXp: 6_839,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Shadow Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Horse Mackibut',
            levelRequired: 241,
            xpPerAction: 231,
            albumXp: 11_217,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Juicy Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Chub Mackibut',
            levelRequired: 291,
            xpPerAction: 522,
            albumXp: 19_157,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Skittering Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Blue Mackibut',
            levelRequired: 341,
            xpPerAction: 1_045,
            albumXp: 30_337,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Lousy Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Wahoo Mackibut',
            levelRequired: 391,
            xpPerAction: 1_940,
            albumXp: 46_009,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Debris Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Etway Mackibut',
            levelRequired: 441,
            xpPerAction: 3_445,
            albumXp: 68_074,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Pebble Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'King Mackibut',
            levelRequired: 491,
            xpPerAction: 5_937,
            albumXp: 99_410,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Fishing Rod',
            input: [
                { itemName: 'Furtive Louse', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
    ]
}