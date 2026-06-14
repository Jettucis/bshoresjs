import { ActiveSkillNode } from "../../../../../types/activeSkillNode";


export const FemurShard: ActiveSkillNode = {
    name: 'Femur Shard',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 428,
    actionsPerHourDiscarding: 450,
    locations: ['Stony Coast', 'Stony Meadow'],
    variants: [
        {
            itemName: 'Cracked Femur Shard',
            levelRequired: 43,
            xpPerAction: 198,
            knowledgePerAction: 92,
            albumXp: 767,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Trowel']
        },
        {
            itemName: 'Dusty Femur Shard',
            levelRequired: 94,
            xpPerAction: 478,
            knowledgePerAction: 86,
            albumXp: 1_988,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Weathered Femur Shard',
            levelRequired: 145,
            xpPerAction: 971,
            knowledgePerAction: 86,
            albumXp: 4_053,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Striated Femur Shard',
            levelRequired: 195,
            xpPerAction: 1_665,
            knowledgePerAction: 86,
            albumXp: 6_999,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Musty Femur Shard',
            levelRequired: 245,
            xpPerAction: 2_722,
            knowledgePerAction: 86,
            albumXp: 11_449,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Sharp Femur Shard',
            levelRequired: 295,
            xpPerAction: 4_613,
            knowledgePerAction: 85,
            albumXp: 19_528,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Jagged Femur Shard',
            levelRequired: 345,
            xpPerAction: 7_300,
            knowledgePerAction: 85,
            albumXp: 30_911,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Hard Femur Shard',
            levelRequired: 395,
            xpPerAction: 10_997,
            knowledgePerAction: 85,
            albumXp: 46_883,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Exquisite Femur Shard',
            levelRequired: 445,
            xpPerAction: 16_280,
            knowledgePerAction: 85,
            albumXp: 69_400,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Chunky Femur Shard',
            levelRequired: 495,
            xpPerAction: 23_620,
            knowledgePerAction: 84,
            albumXp: 101_420,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Trowel']
        },
    ]
}