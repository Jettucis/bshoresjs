import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const SheepRib: PassiveSkillNode = {
    name: 'Sheep Rib',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['Scruffy Scrubland'],
    variants: [
        {
            itemName: 'Gnawed Sheep Rib',
            levelRequired: 23,
            xpPerAction: 2.8,
            albumXp: 524,
            quantityPerAction: 0.005,
            equipment: 'Basic 0 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Yellowing Sheep Rib',
            levelRequired: 55,
            xpPerAction: 10.5,
            albumXp: 1_283,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Dry Sheep Rib',
            levelRequired: 105,
            xpPerAction: 28.3,
            albumXp: 2_979,
            quantityPerAction: 0.005,
            equipment: 'Moderate 1 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Soily Sheep Rib',
            levelRequired: 155,
            xpPerAction: 59.7,
            albumXp: 5_477,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Curvy Sheep Rib',
            levelRequired: 205,
            xpPerAction: 124.6,
            albumXp: 9_256,
            quantityPerAction: 0.005,
            equipment: 'Fine 3 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Spare Sheep Rib',
            levelRequired: 255,
            xpPerAction: 340.3,
            albumXp: 16_057,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Forgotten Sheep Rib',
            levelRequired: 305,
            xpPerAction: 740.4,
            albumXp: 25_603,
            quantityPerAction: 0.005,
            equipment: 'Sturdy 5 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Toughened Sheep Rib',
            levelRequired: 355,
            xpPerAction: 1_446.3,
            albumXp: 38_870,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Pristine Sheep Rib',
            levelRequired: 405,
            xpPerAction: 2_653,
            albumXp: 57_338,
            quantityPerAction: 0.005,
            equipment: 'Excellent 7 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
        {
            itemName: 'Incredible Sheep Rib',
            levelRequired: 455,
            xpPerAction: 4_673.8,
            albumXp: 83_251,
            quantityPerAction: 0.005,
            equipment: 'Perfect 9 Trowel',
            input: [{ itemName: 'Bucket', quantity: 0.005 }]
        },
    ]
}