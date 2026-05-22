export type WeaponCategory = 'Rifles'|'Pistols'|'SMGs'|'Heavy'|'Grenades'|'Equipment'|'Knives';
export type Side = 'T'|'CT'|'BOTH';
export interface Weapon {id:string;name:string;category:WeaponCategory;command:string;image:string;description:string;aliases:string[];side:Side}
export interface BindEntry {key:string;action:string;pack?:string}
export interface Lineup {id:string;map:string;name:string;screenshots:string[];throwType:string;tickrate:string;description:string;jumpthrow:boolean;site:string;difficulty:string}
export interface CrosshairPreset {name:string;code:string;thickness:number;gap:number;outline:number;color:string;dynamic:boolean}
