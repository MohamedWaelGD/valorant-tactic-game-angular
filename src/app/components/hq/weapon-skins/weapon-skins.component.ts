import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeaponSkin } from 'src/app/models/weaponSkin';

@Component({
  selector: 'app-weapon-skins',
  templateUrl: './weapon-skins.component.html',
  styleUrls: ['./weapon-skins.component.css']
})
export class WeaponSkinsComponent implements OnInit {

  selectedWeapon!: WeaponSkin;
  weaponSkinList: Array<WeaponSkin>;

  constructor(private modelService:NgbModal) {
    this.weaponSkinList = new Array<WeaponSkin>();
    this.weaponSkinList.push(this.tempData);
    this.weaponSkinList.push(this.tempData);
    this.weaponSkinList.push(this.tempData);
    this.weaponSkinList.push(this.tempData);
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modelService.dismissAll();
  }
  
  openModal(weapon:WeaponSkin, content:any) {
    this.selectedWeapon = weapon;
    const modalRef = this.modelService.open(content);
  }

  tempData: WeaponSkin = {
    "uuid": "1f835677-4ed7-fec2-6b80-c3ac384323f6",
    "displayName": "Infinity Phantom",
    "themeUuid": "6fd2d0f4-44ca-c131-5049-5ba91a0e8303",
    "contentTierUuid": "0cebb8be-46d7-c12a-d306-e9907bfc5a25",
    "displayIcon": "https://media.valorant-api.com/weaponskins/1f835677-4ed7-fec2-6b80-c3ac384323f6/displayicon.png",

    "wallpaper": null,
    "assetPath": "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Sportscar/AssaultRifle_ACR_Sportscar_PrimaryAsset",

    "chromas": [

      {
        "uuid": "caea87d8-42d1-d410-f78e-c88598d063a7",
        "displayName": "Infinity Phantom",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/caea87d8-42d1-d410-f78e-c88598d063a7/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/caea87d8-42d1-d410-f78e-c88598d063a7/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/caea87d8-42d1-d410-f78e-c88598d063a7/swatch.png",

        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Sportscar/Chromas/Standard/AssaultRifle_ACR_Sportscar_Standard_PrimaryAsset"
      },

      {
        "uuid": "740bc48c-4c6c-f73d-03f8-469ad7cf8046",
        "displayName": "Infinity Phantom (Variant 1 White)",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/740bc48c-4c6c-f73d-03f8-469ad7cf8046/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/740bc48c-4c6c-f73d-03f8-469ad7cf8046/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/740bc48c-4c6c-f73d-03f8-469ad7cf8046/swatch.png",

        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Sportscar/Chromas/v1/AssaultRifle_ACR_Sportscar_v1_PrimaryAsset"
      },

      {
        "uuid": "bea1b7c5-4638-4626-4f79-8da110dd9b26",
        "displayName": "Infinity Phantom (Variant 2 Yellow)",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/bea1b7c5-4638-4626-4f79-8da110dd9b26/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/bea1b7c5-4638-4626-4f79-8da110dd9b26/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/bea1b7c5-4638-4626-4f79-8da110dd9b26/swatch.png",

        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Sportscar/Chromas/v2/AssaultRifle_ACR_Sportscar_v2_PrimaryAsset"
      },

      {
        "uuid": "df969f48-4cf4-978b-b596-a7971a1420af",
        "displayName": "Infinity Phantom (Variant 3 Pink)",
        "displayIcon": "https://media.valorant-api.com/weaponskinchromas/df969f48-4cf4-978b-b596-a7971a1420af/displayicon.png",
        "fullRender": "https://media.valorant-api.com/weaponskinchromas/df969f48-4cf4-978b-b596-a7971a1420af/fullrender.png",
        "swatch": "https://media.valorant-api.com/weaponskinchromas/df969f48-4cf4-978b-b596-a7971a1420af/swatch.png",

        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Sportscar/Chromas/v3/AssaultRifle_ACR_Sportscar_v3_PrimaryAsset"
      }
    ],

    "levels": [

      {
        "uuid": "c71c8e2e-481f-c09f-57ef-91846a982cb5",
        "displayName": "Infinity Phantom",

        "levelItem": null,
        "displayIcon": "https://media.valorant-api.com/weaponskinlevels/c71c8e2e-481f-c09f-57ef-91846a982cb5/displayicon.png",

        "streamedVideo": null,
        "assetPath": "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Sportscar/Levels/AssaultRifle_ACR_Sportscar_Lv1_PrimaryAsset"
      }
    ]
  }
}
