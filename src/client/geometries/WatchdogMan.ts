export const Head: DrawableModel = {
    vertices: [
        // Front
        -0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0.675, 0.25, -0.25, 0.675, 0.25,

        // Back
        -0.25, 0, -0.25, -0.25, 0.675, -0.25, 0.25, 0.675, -0.25, 0.25, 0, -0.25,

        // Top
        -0.25, 0.675, -0.25, -0.25, 0.675, 0.25, 0.25, 0.675, 0.25, 0.25, 0.675, -0.25,

        // Bottom
        -0.25, 0, -0.25, 0.25, 0, -0.25, 0.25, 0, 0.25, -0.25, 0, 0.25,

        // Right
        0.25, 0, -0.25, 0.25, 0.675, -0.25, 0.25, 0.675, 0.25, 0.25, 0, 0.25,

        // Left
        -0.25, 0, -0.25, -0.25, 0, 0.25, -0.25, 0.675, 0.25, -0.25, 0.675, -0.25,
    ],
    uv: [
        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,
    ],
    colors: [
        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3, // front
        4,
        5,
        6,
        4,
        6,
        7, // back
        8,
        9,
        10,
        8,
        10,
        11, // top
        12,
        13,
        14,
        12,
        14,
        15, // bottom
        16,
        17,
        18,
        16,
        18,
        19, // right
        20,
        21,
        22,
        20,
        22,
        23, // left
    ],
};

export const Ear: DrawableModel = {
    vertices: [
        // Front
        -0.125, 0, 0.125, 0.125, 0, 0.125, 0.125, 0.3375, 0.125, -0.125, 0.3375, 0.125,

        // Back
        -0.125, 0, -0.125, -0.125, 0.3375, -0.125, 0.125, 0.3375, -0.125, 0.125, 0, -0.125,

        // Top
        -0.125, 0.3375, -0.125, -0.125, 0.3375, 0.125, 0.125, 0.3375, 0.125, 0.125, 0.3375, -0.125,

        // Bottom
        -0.125, 0, -0.125, 0.125, 0, -0.125, 0.125, 0, 0.125, -0.125, 0, 0.125,

        // Right
        0.125, 0, -0.125, 0.125, 0.3375, -0.125, 0.125, 0.3375, 0.125, 0.125, 0, 0.125,

        // Left
        -0.125, 0, -0.125, -0.125, 0, 0.125, -0.125, 0.3375, 0.125, -0.125, 0.3375, -0.125,
    ],
    uv: [
        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,
    ],
    colors: [
        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3, // front
        4,
        5,
        6,
        4,
        6,
        7, // back
        8,
        9,
        10,
        8,
        10,
        11, // top
        12,
        13,
        14,
        12,
        14,
        15, // bottom
        16,
        17,
        18,
        16,
        18,
        19, // right
        20,
        21,
        22,
        20,
        22,
        23, // left
    ],
};

export const Torso: DrawableModel = {
    vertices: [
        // Front
        -0.275, -0.75, 0.125, 0.275, -0.75, 0.125, 0.275, 0.5, 0.125, -0.275, 0.5, 0.125,

        // Back
        -0.275, -0.75, -0.125, -0.275, 0.5, -0.125, 0.275, 0.5, -0.125, 0.275, -0.75, -0.125,

        // Top
        -0.275, 0.5, -0.125, -0.275, 0.5, 0.125, 0.275, 0.5, 0.125, 0.275, 0.5, -0.125,

        // Bottom
        -0.275, -0.75, -0.125, 0.275, -0.75, -0.125, 0.275, -0.75, 0.125, -0.275, -0.75, 0.125,

        // Right
        0.275, -0.75, -0.125, 0.275, 0.5, -0.125, 0.275, 0.5, 0.125, 0.275, -0.75, 0.125,

        // Left
        -0.275, -0.75, -0.125, -0.275, -0.75, 0.125, -0.275, 0.5, 0.125, -0.275, 0.5, -0.125,
    ],
    uv: [
        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,
    ],
    colors: [
        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3, // front
        4,
        5,
        6,
        4,
        6,
        7, // back
        8,
        9,
        10,
        8,
        10,
        11, // top
        12,
        13,
        14,
        12,
        14,
        15, // bottom
        16,
        17,
        18,
        16,
        18,
        19, // right
        20,
        21,
        22,
        20,
        22,
        23, // left
    ],
};

