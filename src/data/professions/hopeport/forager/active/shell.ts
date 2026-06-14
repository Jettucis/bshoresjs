import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Shell: ActiveSkillNode = {
    name: 'Shell',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 313,
    actionsPerHourDiscarding: 338,
    locations: ['Jellyfish Landing', 'Seashells Seashore'],
    variants: [
        {
            itemName: 'Horn Shell',
            levelRequired: 10,
            xpPerAction: 129,
            knowledgePerAction: 93,
            albumXp: 368,
            quantityPerAction: 1,
            equipment: 'Basic 0 Trowel'
        },
        {
            itemName: 'Bowl Shell',
            levelRequired: 61,
            xpPerAction: 442,
            knowledgePerAction: 86,
            albumXp: 1_389,
            quantityPerAction: 1,
            equipment: 'Moderate 1 Trowel'
        },
        {
            itemName: 'Basin Shell',
            levelRequired: 115,
            xpPerAction: 1_026,
            knowledgePerAction: 86,
            albumXp: 3_240,
            quantityPerAction: 1,
            equipment: 'Moderate 1 Trowel'
        },
        {
            itemName: 'Crown Shell',
            levelRequired: 165,
            xpPerAction: 1_834,
            knowledgePerAction: 86,
            albumXp: 5_844,
            quantityPerAction: 1,
            equipment: 'Fine 3 Trowel'
        },
        {
            itemName: 'Scallop Shell',
            levelRequired: 215,
            xpPerAction: 3_066,
            knowledgePerAction: 86,
            albumXp: 9_779,
            quantityPerAction: 1,
            equipment: 'Fine 3 Trowel'
        },
        {
            itemName: 'Trobwig Shell',
            levelRequired: 265,
            xpPerAction: 5_250,
            knowledgePerAction: 85,
            albumXp: 16_877,
            quantityPerAction: 1,
            equipment: 'Sturdy 5 Trowel'
        },
        {
            itemName: 'Cone Shell',
            levelRequired: 315,
            xpPerAction: 8_349,
            knowledgePerAction: 85,
            albumXp: 26_846,
            quantityPerAction: 1,
            equipment: 'Sturdy 5 Trowel'
        },
        {
            itemName: 'Dish Shell',
            levelRequired: 365,
            xpPerAction: 12_566,
            knowledgePerAction: 84,
            albumXp: 40_731,
            quantityPerAction: 1,
            equipment: 'Excellent 7 Trowel'
        },
        {
            itemName: 'Helmet Shell',
            levelRequired: 415,
            xpPerAction: 18_548,
            knowledgePerAction: 84,
            albumXp: 60_118,
            quantityPerAction: 1,
            equipment: 'Excellent 7 Trowel'
        },
        {
            itemName: 'Zenith Shell',
            levelRequired: 465,
            xpPerAction: 26_734,
            knowledgePerAction: 84,
            albumXp: 87_414,
            quantityPerAction: 1,
            equipment: 'Perfect 9 Trowel'
        },
    ]
}