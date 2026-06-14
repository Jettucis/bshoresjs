import { PassiveSkillNode } from "../../../../../types/passiveSkillNode";

export const ScrapMetal: PassiveSkillNode = {
    name: 'Scrap Metal',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 20,
    nodeCount: 1,
    actionsPerHour: 180,
    locations: ['East Waterfront', 'Nook Alley'],
    variants: [
        {
            itemName: 'Rusty Scrap Metal',
            levelRequired: 47,
            xpPerAction: 7.4,
            albumXp: 817,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Tarnished Scrap Metal',
            levelRequired: 95,
            xpPerAction: 20,
            albumXp: 2_007,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Twisted Scrap Metal',
            levelRequired: 145,
            xpPerAction: 45.3,
            albumXp: 4_053,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Clean Scrap Metal',
            levelRequired: 195,
            xpPerAction: 87.2,
            albumXp: 6_999,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Miscellaneous Scrap Metal',
            levelRequired: 245,
            xpPerAction: 240.2,
            albumXp: 11_449,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Interesting Scrap Metal',
            levelRequired: 295,
            xpPerAction: 538.3,
            albumXp: 19_528,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Substantial Scrap Metal',
            levelRequired: 345,
            xpPerAction: 1_069.6,
            albumXp: 30_911,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Splendid Scrap Metal',
            levelRequired: 395,
            xpPerAction: 11_981.7,
            albumXp: 46_883,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Lustrous Scrap Metal',
            levelRequired: 445,
            xpPerAction: 3_507.1,
            albumXp: 69_400,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
        {
            itemName: 'Pristine Scrap Metal',
            levelRequired: 495,
            xpPerAction: 6_037.6,
            albumXp: 101_420,
            quantityPerAction: 0.005,
            itemsRequired: ['Crate']
        },
    ]
}