
import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Sturlet: PassiveSkillNode = {
    name: 'Sturlet',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 3,
    actionsPerHour: 180,
    locations: ['Vincible'],
    variants: [
        {
            itemName: 'Idle Sturlet',
            levelRequired: 40,
            xpPerAction: 6,
            albumXp: 730,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Fishing Rod',
            input: [
                { itemName: 'Grubby Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Flathead Sturlet',
            levelRequired: 83,
            xpPerAction: 16,
            albumXp: 1_785,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Hobrin Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Striped Sturlet',
            levelRequired: 133,
            xpPerAction: 37,
            albumXp: 3_722,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Shvelt Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Thick Lipped Sturlet',
            levelRequired: 183,
            xpPerAction: 73,
            albumXp: 6_526,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Meldan Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Wandering Sturlet',
            levelRequired: 233,
            xpPerAction: 189,
            albumXp: 10_762,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Rubble Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Silver Sturlet',
            levelRequired: 283,
            xpPerAction: 441,
            albumXp: 18_431,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Flub Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Western Sturlet',
            levelRequired: 333,
            xpPerAction: 894,
            albumXp: 29_221,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Cellandale Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Blond Sturlet',
            levelRequired: 383,
            xpPerAction: 1_677,
            albumXp: 44_313,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Fleniforous Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Bullet Sturlet',
            levelRequired: 433,
            xpPerAction: 2_993,
            albumXp: 65_507,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Shobsterate Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Mighty Sturlet',
            levelRequired: 483,
            xpPerAction: 5_178,
            albumXp: 95_526,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Fishing Rod',
            input: [
                { itemName: 'Reggit Grubs', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
    ]
}