export const Arm: DrawableModel = {
    vertices: [
        // Front
        -0.125, -0.875, 0.125, 0.125, -0.875, 0.125, 0.125, 0.0, 0.125, -0.125, 0.0, 0.125,

        // Back
        -0.125, -0.875, -0.125, -0.125, 0.0, -0.125, 0.125, 0.0, -0.125, 0.125, -0.875, -0.125,

        // Top
        -0.125, 0.0, -0.125, -0.125, 0.0, 0.125, 0.125, 0.0, 0.125, 0.125, 0.0, -0.125,

        // Bottom
        -0.125, -0.875, -0.125, 0.125, -0.875, -0.125, 0.125, -0.875, 0.125, -0.125, -0.875, 0.125,

        // Right
        0.125, -0.875, -0.125, 0.125, 0.0, -0.125, 0.125, 0.0, 0.125, 0.125, -0.875, 0.125,

        // Left
        -0.125, -0.875, -0.125, -0.125, -0.875, 0.125, -0.125, 0.0, 0.125, -0.125, 0.0, -0.125,
    ],
    uv: [
        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,
    ],
    colors: [
        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3, // front
        4,
        5,
        6,
        4,
        6,
        7, // back
        8,
        9,
        10,
        8,
        10,
        11, // top
        12,
        13,
        14,
        12,
        14,
        15, // bottom
        16,
        17,
        18,
        16,
        18,
        19, // right
        20,
        21,
        22,
        20,
        22,
        23, // left
    ],
};

export const Leg: DrawableModel = {
    vertices: [
        // Front
        -0.125, -0.875, 0.125, 0.125, -0.875, 0.125, 0.125, 0.0, 0.125, -0.125, 0.0, 0.125,

        // Back
        -0.125, -0.875, -0.125, -0.125, 0.0, -0.125, 0.125, 0.0, -0.125, 0.125, -0.875, -0.125,

        // Top
        -0.125, 0.0, -0.125, -0.125, 0.0, 0.125, 0.125, 0.0, 0.125, 0.125, 0.0, -0.125,

        // Bottom
        -0.125, -0.875, -0.125, 0.125, -0.875, -0.125, 0.125, -0.875, 0.125, -0.125, -0.875, 0.125,

        // Right
        0.125, -0.875, -0.125, 0.125, 0.0, -0.125, 0.125, 0.0, 0.125, 0.125, -0.875, 0.125,

        // Left
        -0.125, -0.875, -0.125, -0.125, -0.875, 0.125, -0.125, 0.0, 0.125, -0.125, 0.0, -0.125,
    ],
    uv: [
        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,
    ],
    colors: [
        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3, // front
        4,
        5,
        6,
        4,
        6,
        7, // back
        8,
        9,
        10,
        8,
        10,
        11, // top
        12,
        13,
        14,
        12,
        14,
        15, // bottom
        16,
        17,
        18,
        16,
        18,
        19, // right
        20,
        21,
        22,
        20,
        22,
        23, // left
    ],
};

export const Foot: DrawableModel = {
    vertices: [
        // Front
        0.125, 0.3375, 0.125, -0.125, 0.3375, 0.125, -0.125, 0, 0.125, 0.125, 0, 0.125,

        // Back
        0.125, 0.3375, -0.125, 0.125, 0, -0.125, -0.125, 0, -0.125, -0.125, 0.3375, -0.125,

        // Top
        0.125, 0.3375, 0.125, 0.125, 0.3375, -0.125, -0.125, 0.3375, -0.125, -0.125, 0.3375, 0.125,

        // Bottom
        -0.125, 0, -0.125, 0.125, 0, -0.125, 0.125, 0, 0.125, -0.125, 0, 0.125,

        // Right
        0.125, 0, -0.125, 0.125, 0.3375, -0.125, 0.125, 0.3375, 0.125, 0.125, 0, 0.125,

        // Left
        -0.125, 0, -0.125, -0.125, 0, 0.125, -0.125, 0.3375, 0.125, -0.125, 0.3375, -0.125,
    ],
    uv: [
        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,

        0, 1, 1, 1, 1, 0, 0, 0,
    ],
    colors: [
        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,

        0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682, 0.682, 1.0, 0.055, 0.682,
        0.682, 1.0,
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3, // front
        4,
        5,
        6,
        4,
        6,
        7, // back
        8,
        9,
        10,
        8,
        10,
        11, // top
        12,
        13,
        14,
        12,
        14,
        15, // bottom
        16,
        17,
        18,
        16,
        18,
        19, // right
        20,
        21,
        22,
        20,
        22,
        23, // left
    ],
};

