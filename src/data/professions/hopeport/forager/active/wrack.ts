import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Wrack: ActiveSkillNode = {
    name: 'Wrack',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 389,
    actionsPerHourDiscarding: 450,
    locations: ['Hideout Storage Area', 'Island Hideout'],
    variants: [
        {
            itemName: 'Knotted Wrack',
            levelRequired: 69,
            xpPerAction: 454,
            knowledgePerAction: 81,
            albumXp: 1_531,
            quantityPerAction: 1
        },
        {
            itemName: 'Bladder Wrack',
            levelRequired: 122,
            xpPerAction: 1_012,
            knowledgePerAction: 81,
            albumXp: 3_425,
            quantityPerAction: 1
        },
        {
            itemName: 'Spark Wrack',
            levelRequired: 172,
            xpPerAction: 1_801,
            knowledgePerAction: 81,
            albumXp: 6_105,
            quantityPerAction: 1
        },
        {
            itemName: 'Spiral Wrack',
            levelRequired: 222,
            xpPerAction: 2_993,
            knowledgePerAction: 81,
            albumXp: 10_155,
            quantityPerAction: 1
        },
        {
            itemName: 'Brain Wrack',
            levelRequired: 272,
            xpPerAction: 5_146,
            knowledgePerAction: 81,
            albumXp: 17_469,
            quantityPerAction: 1
        },
        {
            itemName: 'Traynt Wrack',
            levelRequired: 322,
            xpPerAction: 8_172,
            knowledgePerAction: 81,
            albumXp: 27_748,
            quantityPerAction: 1
        },
        {
            itemName: 'Channeled Wrack',
            levelRequired: 372,
            xpPerAction: 12_394,
            knowledgePerAction: 81,
            albumXp: 42_087,
            quantityPerAction: 1
        },
        {
            itemName: 'Muscle Wrack',
            levelRequired: 422,
            xpPerAction: 18_305,
            knowledgePerAction: 81,
            albumXp: 62_153,
            quantityPerAction: 1
        },
        {
            itemName: 'Mighty Wrack',
            levelRequired: 472,
            xpPerAction: 26_649,
            knowledgePerAction: 81,
            albumXp: 90_470,
            quantityPerAction: 1
        }
    ]
}