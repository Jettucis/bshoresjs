import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Starfish: ActiveSkillNode = {
    name: 'Starfish',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 313,
    actionsPerHourDiscarding: 338,
    locations: ['Jellyfish Landing', 'Starfish Point'],
    variants: [
        {
            itemName: 'Wrinkled Starfish',
            levelRequired: 26,
            xpPerAction: 190,
            knowledgePerAction: 108,
            albumXp: 560,
            quantityPerAction: 1
        },
        {
            itemName: 'Golden Starfish',
            levelRequired: 80,
            xpPerAction: 568,
            knowledgePerAction: 108,
            albumXp: 1_730,
            quantityPerAction: 1
        },
        {
            itemName: 'Clingy Starfish',
            levelRequired: 132,
            xpPerAction: 1_210,
            knowledgePerAction: 108,
            albumXp: 3_694,
            quantityPerAction: 1
        },
        {
            itemName: 'Nebula Starfish',
            levelRequired: 182,
            xpPerAction: 2_121,
            knowledgePerAction: 108,
            albumXp: 6_487,
            quantityPerAction: 1
        },
        {
            itemName: 'Duckfoot Starfish',
            levelRequired: 232,
            xpPerAction: 3_498,
            knowledgePerAction: 108,
            albumXp: 10_705,
            quantityPerAction: 1
        },
        {
            itemName: 'Asterina Starfish',
            levelRequired: 282,
            xpPerAction: 5_990,
            knowledgePerAction: 108,
            albumXp: 18_342,
            quantityPerAction: 1
        },
        {
            itemName: 'Beaded Starfish',
            levelRequired: 332,
            xpPerAction: 9_497,
            knowledgePerAction: 108,
            albumXp: 29_084,
            quantityPerAction: 1
        },
        {
            itemName: 'Granulated Starfish',
            levelRequired: 382,
            xpPerAction: 14_402,
            knowledgePerAction: 108,
            albumXp: 44_105,
            quantityPerAction: 1
        },
        {
            itemName: 'Bloody Henry Starfish',
            levelRequired: 432,
            xpPerAction: 21_290,
            knowledgePerAction: 108,
            albumXp: 65_194,
            quantityPerAction: 1
        },
        {
            itemName: 'Firebrick Starfish',
            levelRequired: 482,
            xpPerAction: 31_046,
            knowledgePerAction: 108,
            albumXp: 95_053,
            quantityPerAction: 1
        },
    ]
}