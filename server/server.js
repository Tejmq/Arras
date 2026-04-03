module.exports = {
    version: 'v2.0.11.3',
    devBuild: false,
    main_menu: 'index.html',
    host: 'localhost:3000',
    port: 3000,
    visible_list_interval: 250,
    startup_logs: true,
    load_all_mockups: false,

    servers: [
        {
            share_client_server: false,
            host: 'localhost:3001',
            port: 3001,
            id: 'la',
            region: "Local",
            gamemode: ['tdm'],
            player_cap: 80,
            featured: false,
            unlisted: true,
            private: true,
            properties: {
                teams: 4,
                bot_cap: 40
            }
        },
        {
            share_client_server: false,
            host: 'localhost:3002',
            port: 3002,
            id: 'lb',
            region: "Local",
            gamemode: ['retrograde', 'ffa'],
            player_cap: 80,
            featured: false,
            unlisted: true,
            private: true,
            properties: {
                teams: 4,
                bot_cap: 16,
                allow_server_travel: true, // enable travel for Nexus
                server_travel_properties: {
                    loop_interval: 10_000, // loop every 10 seconds
                    portals: 1
                },
                server_travel: [
                    {
                        ip: 'localhost:3003', // destination server
                        portal_properties: {
                            spawn_chance: 3,
                            color: 'red'
                        }
                    }
                ],
                daily_tank: {
                    tank: 'whirlwind',
                    tier: 3,
                    ads: false,
                    ad_sources: [
                        { file: 'testadvideo.mp4', use_regular_ad_size: true },
                        { file: 'testadimage.png', use_regular_ad_size: true }
                    ]
                }
            }
        },
        {
            share_client_server: false,
            host: 'localhost:3003',
            port: 3003,
            id: 'lx',
            region: "Local",
            gamemode: ['nexus'],
            player_cap: 80,
            featured: false,
            unlisted: true,
            private: true,
            properties: {
                teams: 4,
                bot_cap: 0,
                allow_server_travel: true // must enable for travel to work
            }
        },
        {
            share_client_server: false,
            host: 'localhost:3099',
            port: 3099,
            id: 'lz',
            region: "Local",
            gamemode: ['sandbox'],
            player_cap: 16,
            featured: false,
            unlisted: false,
            private: false,
            properties: { }
        }
    ],

    allow_ACAO: false,
    map_tile_width: 420,
    map_tile_height: 420,
    spawn_message: "You have spawned! Welcome to the game.\nYou will be invulnerable until you move or shoot.\nPlease report any bugs you encounter!",
    token_message: "Friendly reminder: Please do not repeatedly kill others with an overpowered tank.",
    chat_message_duration: 15_000,
    popup_message_duration: 10_000,
    sanitize_chat_input: true,
    fireworks: false,
    thanksgiving: false,
    spooky_theme: false,
    game_speed: 1,
    run_speed: 1.5,
    max_heartbeat_interval: 300_000,
    respawn_delay: 0,
    bullet_spawn_offset: 1,
    damage_multiplier: 1,
    knockback_multiplier: 1.1,
    glass_health_factor: 2,
    room_bound_force: 0.01,
    soft_max_skill: 0.59,
    defineLevelSkillPoints: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45) return 1;
        return 0;
    },
    level_cap: 45,
    level_cap_cheat: 45,
    skill_cap: 9,
    tier_cap: 17,
    tier_multiplier: 15,
    bot_cap: 0,
    bot_xp_gain: 60,
    bot_start_level: 45,
    bot_skill_upgrade_chances: [1, 1, 3, 4, 4, 4, 4, 2, 1, 1],
    bot_class_upgrade_chances: [1, 5, 20, 37, 37],
    bot_name_prefix: "[AI] ",
    spawn_class: 'basic',
    regenerate_tick: 100,
    enable_food: true,
    food_cap: 70,
    food_cap_nest: 15,
    enemy_cap_nest: 10,
    food_group_cap: 6,
    food_types: Array(3).fill().map((_, i, a) => [
        4 ** (a.length - i),
        Array(3).fill().map((_, j, b) => [
            5 ** (b.length - j),
            Array(6).fill().map((_, k, c) => [
                k ? 10 ** (c.length - k - 1) : 200_000_000,
                [
                    [24, `laby_${i}_${j}_${k}_0`],
                ]
            ])
        ])
    ]),
    food_types_nest: Array(2).fill().map((_, i, a) => [
        4 ** (a.length - i),
        Array(3).fill().map((_, j, b) => [
            5 ** (b.length - j),
            Array(6).fill().map((_, k, c) => [
                k ? 10 ** (c.length - k - 1) : 200_000_000,
                [
                    [24, `laby_${i + 3}_${j}_${k}_0`],
                ]
            ])
        ])
    ]),
    classic_food: false,
    enable_bosses: true,
    boss_spawn_cooldown: 260,
    boss_spawn_delay: 6,
    boss_types: [
        { bosses: ['eliteDestroyer', 'eliteGunner'], amount: [5, 5], chance: 2, nameType: 'a' }
    ],
    room_setup: ['room_default']
};
