import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const Dab: PassiveSkillNode = {
    name: 'Dab',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 3,
    actionsPerHour: 180,
    locations: ['Vacant Pier'],
    variants: [
        {
            itemName: 'Common Dab',
            levelRequired: 20,
            xpPerAction: 3,
            albumXp: 488,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Fishing Rod',
            input: [
                { itemName: 'Slippy Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Small Dab',
            levelRequired: 50,
            xpPerAction: 11,
            albumXp: 1_195,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Silver Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Dancing Dab',
            levelRequired: 100,
            xpPerAction: 30,
            albumXp: 2_850,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Fishing Rod',
            input: [
                { itemName: 'Slithery Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Summer Dab',
            levelRequired: 150,
            xpPerAction: 64,
            albumXp: 5_298,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Brown Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Smooth Dab',
            levelRequired: 200,
            xpPerAction: 126,
            albumXp: 9_000,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Fishing Rod',
            input: [
                { itemName: 'Gunky Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Screaming Ab Dab',
            levelRequired: 250,
            xpPerAction: 359,
            albumXp: 15_657,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Fleshy Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Spotted Dab',
            levelRequired: 300,
            xpPerAction: 793,
            albumXp: 25_000,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Fishing Rod',
            input: [
                { itemName: 'Lumpy Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Cream Dab',
            levelRequired: 350,
            xpPerAction: 1_566,
            albumXp: 37_971,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Juicy Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Alpha Dab',
            levelRequired: 400,
            xpPerAction: 2_889,
            albumXp: 56_000,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Fishing Rod',
            input: [
                { itemName: 'Clammy Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
        {
            itemName: 'Mighty Dab',
            levelRequired: 450,
            xpPerAction: 5_107,
            albumXp: 81_255,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Fishing Rod',
            input: [
                { itemName: 'Glutinous Sea Slug', quantity: 0.005 },
                { itemName: 'Crate', quantity: 0.005 }
            ]
        },
    ]
}