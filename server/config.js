module.exports = {
    // Open Source Arras
    version: 'v2.0.11.3',
    devBuild: false,

    // Client
    main_menu: 'index.html',
    host: '0.0.0.0', // Render-friendly host
    port: process.env.PORT || 3000, // Render-friendly port

    // Server
    visible_list_interval: 250,
    startup_logs: true,
    load_all_mockups: false,

    servers: [
        {
            share_client_server: false,
            host: '0.0.0.0',
            port: process.env.PORT || 3000,
            id: 'main',
            region: "Local",
            gamemode: ['ffa'],
            player_cap: 80,
            featured: false,
            unlisted: false,
            private: false,
            properties: {
                teams: 4,
                bot_cap: 40
            }
        }
    ],

    // Web Server
    allow_ACAO: false,

    // Map
    map_tile_width: 420,
    map_tile_height: 420,

    spawn_message: "You have spawned! Welcome to the game.\n" +
                   "You will be invulnerable until you move or shoot.\n" +
                   "Please report any bugs you encounter!",
    token_message: "Friendly reminder: Please do not repeatedly kill others with an overpowered tank.",
    chat_message_duration: 15_000,
    popup_message_duration: 10_000,
    sanitize_chat_input: true,

    // Seasonal
    fireworks: false,
    thanksgiving: false,
    spooky_theme: false,

    // Gameplay
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
    bot_skill_upgrade_chances: [1,1,3,4,4,4,4,2,1,1],
    bot_class_upgrade_chances: [1,5,20,37,37],
    bot_name_prefix: "[AI] ",
    spawn_class: 'basic',
    regenerate_tick: 100,

    enable_food: true,
    food_cap: 70,
    food_cap_nest: 15,
    enemy_cap_nest: 10,
    food_group_cap: 6,

    // Keep your old food configuration
    food_types: Array(3).fill().map((_, i, a) => [
        4 ** (a.length - i),
        Array(3).fill().map((_, j, b) => [
            5 ** (b.length - j),
            Array(6).fill().map((_, k, c) => [
                k ? 10 ** (c.length - k - 1) : 200_000_000,
                [
                    [24, `laby_${i}_${j}_${k}_0`]
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
                    [24, `laby_${i+3}_${j}_${k}_0`]
                ]
            ])
        ])
    ]),

    classic_food: false,
    classic_food_types: [
        [1, [[65, 'egg'], [64, 'triangle'], [45, 'square'], [7, 'pentagon']]],
        [1/50000, [[625,'gem'],[125,'shinyTriangle'],[25,'shinySquare'],[5,'shinyPentagon']]],
        [1/1000000, [[1296,'jewel'],[216,'legendaryTriangle'],[36,'legendarySquare'],[6,'legendaryPentagon']]]
    ],
    classic_food_types_nest: [[1, [[16,'pentagon'],[4,'betaPentagon'],[1,'alphaPentagon']]]],
    classic_enemy_types_nest: [[1, [[1,'crasher']]], [1/20, [[1,'sentryGun'],[1,'sentrySwarm'],[1,'sentryTrap']]]],

    enable_bosses: true,
    boss_spawn_cooldown: 260,
    boss_spawn_delay: 6,
    boss_types: [
        { bosses: ['eliteDestroyer','eliteGunner','eliteSprayer','eliteBattleship','eliteSpawner'], amount:[5,5,4,2,1], chance:2, nameType:'a' },
        { bosses: ['roguePalisade'], amount:[4,1], chance:1, nameType:'castle', message:'A strange trembling...' },
        { bosses: ['summoner','eliteSkimmer','nestKeeper'], amount:[2,2,1], chance:1, nameType:'a', message:'A strange trembling...' }
    ],

    team_weights: {},
    brain_damage: false,
    random_body_colors: false,

    gamemode_name_prefixes: [],
    arena_shape: 'rect',
    arms_race: false,
    blackout: false,
    clan_wars: false,
    diep: false,
    domination: false,
    growth: false,
    groups: false,
    march_madness: false,
    mode: 'ffa',
    mothership: false,
    retrograde: false,
    siege: false,
    space_physics: false,
    spawn_confinement: {},
    tag: false,
    teams: 4,
    train: false,
    use_limited_waves: false,

    room_setup: ['room_default'],
};
