import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const BoneSpike: ActiveSkillNode = {
    name: 'Bone Spike',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 428,
    actionsPerHourDiscarding: 450,
    locations: ['Collapsed Hovels', 'Wild Path'],
    variants: [
        {
            itemName: 'Streaky Bone Spike',
            levelRequired: 30,
            xpPerAction: 168,
            knowledgePerAction: 81,
            albumXp: 608,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Trowel']
        },
        {
            itemName: 'Dappled Bone Spike',
            levelRequired: 83,
            xpPerAction: 459,
            knowledgePerAction: 76,
            albumXp: 1_785,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Bistre Bone Spike',
            levelRequired: 135,
            xpPerAction: 967,
            knowledgePerAction: 76,
            albumXp: 3_776,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Pointed Bone Spike',
            levelRequired: 185,
            xpPerAction: 1_679,
            knowledgePerAction: 76,
            albumXp: 6_604,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Cracked Bone Spike',
            levelRequired: 235,
            xpPerAction: 2_762,
            knowledgePerAction: 76,
            albumXp: 10_874,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Jagged Bone Spike',
            levelRequired: 285,
            xpPerAction: 4_695,
            knowledgePerAction: 75,
            albumXp: 18_611,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Splintery Bone Spike',
            levelRequired: 335,
            xpPerAction: 7_440,
            knowledgePerAction: 75,
            albumXp: 29_496,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Hardened Bone Spike',
            levelRequired: 385,
            xpPerAction: 11_203,
            knowledgePerAction: 75,
            albumXp: 44_731,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Razor Bone Spike',
            levelRequired: 435,
            xpPerAction: 16_566,
            knowledgePerAction: 75,
            albumXp: 66_138,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Vicious Bone Spike',
            levelRequired: 485,
            xpPerAction: 23_993,
            knowledgePerAction: 74,
            albumXp: 96_481,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Trowel']
        },
    ]
}