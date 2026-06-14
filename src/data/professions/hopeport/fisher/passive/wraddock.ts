
import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Wraddock: PassiveSkillNode = {
    name: 'Wraddock',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 3,
    actionsPerHour: 180,
    locations: ['Little Lucy'],
    variants: [
        {
            itemName: 'Ballan Wraddock',
            levelRequired: 35,
            xpPerAction: 6,
            albumXp: 669,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Fishing Rod',
            input: [
                { itemName: 'Salt Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Goldsinny Wraddock',
            levelRequired: 75,
            xpPerAction: 18,
            albumXp: 1_639,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Star Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Cuckoo Wraddock',
            levelRequired: 125,
            xpPerAction: 43,
            albumXp: 3_505,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Blackcurrant Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Cleaner Wraddock',
            levelRequired: 175,
            xpPerAction: 85,
            albumXp: 6_219,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Dark Ruby Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Ornate Wraddock',
            levelRequired: 225,
            xpPerAction: 209,
            albumXp: 10_318,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Fire Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Six Line Wraddock',
            levelRequired: 275,
            xpPerAction: 504,
            albumXp: 17_728,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Wish Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Surf Wraddock',
            levelRequired: 325,
            xpPerAction: 1_038,
            albumXp: 28_143,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Carriage Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Corkwing Wraddock',
            levelRequired: 375,
            xpPerAction: 1_966,
            albumXp: 42_682,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Turquoise Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Ostentatious Wraddock',
            levelRequired: 425,
            xpPerAction: 3_532,
            albumXp: 63_048,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Burnished Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Mega Wraddock',
            levelRequired: 475,
            xpPerAction: 6_139,
            albumXp: 91_818,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Fishing Rod',
            input: [
                { itemName: 'Topaz Beetle', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
    ]
}