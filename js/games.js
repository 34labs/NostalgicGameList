const gamesDB = [
    // --- MAIN GAMES (IDs 1-14) ---
    {
        id: 1,
        title: "Cat Quest",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/asDUOd5IZH0/hqdefault.jpg",
        trailer: "asDUOd5IZH0",
        description: "Real-time open world RPG. Play as a dragon cat!",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.thegentlebros.catquest" },
            { name: "iOS", url: "https://apps.apple.com/us/app/cat-quest/id1148385289" }
        ],
        rating: 5
    },
    {
        id: 2,
        title: "Vampire's Fall Origins",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/uQ4oCV0mCek/hqdefault.jpg",
        trailer: "uQ4oCV0mCek",
        description: "Classic turn-based RPG with a dark atmosphere.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.earlymorningstudio.vampiresfall2" },
            { name: "iOS", url: "https://apps.apple.com/us/app/vampires-fall-origins-rpg/id1345626129" }
        ],
        rating: 4
    },
    {
        id: 3,
        title: "The Shadow Sun",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/LyfmC_E_dLk/hqdefault.jpg",
        trailer: "LyfmC_E_dLk",
        description: "Epic 3D RPG set in a dangerous fantasy world.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.ossianstudios.theshadowsun" },
            { name: "iOS", url: "https://apps.apple.com/us/app/the-shadow-sun/id396269166" }
        ],
        rating: 5
    },
    {
        id: 4,
        title: "Earth & Legends",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/dhSlGm0QZZo/hqdefault.jpg",
        trailer: "dhSlGm0QZZo",
        description: "3D Fantasy RPG with real-time day/night cycles.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.dvidearts.earthandlegend" },
            { name: "iOS", url: "https://apps.apple.com/us/app/earth-and-legend/id462371700" }
        ],
        rating: 4
    },
    {
        id: 5,
        title: "Exiled Kingdoms",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/pGlfQMY1Y3w/hqdefault.jpg",
        trailer: "pGlfQMY1Y3w",
        description: "Old school isometric RPG. Very addictive!",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=net.fdgames.ek.android" },
            { name: "iOS", url: "https://apps.apple.com/my/app/exiled-kingdoms-rpg/id1091313127" }
        ],
        rating: 5
    },
    {
        id: 6,
        title: "Beast Quest",
        category: "action",
        tab: "main",
        image: "https://img.youtube.com/vi/R71amTv7P2c/hqdefault.jpg",
        trailer: "R71amTv7P2c",
        description: "Open-world action RPG. Hunt dangerous beasts!",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.animocabrands.global.beastquest" },
            { name: "iOS", url: "https://apps.apple.com/us/app/beast-quest/id1355573467" }
        ],
        rating: 4
    },
    {
        id: 7,
        title: "Portal Knights",
        category: "adventure",
        tab: "main",
        image: "https://img.youtube.com/vi/7hIoOdK5RVs/hqdefault.jpg",
        trailer: "7hIoOdK5RVs",
        description: "Sandbox action RPG. Craft, build, fight!",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.keengames.portalknights" },
            { name: "iOS", url: "https://apps.apple.com/us/app/portal-knights/id1246254967" }
        ],
        rating: 4
    },
    {
        id: 8,
        title: "9th Dawn II",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/myoTTuS6JLU/hqdefault.jpg",
        trailer: "myoTTuS6JLU",
        description: "Huge open world RPG with retro graphics.",
        platforms: [
            { name: "Android (Demo)", url: "https://play.google.com/store/apps/details?id=com.valorware.ninthdawnii" },
            { name: "Android (Full)", url: "https://play.google.com/store/apps/details?id=com.valorware.ninthdawniifull" },
            { name: "iOS", url: "https://apps.apple.com/us/app/9th-dawn-ii/id1076717689" }
        ],
        rating: 4
    },
    {
        id: 9,
        title: "Angel Sword",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/6VHS_jiJcuo/hqdefault.jpg",
        trailer: "6VHS_jiJcuo",
        description: "3D Action RPG with customizable weapons.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.dvidearts.angelsword" },
            { name: "iOS", url: "https://apps.apple.com/us/app/angel-sword-3d-rpg/id996347110" }
        ],
        rating: 4
    },
    {
        id: 10,
        title: "Evocreo",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/BASw7bLZURo/hqdefault.jpg",
        trailer: "BASw7bLZURo",
        description: "Pokemon-like monster catching RPG.",
        platforms: [
            { name: "Android (Lite)", url: "https://play.google.com/store/apps/details?id=ilmfinity.evocreo.lite.android" },
            { name: "Android (Full)", url: "https://play.google.com/store/apps/details?id=ilmfinity.evocreo.main.android" },
            { name: "iOS", url: "https://apps.apple.com/us/app/evocreo-pocket-monster-game/id918997182" }
        ],
        rating: 5
    },
    {
        id: 11,
        title: "Ravensword Shadowlands",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/pohAYqoMefw/hqdefault.jpg",
        trailer: "pohAYqoMefw",
        description: "Skyrim-like RPG for mobile devices.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.crescentmoongames.ravensword2" },
            { name: "iOS", url: "https://apps.apple.com/us/app/ravensword-shadowlands/id566839331" }
        ],
        rating: 4
    },
    {
        id: 12,
        title: "Stardew Valley",
        category: "adventure",
        tab: "main",
        image: "https://img.youtube.com/vi/ot7uXNQskhs/hqdefault.jpg",
        trailer: "ot7uXNQskhs",
        description: "Farming simulation RPG. Very relaxing.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.chucklefish.stardewvalley" },
            { name: "iOS", url: "https://apps.apple.com/us/app/stardew-valley/id1406710800" }
        ],
        rating: 5
    },
    {
        id: 13,
        title: "Titan Quest",
        category: "action",
        tab: "main",
        image: "https://img.youtube.com/vi/8qFM8v8QZf0/hqdefault.jpg",
        trailer: "8qFM8v8QZf0",
        description: "Mythology-based Hack 'n' Slash RPG.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.dotemu.titanquest" },
            { name: "iOS", url: "https://apps.apple.com/us/app/titan-quest-legendary-edition/id1537060891" }
        ],
        rating: 4
    },
    {
        id: 14,
        title: "Aralon Forge & Flame",
        category: "rpg",
        tab: "main",
        image: "https://img.youtube.com/vi/iKWCM8OFxzw/hqdefault.jpg",
        trailer: "iKWCM8OFxzw",
        description: "Epic 3D RPG. Swords, magic, and dragons.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.crescentmoongames.aralon2" },
            { name: "iOS", url: "https://apps.apple.com/us/app/aralon-forge-and-flame/id996136866" }
        ],
        rating: 4
    },
    
    // --- WINDOWS GAMES (IDs 20-25) ---
    {
        id: 20,
        title: "Planescape: Torment",
        category: "rpg",
        tab: "windows",
        image: "https://img.youtube.com/vi/G2wXLCIpFRg/hqdefault.jpg",
        trailer: "G2wXLCIpFRg",
        description: "One of the best RPGs with a deep story and unique gameplay. Considered a masterpiece.",
        platforms: [
            { name: "Steam", url: "https://store.steampowered.com/app/466300/Planescape_Torment_Enhanced_Edition/" },
            { name: "GOG", url: "https://www.gog.com/game/planescape_torment_enhanced_edition" }
        ],
        rating: 5
    },
    {
        id: 21,
        title: "Arcanum: Of Steamworks and Magick Obscura",
        category: "rpg",
        tab: "windows",
        image: "https://img.youtube.com/vi/OWemoWxqElE/hqdefault.jpg",
        trailer: "OWemoWxqElE",
        description: "Unique RPG with a steampunk vs magic setting. Deep systems and interesting story.",
        platforms: [
            { name: "GOG", url: "https://www.gog.com/game/arcanum_of_steamworks_and_magick_obscura" }
        ],
        rating: 5
    },
    {
        id: 22,
        title: "Freespace 2",
        category: "action",
        tab: "windows",
        image: "https://img.youtube.com/vi/ufViyhrXzTE/hqdefault.jpg",
        trailer: "ufViyhrXzTE",
        description: "One of the best space simulators ever made. Graphics and gameplay still stunning.",
        platforms: [
            { name: "Steam", url: "https://store.steampowered.com/app/273620/FreeSpace_2/" },
            { name: "Free (Community)", url: "https://www.hard-light.net/forums/index.php?board=13.0" }
        ],
        rating: 5
    },
    {
        id: 23,
        title: "System Shock 2",
        category: "action",
        tab: "windows",
        image: "https://img.youtube.com/vi/a3__6BknDHc/hqdefault.jpg",
        trailer: "a3__6BknDHc",
        description: "Horror FPS/RPG that inspired many modern games. Terrific atmosphere and innovative gameplay.",
        platforms: [
            { name: "Steam", url: "https://store.steampowered.com/app/238210/System_Shock_2/" },
            { name: "GOG", url: "https://www.gog.com/game/system_shock_2" }
        ],
        rating: 5
    },
    {
        id: 24,
        title: "Temple of Elemental Evil",
        category: "rpg",
        tab: "windows",
        image: "https://img.youtube.com/vi/ZtPIgImGDHw/hqdefault.jpg",
        trailer: "ZtPIgImGDHw",
        description: "D&D based RPG with excellent tactical combat. Most accurate implementation of D&D ruleset.",
        platforms: [
            { name: "GOG", url: "https://www.gog.com/game/the_temple_of_elemental_evil" }
        ],
        rating: 4
    },
    {
        id: 25,
        title: "Vampire: The Masquerade - Bloodlines",
        category: "rpg",
        tab: "windows",
        image: "https://img.youtube.com/vi/yRNZWZ9Y0L0/hqdefault.jpg",
        trailer: "yRNZWZ9Y0L0",
        description: "RPG with an amazing vampire setting. Story and characters are very memorable.",
        platforms: [
            { name: "Steam", url: "https://store.steampowered.com/app/2600/Vampire_The_Masquerade_Bloodlines/" },
            { name: "Unofficial Patch", url: "http://www.patches-scrolls.de/vampire_bloodlines.php" }
        ],
        rating: 5
    },

    // --- ANDROID GAMES (IDs 30-35) ---
    {
        id: 30,
        title: "Caves of Lore",
        category: "rpg",
        tab: "android",
        image: "https://img.youtube.com/vi/Hs031MN5qi0/hqdefault.jpg",
        trailer: "Hs031MN5qi0",
        description: "Retro-style RPG with grid-based movement and turn-based combat. Very deep and addictive.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.cavesoflore.android" }
        ],
        rating: 5
    },
    {
        id: 31,
        title: "Quest of Dungeons",
        category: "rpg",
        tab: "android",
        image: "https://img.youtube.com/vi/2PSnXkMcnSA/hqdefault.jpg",
        trailer: "2PSnXkMcnSA",
        description: "Roguelike RPG with nice pixel art and challenging gameplay.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.uprightquest.questofdungeons" }
        ],
        rating: 4
    },
    {
        id: 32,
        title: "Battle for Wesnoth",
        category: "strategy",
        tab: "android",
        image: "https://img.youtube.com/vi/w3P39lppcH4/hqdefault.jpg",
        trailer: "w3P39lppcH4",
        description: "Open source turn-based strategy game with very long campaigns and mod support.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=org.wesnoth.wesnoth" },
            { name: "Website", url: "https://www.wesnoth.org/" }
        ],
        rating: 5
    },
    {
        id: 33,
        title: "Sword and Poker",
        category: "rpg",
        tab: "android",
        image: "https://img.youtube.com/vi/7ecbwRIh7nA/hqdefault.jpg",
        trailer: "7ecbwRIh7nA",
        description: "Unique! Combination of RPG and poker mechanics. Very addictive and original.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.gaia.swordandpoker" }
        ],
        rating: 4
    },
    {
        id: 34,
        title: "Hoplite",
        category: "strategy",
        tab: "android",
        image: "https://img.youtube.com/vi/w3FALZ38NFQ/hqdefault.jpg",
        trailer: "w3FALZ38NFQ",
        description: "Tactical roguelike with simple rules but deep strategy. Very addictive for mobile.",
        platforms: [
            { name: "Android", url: "https://play.google.com/store/apps/details?id=com.comprehensive.hoplite" }
        ],
        rating: 5
    },
    {
        id: 35,
        title: "Pixel Dungeon",
        category: "rpg",
        tab: "android",
        image: "https://img.youtube.com/vi/3IKJIKBUT78/hqdefault.jpg",
        trailer: "3IKJIKBUT78",
        description: "Classic roguelike with open source code. Many mods and variations available.",
        platforms: [
            { name: "Android (Original)", url: "https://play.google.com/store/apps/details?id=com.watabou.pixeldungeon" },
            { name: "Android (Shattered)", url: "https://play.google.com/store/apps/details?id=com.shatteredpixel.shatteredpixeldungeon" }
        ],
        rating: 5
    },

    // --- iOS GAMES (IDs 40-46) ---
    {
        id: 40,
        title: "Papers, Please",
        category: "simulation",
        tab: "ios",
        image: "https://img.youtube.com/vi/_QP5X6fcukM/hqdefault.jpg",
        trailer: "_QP5X6fcukM",
        description: "Unique game about border control with challenging moral choices. Very thought-provoking.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/papers-please/id801209038" }
        ],
        rating: 5
    },
    {
        id: 41,
        title: "Slay the Spire",
        category: "strategy",
        tab: "ios",
        image: "https://img.youtube.com/vi/9SZUtyYSOjQ/hqdefault.jpg",
        trailer: "9SZUtyYSOjQ",
        description: "Very addictive deck-building roguelike. Perfect combination of card game and RPG.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/slay-the-spire/id1375371997" }
        ],
        rating: 5
    },
    {
        id: 42,
        title: "Dead Cells",
        category: "action",
        tab: "ios",
        image: "https://img.youtube.com/vi/RvGaSPTcTxc/hqdefault.jpg",
        trailer: "RvGaSPTcTxc",
        description: "Action platformer roguelike with fluid combat and stunning visuals.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/dead-cells/id1375371997" }
        ],
        rating: 5
    },
    {
        id: 43,
        title: "Final Fantasy Tactics",
        category: "rpg",
        tab: "ios",
        image: "https://img.youtube.com/vi/wVCaeyucLTE/hqdefault.jpg",
        trailer: "wVCaeyucLTE",
        description: "One of the best tactical RPGs ever made. Story and gameplay are timeless.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/final-fantasy-tactics-war-of-the-lions/id493883847" }
        ],
        rating: 5
    },
    {
        id: 44,
        title: "Crying Suns",
        category: "strategy",
        tab: "ios",
        image: "https://img.youtube.com/vi/cmwFRlxMhW0/hqdefault.jpg",
        trailer: "cmwFRlxMhW0",
        description: "Space tactical roguelike with epic story and deep gameplay.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/crying-suns/id1456448395" }
        ],
        rating: 4
    },
    {
        id: 45,
        title: "Grand Mountain Adventure",
        category: "sports",
        tab: "ios",
        image: "https://img.youtube.com/vi/dNxdsrKQe7w/hqdefault.jpg",
        trailer: "dNxdsrKQe7w",
        description: "Skiing simulator with beautiful visuals and relaxing but challenging gameplay.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/grand-mountain-adventure/id1446123112" }
        ],
        rating: 4
    },
    {
        id: 46,
        title: "Out There",
        category: "adventure",
        tab: "ios",
        image: "https://img.youtube.com/vi/n0dtgJAvxH0/hqdefault.jpg",
        trailer: "n0dtgJAvxH0",
        description: "Space exploration game with a lonely atmosphere and heavy decision making.",
        platforms: [
            { name: "iOS", url: "https://apps.apple.com/us/app/out-there/id711687333" }
        ],
        rating: 5
    }
];