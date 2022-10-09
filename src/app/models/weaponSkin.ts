export interface Chroma {
    uuid: string;
    displayName: string;
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo?: any;
    assetPath: string;
}

export interface Level {
    uuid: string;
    displayName: string;
    levelItem?: any;
    displayIcon: string;
    streamedVideo?: any;
    assetPath: string;
}

export interface WeaponSkin {
    uuid: string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper?: any;
    assetPath: string;
    chromas: Chroma[];
    levels: Level[];
}