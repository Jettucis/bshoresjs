
import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Herring: PassiveSkillNode = {
    name: 'Herring',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 2,
    actionsPerHour: 180,
    locations: ['Boardwalk'],
    variants: [
        {
            itemName: 'Ridged Herring',
            levelRequired: 30,
            xpPerAction: 5,
            albumXp: 608,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Fishing Rod',
            input: [
                { itemName: 'Blotchy Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Gray Herring',
            levelRequired: 66,
            xpPerAction: 14,
            albumXp: 1_478,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Pasty Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Red Herring',
            levelRequired: 116,
            xpPerAction: 34,
            albumXp: 3_266,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Icky Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Ochre Herring',
            levelRequired: 166,
            xpPerAction: 69,
            albumXp: 5_881,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Rosy Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Wishful Herring',
            levelRequired: 216,
            xpPerAction: 159,
            albumXp: 9_832,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Writhing Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Hope Herring',
            levelRequired: 266,
            xpPerAction: 401,
            albumXp: 16_961,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Festering Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Chopper Herring',
            levelRequired: 316,
            xpPerAction: 845,
            albumXp: 26_973,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Sticky Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Shimmering Herring',
            levelRequired: 366,
            xpPerAction: 1_619,
            albumXp: 40_921,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'High Protein Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Hefty Herring',
            levelRequired: 416,
            xpPerAction: 2_935,
            albumXp: 60_405,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Ravenous Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Golden Herring',
            levelRequired: 466,
            xpPerAction: 5_125,
            albumXp: 87_843,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Fishing Rod',
            input: [
                { itemName: 'Meaty Maggots', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
    ]
}