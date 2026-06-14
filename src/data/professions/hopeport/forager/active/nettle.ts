import { ActiveSkillNode } from "../../../../../types/activeSkillNode";

export const Nettle: ActiveSkillNode = {
    name: 'Nettle',
    profession: 'forager',
    episode: 'hopeport',
    activityTimeSeconds: 4,
    respawnTimeSeconds: 60,
    nodeCount: 6,
    actionsPerHourBanking: 302,
    actionsPerHourDiscarding: 338,
    locations: ['Bone Strewn Path', 'Scruffy Scrubland'],
    variants: [
        {
            itemName: 'Ember Nettle',
            levelRequired: 66,
            xpPerAction: 464,
            knowledgePerAction: 92,
            albumXp: 1_478,
            quantityPerAction: 1,
            equipment: 'Moderate 1 Secateurs'
        },
        {
            itemName: 'White Nettle',
            levelRequired: 120,
            xpPerAction: 1_054,
            knowledgePerAction: 92,
            albumXp: 3_372,
            quantityPerAction: 1,
            equipment: 'Moderate 1 Secateurs'
        },
        {
            itemName: 'Brightblade Nettle',
            levelRequired: 170,
            xpPerAction: 1_868,
            knowledgePerAction: 91,
            albumXp: 6_030,
            quantityPerAction: 1,
            equipment: 'Fine 3 Secateurs'
        },
        {
            itemName: 'Blood Nettle',
            levelRequired: 220,
            xpPerAction: 3_110,
            knowledgePerAction: 91,
            albumXp: 10_047,
            quantityPerAction: 1,
            equipment: 'Fine 3 Secateurs'
        },
        {
            itemName: 'Heartleaf Nettle',
            levelRequired: 270,
            xpPerAction: 5_311,
            knowledgePerAction: 90,
            albumXp: 17_299,
            quantityPerAction: 1,
            equipment: 'Sturdy 5 Secateurs'
        },
        {
            itemName: 'Fine-fettle Nettle',
            levelRequired: 320,
            xpPerAction: 8_437,
            knowledgePerAction: 90,
            albumXp: 27_487,
            quantityPerAction: 1,
            equipment: 'Sturdy 5 Secateurs'
        },
        {
            itemName: 'Rusty Nettle',
            levelRequired: 370,
            xpPerAction: 12_691,
            knowledgePerAction: 90,
            albumXp: 41_695,
            quantityPerAction: 1,
            equipment: 'Excellent 7 Secateurs'
        },
        {
            itemName: 'Harshvenom Nettle',
            levelRequired: 420,
            xpPerAction: 18_740,
            knowledgePerAction: 90,
            albumXp: 61_564,
            quantityPerAction: 1,
            equipment: 'Excellent 7 Secateurs'
        },
        {
            itemName: 'Ironleaf Nettle',
            levelRequired: 470,
            xpPerAction: 27_023,
            knowledgePerAction: 89,
            albumXp: 89_585,
            quantityPerAction: 1,
            equipment: 'Perfect 9 Secateurs'
        }
    ]
}