export const WatchdogMan: DrawableTreeHierarchy = {
    transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    name: 'Torso',
    render: Torso,
    animation: {
        ax: 0,
        fx: 0,
        ay: 0,
        fy: 0,
        az: 0,
        fz: 0,
    },
    joint: {
        ax: 1,
        ay: 1,
        az: 1,
    },
    children: [
        {
            transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.375, 0.5, 0, 1],
            render: Arm,
            name: 'Left Arm',
            animation: {
                ax: -2,
                fx: 0.1,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
            joint: {
                ax: 2,
                ay: 0,
                az: 0,
            },
            children: [],
        },
        {
            transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.375, 0.5, 0, 1],
            render: Arm,
            name: 'Right Arm',
            animation: {
                ax: 2,
                fx: 0.1,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
            joint: {
                ax: 2,
                ay: 0,
                az: 0,
            },
            children: [],
        },
        {
            transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.15, -0.75, 0, 1],
            render: Leg,
            name: 'Left Leg',
            animation: {
                ax: 2,
                fx: 0.1,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
            joint: {
                ax: 2,
                ay: 0,
                az: 0,
            },
            children: [
                {
                    transform: [1, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1.5, 0, 0, -1.05, 0.05, 1],
                    render: Foot,
                    name: 'Left Foot',
                    animation: {
                        axAbs: true,
                        ax: 1,
                        fx: 0.1,
                        ay: 0,
                        fy: 0,
                        az: 0,
                        fz: 0,
                    },
                    joint: {
                        axAbs: true,
                        ax: 1,
                        ayAbs: true,
                        ay: 0,
                        azAbs: true,
                        az: 0,
                    },
                    children: [],
                },
            ],
        },
        {
            transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.15, -0.75, 0, 1],
            render: Leg,
            name: 'Right Leg',
            animation: {
                ax: -2,
                fx: 0.1,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
            joint: {
                ax: 2,
                ay: 0,
                az: 0,
            },
            children: [
                {
                    transform: [1, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1.5, 0, 0, -1.05, 0.05, 1],
                    render: Foot,
                    name: 'Right Foot',
                    animation: {
                        axAbs: true,
                        ax: 1,
                        fx: 0.1,
                        ay: 0,
                        fy: 0,
                        az: 0,
                        fz: 0,
                    },
                    joint: {
                        axAbs: true,
                        ax: 1,
                        ayAbs: true,
                        ay: 0,
                        azAbs: true,
                        az: 0,
                    },
                    children: [],
                },
            ],
        },
        {
            transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.5, 0, 1],
            render: Head,
            name: 'Head',
            animation: {
                ax: 0,
                fx: 0,
                ay: 1,
                fy: 0.1,
                az: 0,
                fz: 0,
            },
            joint: {
                ax: 0,
                ay: 1,
                az: 0,
            },
            children: [
                {
                    transform: [0.7, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1, 0, -0.3, 0.6, 0.2, 1],
                    render: Ear,
                    name: 'Left Ear',
                    animation: {
                        ax: 0,
                        fx: 0,
                        ay: 0,
                        fy: 0,
                        az: 1,
                        fz: 0.1,
                    },
                    joint: {
                        ax: 0,
                        ay: 0,
                        az: 1,
                    },
                    children: [],
                },
                {
                    transform: [0.7, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1, 0, 0.3, 0.6, 0.2, 1],
                    render: Ear,
                    name: 'Right Ear',
                    animation: {
                        ax: 0,
                        fx: 0,
                        ay: 0,
                        fy: 0,
                        az: -1,
                        fz: 0.1,
                    },
                    joint: {
                        ax: 0,
                        ay: 0,
                        az: 1,
                    },
                    children: [],
                },
            ],
        },
    ],
};
