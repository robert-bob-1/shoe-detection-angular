export enum ShoeType {
    BOOTS = 'Boots',
    LOAFERS = 'Loafers',
    FLIPFLOPS = 'Flip Flops',
    SANDAL = 'Sandal',
    SNEAKERS = 'Sneakers',
    SOCCERSHOES = 'Soccer Shoes',
}

export const shoeTypesBackendMap = new Map<ShoeType, string>([
    [ShoeType.BOOTS, 'boots'],
    [ShoeType.LOAFERS, 'loafers'],
    [ShoeType.FLIPFLOPS, 'flip_flops'],
    [ShoeType.SANDAL, 'sandal'],
    [ShoeType.SNEAKERS, 'sneakers'],
    [ShoeType.SOCCERSHOES, 'soccer_shoes'],
]);