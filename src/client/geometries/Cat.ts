export const Torso: DrawableModel = {
    vertices: [
        // Front
        -1.0, -0.5, 0.35, 1.0, -0.5, 0.35, 1.0, 0.5, 0.35, -1.0, 0.5, 0.35,
  
        // Back
        -1.0, -0.5, -0.35, -1.0, 0.5, -0.35, 1.0, 0.5, -0.35, 1.0, -0.5, -0.35,
  
        // Top
        -1.0, 0.5, -0.35, -1.0, 0.5, 0.35, 1.0, 0.5, 0.35, 1.0, 0.5, -0.35,
  
        // Bottom
        -1.0, -0.5, -0.35, 1.0, -0.5, -0.35, 1.0, -0.5, 0.35, -1.0, -0.5, 0.35,
  
        // Right
        1.0, -0.5, -0.35, 1.0, 0.5, -0.35, 1.0, 0.5, 0.35, 1.0, -0.5, 0.35,
  
        // Left
        -1.0, -0.5, -0.35, -1.0, -0.5, 0.35, -1.0, 0.5, 0.35, -1.0, 0.5, -0.35,
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
  
  export const Tail: DrawableModel = {
      vertices: [
          //Kiri: -1.0 -> 1.0
          //Kanan: 1.0 -> 1.2
          //Atas: 0.5 -> 0.3
          //Bawah: -0.5 -> -0.1
          //Depan: 0.35 -> 0.15
          //Belakang: -0.35 -> -0.15
  
          // Front
          1.0, -0.1, 0.15, 1.2, -0.1, 0.15, 1.2, 0.3, 0.15, 1.0, 0.3, 0.15,
    
          // Back
          1.0, -0.1, -0.15, 1.0, 0.3, -0.15, 1.2, 0.3, -0.15, 1.2, -0.1, -0.15,
    
          // Top
          1.0, 0.3, -0.15, 1.0, 0.3, 0.15, 1.2, 0.3, 0.15, 1.2, 0.3, -0.15,
    
          // Bottom
          1.0, -0.1, -0.15, 1.2, -0.1, -0.15, 1.2, -0.1, 0.15, 1.0, -0.1, 0.15,
    
          // Right
          1.2, -0.1, -0.15, 1.2, 0.3, -0.15, 1.2, 0.3, 0.15, 1.2, -0.1, 0.15,
    
          // Left
          1.0, -0.1, -0.15, 1.0, -0.1, 0.15, 1.0, 0.3, 0.15, 1.0, 0.3, -0.15,
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
  
  export const Head: DrawableModel = {
    vertices: [
        //Kiri: -1.9
        //Kanan: -1.0
        //Atas: 0.8
        //Bawah: -0.1
        //Depan: 0.55
        //Belakang: -0.55
  
        // Front
        -1.9, -0.1, 0.55, -1.0, -0.1, 0.55, -1.0, 0.8, 0.55, -1.9, 0.8, 0.55,
  
        // Back
        -1.9, -0.1, -0.55, -1.9, 0.8, -0.55, -1.0, 0.8, -0.55, -1.0, -0.1, -0.55,
  
        // Top
        -1.9, 0.8, -0.55, -1.9, 0.8, 0.55, -1.0, 0.8, 0.55, -1.0, 0.8, -0.55,
  
        // Bottom
        -1.9, -0.1, -0.55, -1.0, -0.1, -0.55, -1.0, -0.1, 0.55, -1.9, -0.1, 0.55,
  
        // Right
        -1.0, -0.1, -0.55, -1.0, 0.8, -0.55, -1.0, 0.8, 0.55, -1.0, -0.1, 0.55,
  
        // Left
        -1.9, -0.1, -0.55, -1.9, -0.1, 0.55, -1.9, 0.8, 0.55, -1.9, 0.8, -0.55,
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
          //Kiri: -1.9 -> -1.5
          //Kanan: -1.0 -> -1.1
          //Atas: 0.8 -> 1.0
          //Bawah: -0.1 -> 0.8
          //Depan: 0.55 -> 0.45
          //Belakang: -0.55 -> 0.15
    
          // Front
          -1.5, 0.8, 0.45, -1.1, 0.8, 0.45, -1.1, 1.0, 0.45, -1.5, 1.0, 0.45,
    
          // Back
          -1.5, 0.8, 0.13, -1.5, 1.0, 0.13, -1.1, 1.0, 0.13, -1.1, 0.8, 0.13,
    
          // Top
          -1.5, 1.0, 0.13, -1.5, 1.0, 0.45, -1.1, 1.0, 0.45, -1.1, 1.0, 0.13,
    
          // Bottom
          -1.5, 0.8, 0.13, -1.1, 0.8, 0.13, -1.1, 0.8, 0.45, -1.5, 0.8, 0.45,
    
          // Right
          -1.1, 0.8, 0.13, -1.1, 1.0, 0.13, -1.1, 1.0, 0.45, -1.1, 0.8, 0.45,
    
          // Left
          -1.5, 0.8, 0.13, -1.5, 0.8, 0.45, -1.5, 1.0, 0.45, -1.5, 1.0, 0.13,
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
  
  export const Nose: DrawableModel = {
      vertices: [
          //Kiri: -1.9 -> -2.1
          //Kanan: -1.0 -> -1.9
          //Atas: 0.8 -> 0.4
          //Bawah: -0.1 -> -0.1
          //Depan: 0.55 -> 0.35
          //Belakang: -0.55 -> -0.35
  
          // Front
          -2.1, -0.1, 0.35, -1.9, -0.1, 0.35, -1.9, 0.4, 0.35, -2.1, 0.4, 0.35,
  
          // Back
          -2.1, -0.1, -0.35, -2.1, 0.4, -0.35, -1.9, 0.4, -0.35, -1.9, -0.1, -0.35,
  
          // Top
          -2.1, 0.4, -0.35, -2.1, 0.4, 0.35, -1.9, 0.4, 0.35, -1.9, 0.4, -0.35,
  
          // Bottom
          -2.1, -0.1, -0.35, -1.9, -0.1, -0.35, -1.9, -0.1, 0.35, -2.1, -0.1, 0.35,
  
          // Right
          -1.9, -0.1, -0.35, -1.9, 0.4, -0.35, -1.9, 0.4, 0.35, -1.9, -0.1, 0.35,
  
          // Left
          -2.1, -0.1, -0.35, -2.1, -0.1, 0.35, -2.1, 0.4, 0.35, -2.1, 0.4, -0.35,
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
        //Kiri: -0.9
        //Kanan: -0.58
        //Atas: -0.5,
        //Bawah: -0.8
        //Depan: 0.35
        //Belakang: 0.05
  
        // Front
        -0.9, -0.8, 0.05, -0.9, -0.8, 0.35, -0.9, -0.5, 0.35, -0.9, -0.5, 0.05,
  
        // Back
        -0.58, -0.8, 0.05, -0.58, -0.5, 0.05, -0.58, -0.5, 0.35, -0.58, -0.8, 0.35,
  
        // Top
        -0.9, -0.5, 0.05, -0.9, -0.5, 0.35, -0.58, -0.5, 0.35, -0.58, -0.5, 0.05,
  
        // Bottom
        -0.9, -0.8, 0.05, -0.58, -0.8, 0.05, -0.58, -0.8, 0.35, -0.9, -0.8, 0.35,
  
        // Right
        -0.9, -0.8, 0.05, -0.9, -0.5, 0.05, -0.58, -0.5, 0.05, -0.58, -0.8, 0.05,
  
        // Left
        -0.9, -0.8, 0.35, -0.58, -0.8, 0.35, -0.58, -0.5, 0.35, -0.9, -0.5, 0.35,
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
  
  
  export const Cat: DrawableTreeHierarchy = {
    transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    render: Torso,
    name: 'Torso',
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
            transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            render: Head,
            name: 'Head',
            animation: {
                ax: 0.5,
                fx: 0.05,
                ay: 0,
                fy: 0,
                az: 0,
                fz: 0,
            },
            joint: {
                ax: 0.17,
                ay: 0,
                az: 0,
            },
            children: [
                {
                    transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                    render: Ear,
                    name: 'Left Ear',
                    animation: {
                        ax: 0,
                        fx: 0,
                        ay: 0,
                        fy: 0,
                        az: 0.1,
                        fz: 0.05,
                    },
                    joint: {
                        ax: 0.03,
                        ay: 0,
                        az: 0,
                    },
                    children: []
                },
                {
                    transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -0.6, 1],
                    render: Ear,
                    name: 'Right Ear',
                    animation: {
                        ax: 0,
                        fx: 0,
                        ay: 0,
                        fy: 0,
                        az: -0.1,
                        fz: 0.05,
                    },
                    joint: {
                        ax: 0.03,
                        ay: 0,
                        az: 0,
                    },
                    children: []
                },
                {
                    transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                    render: Nose,
                    name: 'Nose',
                    animation: {
                        ax: 0,
                        fx: 0,
                        ay: 0,
                        fy: 0,
                        az: 0,
                        fz: 0,
                    },
                    joint: {
                        ax: 0.02,
                        ay: 0,
                        az: 0,
                    },
                    children: []
                }
            ]
      },
      {
          transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          render: Leg,
          name: 'Front Left Leg',
          animation: {
              ax: 0.2,
              fx: 0.05,
              ay: 0,
              fy: 0,
              az: 0,
              fz: 0,
          },
          joint: {
              ax: 0.05,
              ay: 0,
              az: 0,
          },
          children: []
      },
      {
          transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -0.4, 1],
          render: Leg,
          name: 'Front Right Leg',
          animation: {
              ax: -0.2,
              fx: 0.05,
              ay: 0,
              fy: 0,
              az: 0,
              fz: 0,
          },
          joint: {
              ax: 0.05,
              ay: 0,
              az: 0,
          },
          children: []
      },
      {
          transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.5, 0, 0, 1],
          render: Leg,
          name: 'Back Left Leg',
          animation: {
              ax: 0.2,
              fx: 0.05,
              ay: 0,
              fy: 0,
              az: 0,
              fz: 0,
          },
          joint: {
              ax: 0.05,
              ay: 0,
              az: 0,
          },
          children: []
      },
      {
          transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.5, 0, -0.4, 1],
          render: Leg,
          name: 'Back Right Leg',
          animation: {
              ax: -0.2,
              fx: 0.05,
              ay: 0,
              fy: 0,
              az: 0,
              fz: 0,
          },
          joint: {
              ax: 0.05,
              ay: 0,
              az: 0,
          },
          children: []
      },
      {
          transform: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          render: Tail,
          name: 'Tail',
          animation: {
              ax: 10,
              fx: 0.2,
              ay: 0,
              fy: 0,
              az: 0,
              fz: 0,
          },
          joint: {
              ax: 10,
              ay: 0,
              az: 0,
          },
          children: []
      },
    ],
  };
  