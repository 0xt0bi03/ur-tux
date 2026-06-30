const questions = [
    {
        id: 1,
        question: "How experienced are you with Linux?",
        options: [
            { id: "beginner", text: "I've never used Linux before." },
            { id: "casual", text: "I've used Linux a little." },
            { id: "intermediate", text: "I'm comfortable using Linux." },
            { id: "advanced", text: "I enjoy configuring and troubleshooting Linux." }
        ]
    },

    {
        id: 2,
        question: "Why are you switching to Linux?",
        options: [
            { id: "performance", text: "Windows feels slow or bloated." },
            { id: "privacy", text: "I want better privacy." },
            { id: "development", text: "Programming or software development." },
            { id: "control", text: "I want complete control over my system." }
        ]
    },

    {
        id: 3,
        question: "What will you mainly use your computer for?",
        options: [
            { id: "daily", text: "Browsing, Office, Movies, Music" },
            { id: "programming", text: "Programming & Development" },
            { id: "gaming", text: "Gaming" },
            { id: "professional", text: "Professional Work (Editing, AI, CAD, Design)" }
        ]
    },

    {
        id: 4,
        question: "How much time are you willing to spend configuring your system?",
        options: [
            { id: "none", text: "None. I want everything ready." },
            { id: "little", text: "A little." },
            { id: "hours", text: "A few hours is okay." },
            { id: "love_config", text: "I enjoy configuring everything myself." }
        ]
    },

    {
        id: 5,
        question: "Which statement best describes you?",
        options: [
            { id: "works", text: "I prefer things to just work." },
            { id: "customize", text: "I like some customization." },
            { id: "learn", text: "I like learning how Linux works." },
            { id: "full_control", text: "I want complete freedom over every component." }
        ]
    },

    {
        id: 6,
        question: "How important is software stability?",
        options: [
            { id: "very_stable", text: "Extremely important." },
            { id: "stable", text: "Important." },
            { id: "balanced", text: "Balanced with newer software." },
            { id: "latest", text: "I'd rather have the newest software." }
        ]
    },

    {
        id: 7,
        question: "Which release model do you prefer?",
        options: [
            { id: "fixed", text: "Stable releases every few years." },
            { id: "regular", text: "Regular releases every 6 months." },
            { id: "lts", text: "Long-Term Support releases." },
            { id: "rolling", text: "Rolling release." }
        ]
    },

    {
        id: 8,
        question: "What hardware are you using?",
        options: [
            { id: "old", text: "Very old computer (10+ years)." },
            { id: "mid", text: "Mid-range laptop or desktop." },
            { id: "high", text: "High-end PC." },
            { id: "newest", text: "Latest hardware that needs new drivers." }
        ]
    },

    {
        id: 9,
        question: "How much RAM does your computer have?",
        options: [
            { id: "2gb", text: "Less than 4 GB" },
            { id: "4gb", text: "4–8 GB" },
            { id: "8gb", text: "8–16 GB" },
            { id: "16gb", text: "More than 16 GB" }
        ]
    },

    {
        id: 10,
        question: "How important is gaming?",
        options: [
            { id: "none", text: "I don't play games." },
            { id: "casual", text: "Occasionally." },
            { id: "often", text: "Frequently." },
            { id: "primary", text: "Gaming is my main use." }
        ]
    },

    {
        id: 11,
        question: "How important is privacy?",
        options: [
            { id: "low", text: "Not very important." },
            { id: "medium", text: "Somewhat important." },
            { id: "high", text: "Very important." },
            { id: "maximum", text: "Maximum privacy and security." }
        ]
    },

    {
        id: 12,
        question: "How often do you use the terminal?",
        options: [
            { id: "never", text: "Never." },
            { id: "sometimes", text: "Only when necessary." },
            { id: "often", text: "Frequently." },
            { id: "always", text: "I prefer the terminal." }
        ]
    },

    {
        id: 13,
        question: "Which type of software do you mostly use?",
        options: [
            { id: "gui", text: "Mostly graphical applications." },
            { id: "mixed", text: "A mix of GUI and terminal." },
            { id: "terminal", text: "Mostly terminal applications." },
            { id: "server", text: "Servers, Containers, Virtualization." }
        ]
    },

    {
        id: 14,
        question: "How often are you willing to update your system?",
        options: [
            { id: "rarely", text: "Rarely." },
            { id: "months", text: "Every few months." },
            { id: "weeks", text: "Every few weeks." },
            { id: "daily", text: "Whenever updates are available." }
        ]
    },

    {
        id: 15,
        question: "What matters most in a Linux distribution?",
        options: [
            { id: "easy", text: "Ease of use." },
            { id: "reliable", text: "Reliability." },
            { id: "fast", text: "Performance." },
            { id: "custom", text: "Customization." }
        ]
    },

    {
        id: 16,
        question: "How much customization do you want?",
        options: [
            { id: "minimal", text: "Very little." },
            { id: "medium", text: "Some themes and settings." },
            { id: "high", text: "Lots of customization." },
            { id: "everything", text: "Complete control over everything." }
        ]
    },

    {
        id: 17,
        question: "Which desktop style appeals to you the most?",
        options: [
            { id: "modern", text: "Modern and polished." },
            { id: "traditional", text: "Traditional desktop." },
            { id: "lightweight", text: "Lightweight and fast." },
            { id: "tiling", text: "Keyboard-driven tiling workflow." }
        ]
    },

    {
        id: 18,
        question: "How important is community support?",
        options: [
            { id: "critical", text: "Extremely important." },
            { id: "important", text: "Fairly important." },
            { id: "okay", text: "Somewhat important." },
            { id: "independent", text: "I don't mind figuring things out myself." }
        ]
    },

    {
        id: 19,
        question: "Which best describes your personality as a computer user?",
        options: [
            { id: "simple", text: "I just want to get work done." },
            { id: "explore", text: "I like trying new software." },
            { id: "learn_more", text: "I enjoy learning how computers work." },
            { id: "experiment", text: "I love experimenting and tweaking everything." }
        ]
    },

    {
        id: 20,
        question: "If an update breaks something...",
        options: [
            { id: "hate", text: "I'd be very frustrated." },
            { id: "search", text: "I'd search for a solution." },
            { id: "fix", text: "I'd enjoy troubleshooting." },
            { id: "easy_fix", text: "I'd probably know how to fix it." }
        ]
    }
];

