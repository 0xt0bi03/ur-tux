const distros = {

    "Linux Mint": {
        name: "Linux Mint",
        packageManager: "APT",
        base: "Ubuntu LTS",
        release: "Fixed",
        difficulty: "Beginner",
        desktop: ["Cinnamon", "MATE", "XFCE"],
        windowManager: [],
        website: "https://linuxmint.com/",
        bestFor: [
            "Beginners",
            "Daily Use",
            "Students",
            "Office Work"
        ],
        pros: [
            "Easy to use",
            "Excellent hardware support",
            "Stable",
            "Windows-like interface"
        ],
        cons: [
            "Software can be older",
            "Less customizable than Arch"
        ],
        description:
            "Linux Mint is one of the best beginner-friendly Linux distributions. It provides a polished desktop experience with excellent stability and ease of use."
    },

    "Ubuntu": {
        name: "Ubuntu",
        packageManager: "APT",
        base: "Debian",
        release: "LTS / Regular",
        difficulty: "Beginner",
        desktop: ["GNOME"],
        windowManager: [],
        website: "https://ubuntu.com/",
        bestFor: [
            "Beginners",
            "Developers",
            "Workstations",
            "Servers"
        ],
        pros: [
            "Huge community",
            "Excellent documentation",
            "Stable",
            "Widely supported"
        ],
        cons: [
            "Snap packages",
            "Heavier than some alternatives"
        ],
        description:
            "Ubuntu is the world's most popular Linux distribution with outstanding community support and software availability."
    },

    "Fedora": {
        name: "Fedora Workstation",
        packageManager: "DNF",
        base: "Independent",
        release: "Regular",
        difficulty: "Intermediate",
        desktop: ["GNOME", "KDE Plasma"],
        windowManager: ["Sway", "i3"],
        website: "https://fedoraproject.org/",
        bestFor: [
            "Developers",
            "Programmers",
            "Latest Technologies"
        ],
        pros: [
            "Latest software",
            "Excellent developer tools",
            "Reliable"
        ],
        cons: [
            "Frequent updates",
            "Short support cycle"
        ],
        description:
            "Fedora provides modern software while maintaining excellent stability, making it a favorite among developers."
    },

    "Debian": {
        name: "Debian",
        packageManager: "APT",
        base: "Independent",
        release: "Stable",
        difficulty: "Intermediate",
        desktop: [
            "GNOME",
            "KDE Plasma",
            "XFCE",
            "LXQt"
        ],
        windowManager: [
            "i3"
        ],
        website: "https://www.debian.org/",
        bestFor: [
            "Servers",
            "Reliability",
            "Advanced Users"
        ],
        pros: [
            "Extremely stable",
            "Huge repositories",
            "Reliable"
        ],
        cons: [
            "Older packages",
            "Installation can be less beginner-friendly"
        ],
        description:
            "Debian focuses on stability and reliability, making it one of the most trusted Linux distributions."
    },

    "Pop!_OS": {
        name: "Pop!_OS",
        packageManager: "APT",
        base: "Ubuntu",
        release: "Regular",
        difficulty: "Beginner",
        desktop: [
            "COSMIC",
            "GNOME"
        ],
        windowManager: [],
        website: "https://pop.system76.com/",
        bestFor: [
            "Gaming",
            "Developers",
            "Creators"
        ],
        pros: [
            "Excellent NVIDIA support",
            "Great workflow",
            "Easy installation"
        ],
        cons: [
            "Limited desktop choices"
        ],
        description:
            "Pop!_OS is designed for productivity and gaming, with excellent hardware support and a polished interface."
    },

    "Zorin OS": {
        name: "Zorin OS",
        packageManager: "APT",
        base: "Ubuntu",
        release: "LTS",
        difficulty: "Beginner",
        desktop: [
            "GNOME"
        ],
        windowManager: [],
        website: "https://zorin.com/os/",
        bestFor: [
            "Windows Switchers",
            "Office",
            "Students"
        ],
        pros: [
            "Beautiful interface",
            "Easy transition from Windows",
            "Stable"
        ],
        cons: [
            "Some features require Pro edition"
        ],
        description:
            "Zorin OS is designed specifically to help Windows users transition to Linux with minimal learning curve."
    },

    "Arch Linux": {
        name: "Arch Linux",
        packageManager: "Pacman",
        base: "Independent",
        release: "Rolling",
        difficulty: "Advanced",
        desktop: [
            "GNOME",
            "KDE Plasma",
            "XFCE"
        ],
        windowManager: [
            "Hyprland",
            "i3",
            "Sway",
            "AwesomeWM",
            "bspwm"
        ],
        website: "https://archlinux.org/",
        bestFor: [
            "Power Users",
            "Customization",
            "Learning Linux"
        ],
        pros: [
            "Latest software",
            "AUR",
            "Highly customizable",
            "Excellent documentation"
        ],
        cons: [
            "Manual installation",
            "Requires Linux knowledge"
        ],
        description:
            "Arch Linux follows the KISS principle and provides complete control over your system."
    },

    "EndeavourOS": {
        name: "EndeavourOS",
        packageManager: "Pacman",
        base: "Arch Linux",
        release: "Rolling",
        difficulty: "Intermediate",
        desktop: [
            "XFCE",
            "GNOME",
            "KDE Plasma"
        ],
        windowManager: [
            "Hyprland",
            "i3",
            "Sway",
            "Qtile"
        ],
        website: "https://endeavouros.com/",
        bestFor: [
            "Arch Beginners",
            "Developers",
            "Customization"
        ],
        pros: [
            "Easy Arch installation",
            "Rolling release",
            "AUR support"
        ],
        cons: [
            "Occasional maintenance required"
        ],
        description:
            "EndeavourOS offers the Arch Linux experience with a much easier installation process."
    },

    "Manjaro": {
        name: "Manjaro",
        packageManager: "Pacman",
        base: "Arch Linux",
        release: "Rolling",
        difficulty: "Beginner",
        desktop: [
            "KDE Plasma",
            "GNOME",
            "XFCE"
        ],
        windowManager: [],
        website: "https://manjaro.org/",
        bestFor: [
            "Desktop Users",
            "Gaming"
        ],
        pros: [
            "Easy installation",
            "Arch ecosystem",
            "Good hardware detection"
        ],
        cons: [
            "Updates are delayed compared to Arch"
        ],
        description:
            "Manjaro simplifies the Arch experience while maintaining access to its software ecosystem."
    },

    "openSUSE Tumbleweed": {
        name: "openSUSE Tumbleweed",
        packageManager: "Zypper",
        base: "Independent",
        release: "Rolling",
        difficulty: "Intermediate",
        desktop: [
            "KDE Plasma",
            "GNOME"
        ],
        windowManager: [
            "i3",
            "Sway"
        ],
        website: "https://get.opensuse.org/tumbleweed/",
        bestFor: [
            "Developers",
            "Rolling Release Users"
        ],
        pros: [
            "Extensively tested rolling updates",
            "Powerful YaST tool"
        ],
        cons: [
            "Smaller community than Ubuntu"
        ],
        description:
            "Tumbleweed delivers the latest Linux software while emphasizing reliability through automated testing."
    },

    "NixOS": {
        name: "NixOS",
        packageManager: "Nix",
        base: "Independent",
        release: "Rolling",
        difficulty: "Advanced",
        desktop: [
            "GNOME",
            "KDE Plasma"
        ],
        windowManager: [
            "Hyprland",
            "i3"
        ],
        website: "https://nixos.org/",
        bestFor: [
            "Developers",
            "Reproducible Systems",
            "Power Users"
        ],
        pros: [
            "Declarative configuration",
            "Rollback support",
            "Reproducible environments"
        ],
        cons: [
            "Steep learning curve"
        ],
        description:
            "NixOS uses a unique declarative configuration model that makes systems reproducible and easy to roll back."
    },

    "Gentoo": {
        name: "Gentoo",
        packageManager: "Portage",
        base: "Independent",
        release: "Rolling",
        difficulty: "Expert",
        desktop: [
            "Any"
        ],
        windowManager: [
            "Any"
        ],
        website: "https://www.gentoo.org/",
        bestFor: [
            "Experts",
            "Customization",
            "Performance"
        ],
        pros: [
            "Maximum customization",
            "Optimized builds",
            "Excellent documentation"
        ],
        cons: [
            "Very long installation",
            "Compilation takes time"
        ],
        description:
            "Gentoo is designed for users who want complete control over every aspect of their Linux system."
    }

};

