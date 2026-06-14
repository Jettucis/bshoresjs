import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const WaterLily: ActiveSkillNode = {
    name: 'Water Lily',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 5,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 292,
    actionsPerHourDiscarding: 338,
    locations: ['Rubble Road', 'Overgrown Road'],
    variants: [
        {
            itemName: 'White Water Lily',
            levelRequired: 23,
            xpPerAction: 194,
            knowledgePerAction: 88,
            albumXp: 524,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Pond Net']
        },
        {
            itemName: 'Caramel Water Lily',
            levelRequired: 77,
            xpPerAction: 566,
            knowledgePerAction: 81,
            albumXp: 1_675,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Pond Net']
        },
        {
            itemName: 'Copper Water Lily',
            levelRequired: 130,
            xpPerAction: 1_225,
            knowledgePerAction: 81,
            albumXp: 3_640,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Pond Net']
        },
        {
            itemName: 'Cerulean Water Lily',
            levelRequired: 180,
            xpPerAction: 2_139,
            knowledgePerAction: 81,
            albumXp: 6_410,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Pond Net']
        },
        {
            itemName: 'Leopardess Water Lily',
            levelRequired: 230,
            xpPerAction: 3_532,
            knowledgePerAction: 81,
            albumXp: 10_594,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Pond Net']
        },
        {
            itemName: 'Peach Glow Water Lily',
            levelRequired: 280,
            xpPerAction: 6_007,
            knowledgePerAction: 80,
            albumXp: 18_165,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Pond Net']
        },
        {
            itemName: 'Broad Water Lily',
            levelRequired: 330,
            xpPerAction: 9_526,
            knowledgePerAction: 80,
            albumXp: 28_812,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Pond Net']
        },
        {
            itemName: 'Snowball Water Lily',
            levelRequired: 380,
            xpPerAction: 14_321,
            knowledgePerAction: 79,
            albumXp: 43_694,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Pond Net']
        },
        {
            itemName: 'Almost Black Water Lily',
            levelRequired: 430,
            xpPerAction: 21_166,
            knowledgePerAction: 79,
            albumXp: 64_573,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Pond Net']
        },
        {
            itemName: "Dragon's Breath Water Lily",
            levelRequired: 480,
            xpPerAction: 30_577,
            knowledgePerAction: 79,
            albumXp: 94_116,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Pond Net']
        },
    ]
}