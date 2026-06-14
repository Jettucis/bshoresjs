import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Kelp: ActiveSkillNode = {
    name: 'Kelp',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 313,
    actionsPerHourDiscarding: 338,
    locations: ['East Beach', 'Seashells Seashore'],
    variants: [
        {
            itemName: 'Brown Kelp',
            levelRequired: 0,
            xpPerAction: 86,
            knowledgePerAction: 98,
            albumXp: 250,
            quantityPerAction: 1
        },
        {
            itemName: 'Green Kelp',
            levelRequired: 50,
            xpPerAction: 398,
            knowledgePerAction: 98,
            albumXp: 1_195,
            quantityPerAction: 1
        },
        {
            itemName: 'Tan Kelp',
            levelRequired: 105,
            xpPerAction: 985,
            knowledgePerAction: 98,
            albumXp: 2_979,
            quantityPerAction: 1
        },
        {
            itemName: 'Silver Kelp',
            levelRequired: 155,
            xpPerAction: 1_808,
            knowledgePerAction: 98,
            albumXp: 5_477,
            quantityPerAction: 1
        },
        {
            itemName: 'Kombu Kelp',
            levelRequired: 205,
            xpPerAction: 3_051,
            knowledgePerAction: 98,
            albumXp: 9_256,
            quantityPerAction: 1
        },
        {
            itemName: 'Copper Kelp',
            levelRequired: 255,
            xpPerAction: 5_290,
            knowledgePerAction: 98,
            albumXp: 16_057,
            quantityPerAction: 1
        },
        {
            itemName: 'Bulbous Kelp',
            levelRequired: 305,
            xpPerAction: 8_432,
            knowledgePerAction: 98,
            albumXp: 25_603,
            quantityPerAction: 1
        },
        {
            itemName: 'Violet Tide Kelp',
            levelRequired: 355,
            xpPerAction: 12_801,
            knowledgePerAction: 98,
            albumXp: 38_870,
            quantityPerAction: 1
        },
        {
            itemName: 'Kraken Kelp',
            levelRequired: 405,
            xpPerAction: 18_883,
            knowledgePerAction: 98,
            albumXp: 57_338,
            quantityPerAction: 1
        },
        {
            itemName: 'Deep Sea Kelp',
            levelRequired: 455,
            xpPerAction: 27_421,
            knowledgePerAction: 98,
            albumXp: 83_251,
            quantityPerAction: 1
        },
    ]
}