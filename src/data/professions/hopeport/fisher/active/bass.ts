import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Bass: ActiveSkillNode = {
    name: 'Bass',
    profession: 'fisher',
    episode: 'hopeport',
    activityTimeSeconds: 5.6,
    activityTimeCoopSeconds: 6.8,
    respawnTimeSeconds: 40,
    nodeCount: 3, // 4 if forager level 125 and stage 5 monument completed
    actionsPerHourBanking: 240, // 320 if forager level 125 and stage 5 monument completed
    actionsPerHourDiscarding: 270, // 360 if forager level 125 and stage 5 monument completed
    locations: ['Seashells Seashore'],
    variants: [
        {
            itemName: 'Placid Bass',
            levelRequired: 12,
            xpPerAction: 145,
            xpPerCoopAction: 178,
            knowledgePerAction: 101,
            knowledgePerCoopAction: 123,
            albumXp: 392,
            quantityPerAction: 1,
            equipment: 'Basic 0 Cast Net'
        },
        {
            itemName: 'Striped Bass',
            levelRequired: 61,
            xpPerAction: 443,
            xpPerCoopAction: 542,
            knowledgePerAction: 92,
            knowledgePerCoopAction: 113,
            albumXp: 1_389,
            quantityPerAction: 1,
            equipment: 'Moderate 1 Cast Net'
        },
        {
            itemName: 'Emerald Bass',
            levelRequired: 115,
            xpPerAction: 1_024,
            xpPerCoopAction: 1_251,
            knowledgePerAction: 92,
            knowledgePerCoopAction: 113,
            albumXp: 3_240,
            quantityPerAction: 1,
            equipment: 'Moderate 1 Cast Net'
        },
        {
            itemName: 'Dropthe Bass',
            levelRequired: 165,
            xpPerAction: 1_826,
            xpPerCoopAction: 2_231,
            knowledgePerAction: 91,
            knowledgePerCoopAction: 112,
            albumXp: 5_844,
            quantityPerAction: 1,
            equipment: 'Fine 3 Cast Net'
        },
        {
            itemName: 'Rock Bass',
            levelRequired: 215,
            xpPerAction: 3_050,
            xpPerCoopAction: 3_727,
            knowledgePerAction: 91,
            knowledgePerCoopAction: 112,
            albumXp: 9_779,
            quantityPerAction: 1,
            equipment: 'Fine 3 Cast Net'
        },
        {
            itemName: 'Smallmouth Bass',
            levelRequired: 265,
            xpPerAction: 5_215,
            xpPerCoopAction: 6_374,
            knowledgePerAction: 91,
            knowledgePerCoopAction: 112,
            albumXp: 16_877,
            quantityPerAction: 1,
            equipment: 'Sturdy 5 Cast Net'
        },
        {
            itemName: 'Giant Bass',
            levelRequired: 315,
            xpPerAction: 8_291,
            xpPerCoopAction: 10_134,
            knowledgePerAction: 91,
            knowledgePerCoopAction: 112,
            albumXp: 26_846,
            quantityPerAction: 1,
            equipment: 'Sturdy 5 Cast Net'
        },
        {
            itemName: 'Spotted Bass',
            levelRequired: 365,
            xpPerAction: 12_461,
            xpPerCoopAction: 15_230,
            knowledgePerAction: 90,
            knowledgePerCoopAction: 110,
            albumXp: 40_731,
            quantityPerAction: 1,
            equipment: 'Excellent 7 Cast Net'
        },
        {
            itemName: 'Jumbo Bass',
            levelRequired: 415,
            xpPerAction: 18_396,
            xpPerCoopAction: 22_484,
            knowledgePerAction: 90,
            knowledgePerCoopAction: 110,
            albumXp: 60_118,
            quantityPerAction: 1,
            equipment: 'Excellent 7 Cast Net'
        },
        {
            itemName: 'Tsunami Bass',
            levelRequired: 465,
            xpPerAction: 26_491,
            xpPerCoopAction: 32_378,
            knowledgePerAction: 89,
            knowledgePerCoopAction: 108,
            albumXp: 87_414,
            quantityPerAction: 1,
            equipment: 'Perfect 9 Cast Net'
        },
    ]
}