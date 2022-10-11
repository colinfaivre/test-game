type IMapSymbol = '█' | '░' | '╔' | '═' | '║' | '╚' | '╝' | '╗';

interface ICoords {
    x: number,
    y: number,
}

interface IDimensions {
    rows: number,
    columns: number,
    unit: number,
}

export type IMapLegend = {
    [key in IMapSymbol]: ICoords;
};

export interface IMapBlueprint {
    mapString: string,
    mapStringLegend: IMapLegend,
    spriteSheetURL: string,
    dimensions: IDimensions,
}

interface IMapItem {
    spriteCoords: ICoords,
    isCollisionBlock: boolean,
}

export class Map {
    width;
    height;
    mapItemList: IMapItem[];

    constructor(mapBlueprint: IMapBlueprint) {
        const unit = mapBlueprint.dimensions.unit;
        this.width = mapBlueprint.dimensions.columns * unit;
        this.height = mapBlueprint.dimensions.rows * unit;
        this.mapItemList = this.mapStringParser(mapBlueprint)
    }

    mapStringParser(mapBlueprint: IMapBlueprint): IMapItem[] {
        const mapItemList = mapBlueprint.mapString.replaceAll('\n', '').split('')
            .map((symbol: IMapSymbol) => {
                return {
                    symbol: symbol,
                    spriteCoords: mapBlueprint.mapStringLegend[symbol],
                    isCollisionBlock: !['█', '░'].includes(symbol),
                }
            });

        return mapItemList;
    }
    
    render(ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, this.width, this.height)
    }
}