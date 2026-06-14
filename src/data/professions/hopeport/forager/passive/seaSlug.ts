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
            itemsRequired: ['Basic 0 Pond Net', 'Bucket']
        },
        {
            itemName: 'Silver Sea Slug',
            levelRequired: 50,
            xpPerAction: 10.7,
            albumXp: 1_195,
            quantityPerAction: 0.005,
            itemsRequired: ['Moderate 1 Pond Net', 'Bucket']
        },
        {
            itemName: 'Slithery Sea Slug',
            levelRequired: 100,
            xpPerAction: 29.8,
            albumXp: 2_850,
            quantityPerAction: 0.005,
            itemsRequired: ['Moderate 1 Pond Net', 'Bucket']
        },
        {
            itemName: 'Brown Sea Slug',
            levelRequired: 150,
            xpPerAction: 63.9,
            albumXp: 5_298,
            quantityPerAction: 0.005,
            itemsRequired: ['Fine 3 Pond Net', 'Bucket']
        },
        {
            itemName: 'Gunky Sea Slug',
            levelRequired: 200,
            xpPerAction: 125.7,
            albumXp: 9_000,
            quantityPerAction: 0.005,
            itemsRequired: ['Fine 3 Pond Net', 'Bucket']
        },
        {
            itemName: 'Fleshy Sea Slug',
            levelRequired: 250,
            xpPerAction: 358.1,
            albumXp: 15_657,
            quantityPerAction: 0.005,
            itemsRequired: ['Sturdy 5 Pond Net', 'Bucket']
        },
        {
            itemName: 'Lumpy Sea Slug',
            levelRequired: 300,
            xpPerAction: 792.3,
            albumXp: 25_000,
            quantityPerAction: 0.005,
            itemsRequired: ['Sturdy 5 Pond Net', 'Bucket']
        },
        {
            itemName: 'Juicy Sea Slug',
            levelRequired: 350,
            xpPerAction: 1_565.5,
            albumXp: 37_971,
            quantityPerAction: 0.005,
            itemsRequired: ['Excellent 7 Pond Net', 'Bucket']
        },
        {
            itemName: 'Clammy Sea Slug',
            levelRequired: 400,
            xpPerAction: 2_888.5,
            albumXp: 56_000,
            quantityPerAction: 0.005,
            itemsRequired: ['Excellent 7 Pond Net', 'Bucket']
        },
        {
            itemName: 'Glutinous Sea Slug',
            levelRequired: 450,
            xpPerAction: 5_107,
            albumXp: 81_255,
            quantityPerAction: 0.005,
            itemsRequired: ['Perfect 9 Pond Net', 'Bucket']
        },
    ]
}