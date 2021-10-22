// Strict Mode On (엄격모드)
"use strict";
"use warning";
/**
 * @author Lazuli
 */

// CONTEXT
var RENDER1280 = true,
// Network Info ///////////////////////////////////////////////////////////
    APP_VERSION = "0.0.1",
// Key Variable ///////////////////////////////////////////////////////////
    NONE = -1,
    GNI_PORTAL = "gniportal",
    KEY_ENTER = 13,
    KEY_MENU = 36,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    
    KEY_RED = 89, // 403, BTV 관련 컬러키 값 변경 
    KEY_GREEN = 86, // 404,
    KEY_YELLOW = 85, // 405,
    KEY_BLUE = 90, // 406,
    KEY_PREV = 4, // 461,
    KEY_DELETE = 8, // 127,
    KEY_EXIT = 123, // 27
    
    KEY_CH_UP = 427,
    KEY_CH_DOWN = 428,
	KEY_PC_F4 = 115,
    KEY_PC_F6 = 117,
    KEY_PC_F7 = 118,
    KEY_PC_F8 = 119,
    KEY_PC_F9 = 120,
    KEY_PC_BLUE = 115,
    KEY_PC_PREV = 8,
    KEY_PC_DELETE = 46,
    KEY_NUM_0 = 48,
    KEY_NUM_1 = 49,
    KEY_NUM_2 = 50,
    KEY_NUM_3 = 51,
    KEY_NUM_4 = 52,
    KEY_NUM_5 = 53,
    KEY_NUM_6 = 54,
    KEY_NUM_7 = 55,
    KEY_NUM_8 = 56,
    KEY_NUM_9 = 57,
    KEY_PC_NUM_0 = 96,
    KEY_PC_NUM_1 = 97,
    KEY_PC_NUM_2 = 98,
    KEY_PC_NUM_3 = 99,
    KEY_PC_NUM_4 = 100,
    KEY_PC_NUM_5 = 105,
    KEY_PC_NUM_6 = 106,
    KEY_PC_NUM_7 = 107,
    KEY_PC_NUM_8 = 108,
    KEY_PC_NUM_9 = 109,
    /** HotKeyIndex */
    HOT_KEY_YELLOW = 0,
    HOT_KEY_BLUE = 1,
// Color Property /////////////////////////////////////////////////////////
    COLOR_WHITE = "rgb(225,225,225)",
    COLOR_RED = "rgb(255,0,0)",
    COLOR_BLACK = "rgb(0,0,0)",
    COLOR_YELLOW = "rgb(255, 255, 0)",
    COLOR_POPUPBACK = "rgba(0, 0, 0, 0.85)",
    COLOR_ALPHA = "rgba(0, 0, 0, 0.1)",
    COLOR_ALPHA2 = "rgba(0, 0, 0, 0.5)",
    COLOR_ITEM_TITLE = "rgb(229, 228, 228)",
    COLOR_ITEM_SUB = "rgb(206, 201, 201)",
    COLOR_PASSWORD = "rgb(255, 0, 0)",
    COLOR_TIP = "rgb(18, 241, 241)",
    COLOR_GRAY = "rgb(148, 148, 148)",
    COLOR_BLUE = "rgb(0, 0, 255, 0.3)",
    COLOR_RANK_1 = "rgb(248, 239, 0)",
    COLOR_RANK_2 = "rgb(82, 224, 22)",
    COLOR_RANK_3 = "rgb(0, 210, 248)",
    COLOR_PURPLE = "#641DC5",
// Game Mode Type ////////////////////////////////////////////////////////
    GAME_MODE_DEFENCE = 0,
    GAME_MODE_ARENA = 1,
	GAME_MODE_RAID = 2,
    GAME_READY = 10,
    GAME_OVER = 11,
    GAME_CLEAR = 12,
    GAME_INTRO = 99,
// Unit State /////////////////////////////////////////////////////////////
    STATE_IDLE = 0,
    STATE_ATTACK = 1,
    STATE_DEAD = 2,
    STATE_SHOT = 3,
    STATE_CRYSTAL = 4,
    
    STATE_STUN = 10,
    STATE_SLOW = 12,
