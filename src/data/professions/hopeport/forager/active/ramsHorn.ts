import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const RamsHorn: ActiveSkillNode = {
    name: 'Rams Horn',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 8,
    actionsPerHourBanking: 389,
    actionsPerHourDiscarding: 450,
    locations: ['Bone Strewn Path', 'Scruffy Shoreline'],
    variants: [
        {
            itemName: 'Yellowing Rams Horn',
            levelRequired: 46,
            xpPerAction: 218,
            knowledgePerAction: 79,
            albumXp: 804,
            quantityPerAction: 1,
            itemsRequired: ['Basic 0 Trowel']
        },
        {
            itemName: 'Mottled Rams Horn',
            levelRequired: 97,
            xpPerAction: 509,
            knowledgePerAction: 74,
            albumXp: 2_044,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Sturdy Rams Horn',
            levelRequired: 147,
            xpPerAction: 1_021,
            knowledgePerAction: 74,
            albumXp: 4_109,
            quantityPerAction: 1,
            itemsRequired: ['Moderate 1 Trowel']
        },
        {
            itemName: 'Chunky Rams Horn',
            levelRequired: 197,
            xpPerAction: 1_747,
            knowledgePerAction: 74,
            albumXp: 7_079,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Pristine Rams Horn',
            levelRequired: 247,
            xpPerAction: 2_853,
            knowledgePerAction: 74,
            albumXp: 11_566,
            quantityPerAction: 1,
            itemsRequired: ['Fine 3 Trowel']
        },
        {
            itemName: 'Twisted Rams Horn',
            levelRequired: 297,
            xpPerAction: 4_831,
            knowledgePerAction: 73,
            albumXp: 19_716,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Darkstreak Rams Horn',
            levelRequired: 347,
            xpPerAction: 7_644,
            knowledgePerAction: 73,
            albumXp: 31_202,
            quantityPerAction: 1,
            itemsRequired: ['Sturdy 5 Trowel']
        },
        {
            itemName: 'Immaculate Rams Horn',
            levelRequired: 397,
            xpPerAction: 11_518,
            knowledgePerAction: 73,
            albumXp: 47_327,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Pitted Rams Horn',
            levelRequired: 447,
            xpPerAction: 17_056,
            knowledgePerAction: 73,
            albumXp: 70_074,
            quantityPerAction: 1,
            itemsRequired: ['Excellent 7 Trowel']
        },
        {
            itemName: 'Redflank Rams Horn',
            levelRequired: 497,
            xpPerAction: 24_756,
            knowledgePerAction: 72,
            albumXp: 102_443,
            quantityPerAction: 1,
            itemsRequired: ['Perfect 9 Trowel']
        },
    ]
}