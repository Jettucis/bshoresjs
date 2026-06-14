import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const SeaSlug: PassiveSkillNode = {
    name: 'Sea Slug',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Seashells Seashore'],
    variants: [
        {
            itemName: 'Slippy Sea Slug',
            levelRequired: 20,
            xpPerAction: 2.5,
            albumXp: 488,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Silver Sea Slug',
            levelRequired: 50,
            xpPerAction: 10.7,
            albumXp: 1_195,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Slithery Sea Slug',
            levelRequired: 100,
            xpPerAction: 29.8,
            albumXp: 2_850,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Brown Sea Slug',
            levelRequired: 150,
            xpPerAction: 63.9,
            albumXp: 5_298,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Gunky Sea Slug',
            levelRequired: 200,
            xpPerAction: 125.7,
            albumXp: 9_000,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Fleshy Sea Slug',
            levelRequired: 250,
            xpPerAction: 358.1,
            albumXp: 15_657,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Lumpy Sea Slug',
            levelRequired: 300,
            xpPerAction: 792.3,
            albumXp: 25_000,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Juicy Sea Slug',
            levelRequired: 350,
            xpPerAction: 1_565.5,
            albumXp: 37_971,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Clammy Sea Slug',
            levelRequired: 400,
            xpPerAction: 2_888.5,
            albumXp: 56_000,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Glutinous Sea Slug',
            levelRequired: 450,
            xpPerAction: 5_107,
            albumXp: 81_255,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Pond Net',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
    ]
}