// Unit Skill /////////////////////////////////////////////////////////////
    SKILL_STUN = 100,
    SKILL_DOTDAM = 101,
    SKILL_SLOW = 102,
    SKILL_SPLASH = 103,
    
    SKILL_SPLASH_STUN = 200,
    SKILL_SPLASH_DOTDAM = 201,
    SKILL_SPLASH_SLOW = 202,
// Path Variable //////////////////////////////////////////////////////////
    ROOT_RESOURCE = "resource/",
    ROOT_IFRAME = ROOT_RESOURCE + "iframe/",
    ROOT_IMG = ROOT_RESOURCE + "image/",
    ROOT_IMG_COMMON = ROOT_IMG + "common/",
    ROOT_IMG_TITLE = ROOT_IMG + "title/",
    ROOT_IMG_READY = ROOT_IMG + "ready/",
    ROOT_IMG_CARDBOOK = ROOT_IMG + "cardbook/",
    ROOT_IMG_INVENTORY = ROOT_IMG + "inventory/",
    ROOT_IMG_PLAY = ROOT_IMG + "play_v1.1/",
    ROOT_IMG_ITEM = ROOT_IMG + "item/",
    ROOT_IMG_LOADING = ROOT_IMG + "loading/",
    ROOT_IMG_POPUP = ROOT_IMG + "popup/",
    ROOT_IMG_CHARACTER = ROOT_IMG + "character/",
    ROOT_IMG_CARD = ROOT_IMG + "card/",
    ROOT_IMG_CARDPICK = ROOT_IMG + "cardpick/",
    ROOT_IMG_REWARD = ROOT_IMG + "reward/",
    ROOT_IMG_RANKING = ROOT_IMG + "ranking/",
    ROOT_IMG_TUTORIAL = ROOT_IMG + "tutorial/",
    ROOT_DATA = ROOT_RESOURCE + "data/",
    ROOT_PROP = ROOT_RESOURCE + "property/",
    ROOT_UPDATE = ROOT_RESOURCE + "update/",
    ROOT_SOUND = ROOT_RESOURCE + "sound/",
    ROOT_IMG_POP_MAILBOX = ROOT_IMG_POPUP + "mailbox/",
// Font Align /////////////////////////////////////////////////////////////
    SLEEP_DEFAULT = 250,
    SLEEP_GAME = 100,
    DEFAULT_FPS = 14,
// Font Align /////////////////////////////////////////////////////////////
    FONT_LEFT = 0,
    FONT_RIGHT = 1,
    FONT_CENTER = 0.5,
// Font Size //////////////////////////////////////////////////////////////
    FONT_12 = "bold 12",
    FONT_13 = "bold 13",
    FONT_14 = "bold 14",
    FONT_15 = "bold 15",
    FONT_16 = "bold 16",
    FONT_17 = "bold 17",
    FONT_18 = "bold 18",
    FONT_19 = "bold 19",
    FONT_20 = "bold 20",
    FONT_22 = "bold 22",
	FONT_21 = "bold 21",
    FONT_23 = "bold 23",
    FONT_24 = "bold 24",
    FONT_26 = "bold 26",
    FONT_28 = "bold 28",
    FONT_29 = "bold 29",
    FONT_30 = "bold 30",
    FONT_32 = "bold 32",
    FONT_34 = "bold 34",
    FONT_36 = "bold 36",
    FONT_40 = "bold 40",
    FONT_50 = "bold 50",
    FONT_80 = "bold 80",
// Extension Variables ////////////////////////////////////////////////////
    EXT_JPG = ".jpg",
    EXT_PNG = ".png",
    EXT_GIF = ".gif",
    EXT_MP3 = ".mp3",
    EXT_MP2 = ".mp2",
    EXT_IFRAME = EXT_JPG,
    EXT_SOUND = EXT_MP3,
    MAX_VALUE = 2147483647;

