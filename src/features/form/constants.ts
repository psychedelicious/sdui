export const VALID_SAMPLERS: Array<string> = [
    'ddim',
    'plms',
    'k_lms',
    'k_dpm_2',
    'k_dpm_2_a',
    'k_euler',
    'k_euler_a',
    'k_heun',
];

export const VALID_WIDTHS: Array<number> = [
    64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960,
    1024,
];

export const VALID_HEIGHTS: Array<number> = [
    64, 128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960,
    1024,
];

export const VALID_UPSCALING_LEVELS: Array<string> = ['None', '2x', '4x'];
