/*
===========================================================
YOUR TUX
scoring.js
===========================================================
*/

/*
    Each answer ID contributes points to one or more
    Linux distributions.

    Format:

    answerID : {
        "Distribution Name": points
    }
*/

const scoring = {

    // =====================================================
    // Linux Experience
    // =====================================================

    beginner: {
        "Linux Mint": 5,
        "Ubuntu": 5,
        "Zorin OS": 5,
        "Pop!_OS": 4,
        "Manjaro": 2
    },

    casual: {
        "Linux Mint": 3,
        "Ubuntu": 3,
        "Fedora": 3,
        "Pop!_OS": 3,
        "EndeavourOS": 2
    },

    intermediate: {
        "Fedora": 4,
        "Debian": 4,
        "EndeavourOS": 4,
        "Arch Linux": 3,
        "openSUSE Tumbleweed": 3
    },

    advanced: {
        "Arch Linux": 6,
        "Gentoo": 6,
        "NixOS": 5,
        "EndeavourOS": 4
    },

    // =====================================================
    // Purpose
    // =====================================================

    performance: {
        "Linux Mint": 3,
        "Zorin OS": 2,
        "Fedora": 2
    },

    privacy: {
        "Debian": 5,
        "Fedora": 4,
        "NixOS": 3
    },

    development: {
        "Fedora": 5,
        "Ubuntu": 4,
        "Arch Linux": 4,
        "NixOS": 3
    },

    control: {
        "Arch Linux": 6,
        "Gentoo": 6,
        "NixOS": 5
    },

    // =====================================================
    // Main Usage
    // =====================================================

    daily: {
        "Linux Mint": 5,
        "Ubuntu": 5,
        "Zorin OS": 4
    },

    programming: {
        "Fedora": 5,
        "Arch Linux": 4,
        "Ubuntu": 4,
        "NixOS": 4
    },

    gaming: {
        "Pop!_OS": 5,
        "Manjaro": 4,
        "Fedora": 3,
        "Arch Linux": 3
    },

    professional: {
        "Fedora": 5,
        "Ubuntu": 4,
        "Debian": 4
    },

    // =====================================================
    // Configuration Preference
    // =====================================================

    none: {
        "Linux Mint": 4,
        "Ubuntu": 4,
        "Zorin OS": 4,
        "Pop!_OS": 3
    },

    little: {
        "Linux Mint": 2,
        "Fedora": 2,
        "Ubuntu": 2
    },

    hours: {
        "Fedora": 3,
        "EndeavourOS": 3,
        "Debian": 3
    },

    love_config: {
        "Arch Linux": 6,
        "Gentoo": 6,
        "NixOS": 5
    },

    works: {
        "Linux Mint": 5,
        "Ubuntu": 5,
        "Pop!_OS": 4
    },

    customize: {
        "Fedora": 3,
        "Manjaro": 3,
        "Arch Linux": 4
    },

    learn: {
        "Debian": 4,
        "Arch Linux": 4,
        "Fedora": 4
    },

    full_control: {
        "Arch Linux": 6,
        "Gentoo": 6,
        "NixOS": 5
    },

    // =====================================================
    // Stability
    // =====================================================

    very_stable: {
        "Debian": 6,
        "Ubuntu": 5,
        "Linux Mint": 5
    },

    stable: {
        "Ubuntu": 4,
        "Fedora": 3,
        "Linux Mint": 4
    },

    balanced: {
        "Fedora": 5,
        "openSUSE Tumbleweed": 4
    },

    latest: {
        "Arch Linux": 6,
        "Gentoo": 5,
        "NixOS": 4
    },

    // =====================================================
    // Release Model
    // =====================================================

    fixed: {
        "Debian": 5,
        "Ubuntu": 5
    },

    regular: {
        "Fedora": 4,
        "Ubuntu": 3
    },

    lts: {
        "Linux Mint": 5,
        "Ubuntu": 5,
        "Zorin OS": 5
    },

    rolling: {
        "Arch Linux": 6,
        "EndeavourOS": 5,
        "Manjaro": 4,
        "openSUSE Tumbleweed": 5,
        "NixOS": 4,
        "Gentoo": 5
    },

    // =====================================================
    // Hardware
    // =====================================================

    old: {
        "Debian": 4,
        "Linux Mint": 3
    },

    mid: {
        "Ubuntu": 3,
        "Fedora": 3,
        "Linux Mint": 3
    },

    high: {
        "Fedora": 4,
        "Arch Linux": 4
    },

    newest: {
        "Fedora": 5,
        "Arch Linux": 5,
        "EndeavourOS": 4
    },

    // =====================================================
    // RAM
    // =====================================================

    "2gb": {
        "Debian": 4
    },

    "4gb": {
        "Linux Mint": 4,
        "Zorin OS": 3
    },

    "8gb": {
        "Ubuntu": 3,
        "Fedora": 3
    },

    "16gb": {
        "Arch Linux": 3,
        "NixOS": 3,
        "Gentoo": 3
    },

    // =====================================================
    // Gaming
    // =====================================================

    primary: {
        "Pop!_OS": 6,
        "Manjaro": 5,
        "Fedora": 4
    },

    often: {
        "Pop!_OS": 4,
        "Fedora": 3,
        "Manjaro": 3
    },

    // =====================================================
    // Privacy
    // =====================================================

    low: {},

    medium: {
        "Fedora": 2
    },

    high: {
        "Debian": 3,
        "Fedora": 3
    },

    maximum: {
        "Debian": 5,
        "NixOS": 4
    },

    // =====================================================
    // Terminal Usage
    // =====================================================

    never: {
        "Linux Mint": 3,
        "Zorin OS": 3
    },

    sometimes: {
        "Ubuntu": 2,
        "Fedora": 2
    },

    always: {
        "Arch Linux": 5,
        "Gentoo": 5,
        "NixOS": 4
    },

    // =====================================================
    // Customization
    // =====================================================

    minimal: {
        "Linux Mint": 3,
        "Ubuntu": 3
    },

    medium: {
        "Fedora": 2,
        "Pop!_OS": 2
    },

    high: {
        "Arch Linux": 5,
        "EndeavourOS": 4,
        "Manjaro": 4
    },

    everything: {
        "Arch Linux": 6,
        "Gentoo": 6,
        "NixOS": 5
    },

    // =====================================================
    // Desktop Preference
    // =====================================================

    modern: {
        "Fedora": 3,
        "Ubuntu": 3
    },

    traditional: {
        "Linux Mint": 4,
        "Debian": 3
    },

    lightweight: {
        "Debian": 3,
        "Linux Mint": 2
    },

    tiling: {
        "Arch Linux": 5,
        "EndeavourOS": 4,
        "NixOS": 3
    },

    // =====================================================
    // Personality
    // =====================================================

    simple: {
        "Linux Mint": 5,
        "Ubuntu": 4
    },

    explore: {
        "Fedora": 3,
        "Manjaro": 3
    },

    learn_more: {
        "Arch Linux": 4,
        "Debian": 4
    },

    experiment: {
        "Gentoo": 6,
        "Arch Linux": 5,
        "NixOS": 5
    },

    // =====================================================
    // Troubleshooting
    // =====================================================

    hate: {
        "Linux Mint": 3,
        "Ubuntu": 3
    },

    search: {
        "Fedora": 2,
        "Debian": 2
    },

    fix: {
        "Arch Linux": 4,
        "Gentoo": 4
    },

    easy_fix: {
        "Arch Linux": 5,
        "Gentoo": 5,
        "NixOS": 4
    }

};

/*
===========================================================
Desktop Environment Recommendation
===========================================================
*/

const desktopRecommendations = {

    beginner: "Cinnamon",
    casual: "GNOME",
    intermediate: "KDE Plasma",
    advanced: "Hyprland",

    works: "Cinnamon",
    customize: "KDE Plasma",
    lightweight: "XFCE",
    tiling: "Hyprland",

    gaming: "KDE Plasma",

    programming: "GNOME",

    modern: "GNOME",

    traditional: "Cinnamon",

    minimal: "XFCE",

    full_control: "Hyprland",

    everything: "Hyprland"
};
