import { IMapLegend, IMapBlueprint } from '~/game/entities/Map'

const map1String = `
████████████████
████████████████
█╔════════════╗█
█║░░░░░░░░░░░░║█
█║░░░░░░░░░░░░║█
█║░░░░░░░░░░░░║█
█╚════════════╝█
████████████████
████████████████
`;

const map1Legend: IMapLegend = {
    '█': {x: 0, y: 0},
    '░': {x: 64, y: 0},
    '╔': {x: 128, y: 0},
    '═': {x: 192, y: 0},
    '║': {x: 0, y: 64},
    '╚': {x: 64, y: 64},
    '╝': {x: 128, y: 64},
    '╗': {x: 192, y: 64},
}

export const map1Blueprint: IMapBlueprint = {
    mapString: map1String,
    mapStringLegend: map1Legend,
    spriteSheetURL: '/sprites/mapSpriteSheet.png',
    dimensions: { columns: 16, rows: 9, unit: 64 },
}
