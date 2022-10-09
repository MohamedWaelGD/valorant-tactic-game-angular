import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Weapon } from 'src/app/models/weapon';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {


  selectedWeapon!: Weapon;
  weaponList: Array<Weapon>;

  constructor(private modelService:NgbModal) { 
    this.weaponList = new Array<Weapon>();
    this.weaponList.push(this.tempData);
    this.weaponList.push(this.tempData);
    this.weaponList.push(this.tempData);
    this.weaponList.push(this.tempData);
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modelService.dismissAll();
  }
  
  openModal(weapon:Weapon, content:any) {
    this.selectedWeapon = weapon;
    const modalRef = this.modelService.open(content);
  }

  tempData: Weapon = {
    "uuid": "63e6c2b6-4a8e-869c-3d4c-e38355226584",
    "displayName": "Odin",
    "category": "EEquippableCategory::Heavy",
    "defaultSkinUuid": "f454efd1-49cb-372f-7096-d394df615308",
    "displayIcon": "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png",
    "killStreamIcon": "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/killstreamicon.png",
    "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HMGPrimaryAsset",
    "weaponStats": {
      "fireRate": 12,
      "magazineSize": 100,
      "runSpeedMultiplier": 0.76,
      "equipTimeSeconds": 1.25,
      "reloadTimeSeconds": 5,
      "firstBulletAccuracy": 0.8,
      "shotgunPelletCount": 1,
      "wallPenetration": "EWallPenetrationDisplayType::High",
      "feature": "EWeaponStatsFeature::ROFIncrease",
      "fireMode": '',
      "altFireType": "EWeaponAltFireDisplayType::ADS",

      "adsStats": {
        "zoomMultiplier": 1.15,
        "fireRate": 15.6,
        "runSpeedMultiplier": 0.76,
        "burstCount": 1,
        "firstBulletAccuracy": 0.79
      },

      "altShotgunStats": '',

      "airBurstStats": '',

      "damageRanges": [

        {
          "rangeStartMeters": 0,
          "rangeEndMeters": 30,
          "headDamage": 95,
          "bodyDamage": 38,
          "legDamage": 32.3
        },

        {
          "rangeStartMeters": 30,
          "rangeEndMeters": 50,
          "headDamage": 77.5,
          "bodyDamage": 31,
          "legDamage": 26.35
        }
      ]
    },

    "shopData": {
      "cost": 3200,
      "category": "Heavy Weapons",
      "categoryText": "Heavy Weapons",

      "gridPosition": {
        "row": 2,
        "column": 2
      },
      "canBeTrashed": true,

      "image": '',
      "newImage": "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/shop/newimage.png",

      "newImage2": '',
      "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HeavyMachineGunPurchase"
    },

    "skins": [

      {
        "uuid": "94c085e6-48e1-c879-2552-88bf7850c5a8",
        "displayName": "Xenohunter Odin",
        "themeUuid": "c251784d-40c3-0d8e-85f4-9da6ff3bc073",
        "contentTierUuid": "60bca009-4182-7998-dee7-b8a2558dc369",
        "displayIcon": "https://media.valorant-api.com/weaponskins/94c085e6-48e1-c879-2552-88bf7850c5a8/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Alien/HMG_Alien_PrimaryAsset",

        "chromas": [

          {
            "uuid": "3cc39f94-443e-e0e1-39be-21a9c9f3b0aa",
            "displayName": "Xenohunter Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/3cc39f94-443e-e0e1-39be-21a9c9f3b0aa/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/3cc39f94-443e-e0e1-39be-21a9c9f3b0aa/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Alien/Chromas/Standard/HMG_Alien_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "89baf0f4-4648-69fc-f0af-2fbc69b97b80",
            "displayName": "Xenohunter Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/89baf0f4-4648-69fc-f0af-2fbc69b97b80/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Alien_Odin_01.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Alien/Levels/HMG_Alien_Lv1_PrimaryAsset"
          },

          {
            "uuid": "289d7473-472b-68da-9019-da9594a8a127",
            "displayName": "Xenohunter Odin Level 2",
            "levelItem": "EEquippableSkinLevelItem::HeartbeatAndMapSensor",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Alien_Odin_02.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Alien/Levels/HMG_Alien_Lv2_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "97af88e4-4176-9fa3-4a26-57919443dab7",
        "displayName": "Glitchpop Odin",
        "themeUuid": "5b014f36-414b-4703-9c65-1876c630feaa",
        "contentTierUuid": "e046854e-406c-37f4-6607-19a9ba8426fc",
        "displayIcon": "https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_PrimaryAsset",

        "chromas": [

          {
            "uuid": "9667983e-4c8c-e5b2-68d7-be84f9b3d46c",
            "displayName": "Glitchpop Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/9667983e-4c8c-e5b2-68d7-be84f9b3d46c/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Standard/HeavyMachineGun_Cyberpunk_Standard_PrimaryAsset"
          },

          {
            "uuid": "0b30b3e8-4696-7b7c-fed2-50b34234965a",
            "displayName": "Glitchpop Odin Level 4 (Variant 1 Blue)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/0b30b3e8-4696-7b7c-fed2-50b34234965a/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/0b30b3e8-4696-7b7c-fed2-50b34234965a/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/0b30b3e8-4696-7b7c-fed2-50b34234965a/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Blue/HeavyMachineGun_Cyberpunk_Blue_PrimaryAsset"
          },

          {
            "uuid": "54caeb7f-4fc4-6adb-45a6-cfb6202d9c24",
            "displayName": "Glitchpop Odin Level 4 (Variant 2 Red)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/54caeb7f-4fc4-6adb-45a6-cfb6202d9c24/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/54caeb7f-4fc4-6adb-45a6-cfb6202d9c24/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/54caeb7f-4fc4-6adb-45a6-cfb6202d9c24/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Red/HeavyMachineGun_Cyberpunk_Red_PrimaryAsset"
          },

          {
            "uuid": "bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e",
            "displayName": "Glitchpop Odin Level 4 (Variant 3 Gold)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/bba7f46f-41ee-9e6c-c37a-dca8ee4bf50e/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/Chromas/Gold/HeavyMachineGun_Cyberpunk_Gold_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "549b06bb-4704-25ce-19d5-c9b70b10de19",
            "displayName": "Glitchpop Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/549b06bb-4704-25ce-19d5-c9b70b10de19/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_GlitchpopOdin01.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv1_PrimaryAsset"
          },

          {
            "uuid": "3e7d08f9-4067-1abe-8159-87b8e31fc463",
            "displayName": "Glitchpop Odin Level 2",
            "levelItem": "EEquippableSkinLevelItem::VFX",
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/3e7d08f9-4067-1abe-8159-87b8e31fc463/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_GlitchpopOdin02.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv2_PrimaryAsset"
          },

          {
            "uuid": "ca91d540-4d2d-4946-70bd-97aae8117306",
            "displayName": "Glitchpop Odin Level 3",
            "levelItem": "EEquippableSkinLevelItem::VFX",
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/ca91d540-4d2d-4946-70bd-97aae8117306/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_GlitchpopOdin03.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv3_PrimaryAsset"
          },

          {
            "uuid": "8c95559d-44fb-544d-00d7-8192ed38b17a",
            "displayName": "Glitchpop Odin Level 4",
            "levelItem": "EEquippableSkinLevelItem::Finisher",
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/8c95559d-44fb-544d-00d7-8192ed38b17a/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_GlitchpopOdin04.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_Lv4_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "2715f184-46cc-bec1-dd7c-e7b4d1aeb625",
        "displayName": "Nitro Odin",
        "themeUuid": "cc3f546b-410a-ddb6-6577-4aab0296496d",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",

        "displayIcon": '',

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Electroflux2/HMG_Electroflux2_PrimaryAsset",

        "chromas": [

          {
            "uuid": "064eb4b1-477a-23ba-2f70-6a9732f68ece",
            "displayName": "Standard",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/064eb4b1-477a-23ba-2f70-6a9732f68ece/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/064eb4b1-477a-23ba-2f70-6a9732f68ece/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Electroflux2/Chromas/Standard/HMG_Electroflux2_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "5f86ac54-46b0-806f-f200-dd89fbcd7cb9",
            "displayName": "Nitro Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/5f86ac54-46b0-806f-f200-dd89fbcd7cb9/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Electroflux2/Levels/HMG_Electroflux2_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "cda41b87-4d3a-c17c-5f6d-8990cc9c5efb",
        "displayName": ".EXE Odin",
        "themeUuid": "271874eb-491b-eae3-51f8-6f93f93035f9",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/cda41b87-4d3a-c17c-5f6d-8990cc9c5efb/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Grid/HeavyMachineGun_Grid_PrimaryAsset",

        "chromas": [

          {
            "uuid": "c1ed5bf3-4827-3e3a-ebbb-1ba42a226e59",
            "displayName": ".EXE Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/c1ed5bf3-4827-3e3a-ebbb-1ba42a226e59/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/c1ed5bf3-4827-3e3a-ebbb-1ba42a226e59/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Grid/Chromas/Standard/HeavyMachineGun_Grid_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "49292f21-4f5e-0a1a-3671-54b7ca8fe65a",
            "displayName": ".EXE Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/49292f21-4f5e-0a1a-3671-54b7ca8fe65a/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Grid/Levels/HeavyMachineGun_Grid_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "157bcebe-484d-82e2-2a60-c8b4b11197ea",
        "displayName": "Prime//2.0 Odin",
        "themeUuid": "3264e5b6-4bd2-213b-eeab-4d8525dd4ffb",
        "contentTierUuid": "60bca009-4182-7998-dee7-b8a2558dc369",
        "displayIcon": "https://media.valorant-api.com/weaponskins/157bcebe-484d-82e2-2a60-c8b4b11197ea/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/HeavyMachineGun_HypeBeast2_PrimaryAsset",

        "chromas": [

          {
            "uuid": "9e59563c-4467-43df-3b58-2ca43c25abde",
            "displayName": "Prime//2.0 Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/9e59563c-4467-43df-3b58-2ca43c25abde/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/9e59563c-4467-43df-3b58-2ca43c25abde/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/9e59563c-4467-43df-3b58-2ca43c25abde/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Chromas/Standard/HeavyMachineGun_HypeBeast2_Standard_PrimaryAsset"
          },

          {
            "uuid": "ed34c641-4f1d-e38f-0018-4cb11fed9ee7",
            "displayName": "Prime//2.0 Odin Level 4 (Variant 1 Gold)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/ed34c641-4f1d-e38f-0018-4cb11fed9ee7/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/ed34c641-4f1d-e38f-0018-4cb11fed9ee7/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/ed34c641-4f1d-e38f-0018-4cb11fed9ee7/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Chromas/Gold/HeavyMachineGun_HypeBeast2_Gold_PrimaryAsset"
          },

          {
            "uuid": "8617ebbb-418a-0819-1ca2-b383f8ae757c",
            "displayName": "Prime//2.0 Odin Level 4 (Variant 2 Green)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/8617ebbb-418a-0819-1ca2-b383f8ae757c/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/8617ebbb-418a-0819-1ca2-b383f8ae757c/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/8617ebbb-418a-0819-1ca2-b383f8ae757c/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Chromas/Green/HeavyMachineGun_HypeBeast2_Green_PrimaryAsset"
          },

          {
            "uuid": "20ebb41a-4edc-0fa3-f3e9-b3b5d91e8524",
            "displayName": "Prime//2.0 Odin Level 4 (Variant 3 Orange)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/20ebb41a-4edc-0fa3-f3e9-b3b5d91e8524/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/20ebb41a-4edc-0fa3-f3e9-b3b5d91e8524/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/20ebb41a-4edc-0fa3-f3e9-b3b5d91e8524/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Chromas/Orange/HeavyMachineGun_HypeBeast2_Orange_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "ef564ec3-497c-3038-543e-eb94bbe46437",
            "displayName": "Prime//2.0 Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/ef564ec3-497c-3038-543e-eb94bbe46437/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/Prime2_Odin_Lv1.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Levels/HeavyMachineGun_HypeBeast2_Lv1_PrimaryAsset"
          },

          {
            "uuid": "ab04093d-489f-27f3-9e1b-1589db2185c8",
            "displayName": "Prime//2.0 Odin Level 2",
            "levelItem": "EEquippableSkinLevelItem::VFX",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/Prime2_Odin_Lv2.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Levels/HeavyMachineGun_HypeBeast2_Lv2_PrimaryAsset"
          },

          {
            "uuid": "7ca4b0b7-4ba5-9fc9-218c-0b8c865edaad",
            "displayName": "Prime//2.0 Odin Level 3",
            "levelItem": "EEquippableSkinLevelItem::Animation",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/Prime2_Odin_Lv3.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Levels/HeavyMachineGun_HypeBeast2_Lv3_PrimaryAsset"
          },

          {
            "uuid": "4f3eea45-4e3e-026f-66c9-658906a52d0b",
            "displayName": "Prime//2.0 Odin Level 4",
            "levelItem": "EEquippableSkinLevelItem::Finisher",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/Prime2_Odin_Lv4.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/HypeBeast2/Levels/HeavyMachineGun_HypeBeast2_Lv4_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "72e724e9-4ba4-2d12-ce1a-8db1a528b9d3",
        "displayName": "Prism III Odin",
        "themeUuid": "0c2487bb-4cf9-78be-1bf1-c696f86b4aab",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/72e724e9-4ba4-2d12-ce1a-8db1a528b9d3/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Iridescence2/HMG_Iridescence2_PrimaryAsset",

        "chromas": [

          {
            "uuid": "b8bf7a9c-4724-a090-31b2-79b2211a6079",
            "displayName": "Prism III Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/b8bf7a9c-4724-a090-31b2-79b2211a6079/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/b8bf7a9c-4724-a090-31b2-79b2211a6079/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/b8bf7a9c-4724-a090-31b2-79b2211a6079/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Iridescence2/Chromas/Standard/HMG_Iridescence2_Standard_PrimaryAsset"
          },

          {
            "uuid": "0cdd55d5-44ba-d1fe-58ba-a881b50fdc0b",
            "displayName": "Prism III Odin (Variant 1 Pink)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/0cdd55d5-44ba-d1fe-58ba-a881b50fdc0b/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/0cdd55d5-44ba-d1fe-58ba-a881b50fdc0b/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/0cdd55d5-44ba-d1fe-58ba-a881b50fdc0b/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Iridescence2/Chromas/v1/HMG_Iridescence2_v1_PrimaryAsset"
          },

          {
            "uuid": "11c0fc56-4b49-84f4-8e86-9ca17b4d75b4",
            "displayName": "Prism III Odin (Variant 2 Green)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/11c0fc56-4b49-84f4-8e86-9ca17b4d75b4/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/11c0fc56-4b49-84f4-8e86-9ca17b4d75b4/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/11c0fc56-4b49-84f4-8e86-9ca17b4d75b4/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Iridescence2/Chromas/v2/HMG_Iridescence2_v2_PrimaryAsset"
          },

          {
            "uuid": "1aa0f35d-4a18-2054-d408-a18b2671507f",
            "displayName": "Prism III Odin (Variant 3 Purple)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/1aa0f35d-4a18-2054-d408-a18b2671507f/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/1aa0f35d-4a18-2054-d408-a18b2671507f/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/1aa0f35d-4a18-2054-d408-a18b2671507f/swatch.png",

            "streamedVideo": '',

            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Iridescence2/Chromas/v3/HMG_Iridescence2_v3_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "7e323e82-44b6-1711-2028-10af32c632d5",
            "displayName": "Prism III Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/7e323e82-44b6-1711-2028-10af32c632d5/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Iridescence2/Levels/HMG_Iridescence2_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "9e648b20-4ed5-1f34-87a9-979cbe9a958a",
        "displayName": "Smite Odin",
        "themeUuid": "465336b0-4261-9dca-f6e8-109ad2c40381",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/9e648b20-4ed5-1f34-87a9-979cbe9a958a/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Lightning/HMG_Lightning_PrimaryAsset",

        "chromas": [

          {
            "uuid": "5da04039-4875-92ec-759f-5b9928d12b30",
            "displayName": "Smite Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/5da04039-4875-92ec-759f-5b9928d12b30/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/5da04039-4875-92ec-759f-5b9928d12b30/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Lightning/Chromas/Standard/HMG_Lightning_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "c59442a5-4b74-792c-d996-71a5fb340625",
            "displayName": "Smite Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/c59442a5-4b74-792c-d996-71a5fb340625/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Lightning/Levels/HMG_Lightning_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "5c13101a-45e4-d568-aade-d6b0dadedcd1",
        "displayName": "Coalition: Cobra Odin",
        "themeUuid": "4c6f01fd-4396-7d11-87b7-ac871a285241",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/5c13101a-45e4-d568-aade-d6b0dadedcd1/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Military/HMG_Military_PrimaryAsset",

        "chromas": [

          {
            "uuid": "e8874661-47d0-37cd-5f98-33b18e05872a",
            "displayName": "Coalition: Cobra Odin",

            "displayIcon": '',
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/e8874661-47d0-37cd-5f98-33b18e05872a/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/e8874661-47d0-37cd-5f98-33b18e05872a/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Military/Chromas/Standard/HMG_Military_Standard_PrimaryAsset"
          },

          {
            "uuid": "4a405c13-4440-94de-e894-82970565b71e",
            "displayName": "Coalition: Cobra Odin (Variant 1 Blue)",

            "displayIcon": '',
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/4a405c13-4440-94de-e894-82970565b71e/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/4a405c13-4440-94de-e894-82970565b71e/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Military/Chromas/v1/HMG_Military_v1_PrimaryAsset"
          },

          {
            "uuid": "b49c9d6f-46c8-3689-01c1-bd81beb4050d",
            "displayName": "Coalition: Cobra Odin (Variant 2 Red)",

            "displayIcon": '',
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/b49c9d6f-46c8-3689-01c1-bd81beb4050d/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/b49c9d6f-46c8-3689-01c1-bd81beb4050d/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Military/Chromas/v2/HMG_Military_v2_PrimaryAsset"
          },

          {
            "uuid": "c1e53748-4a97-c0a8-6759-59925fae909b",
            "displayName": "Coalition: Cobra Odin (Variant 3 Orange)",

            "displayIcon": '',
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/c1e53748-4a97-c0a8-6759-59925fae909b/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/c1e53748-4a97-c0a8-6759-59925fae909b/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Military/Chromas/v3/HMG_Military_v3_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "dd2acfca-4366-7ac0-c13e-1eb2f1948273",
            "displayName": "Coalition: Cobra Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/dd2acfca-4366-7ac0-c13e-1eb2f1948273/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Military/Levels/HMG_Military_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "65baa0cd-42ec-f99d-54a0-338d795b5824",
        "displayName": "Sensation Odin",
        "themeUuid": "548cc24d-4127-a9c3-060c-b2bada325474",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/65baa0cd-42ec-f99d-54a0-338d795b5824/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Rainbow/HMG_Rainbow_PrimaryAsset",

        "chromas": [

          {
            "uuid": "53ce97ed-47e0-4856-0446-f7bc86e869e0",
            "displayName": "Sensation Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/53ce97ed-47e0-4856-0446-f7bc86e869e0/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/53ce97ed-47e0-4856-0446-f7bc86e869e0/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Rainbow/Chromas/Standard/HMG_Rainbow_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "1bfea917-4262-37ba-3a76-04b937f2d0be",
            "displayName": "Sensation Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/1bfea917-4262-37ba-3a76-04b937f2d0be/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Rainbow/Levels/HMG_Rainbow_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "57523cf0-4574-968b-9f17-168e3bdb6d0d",
        "displayName": "Lightwave Odin",
        "themeUuid": "f9fb29bd-4592-ee49-0e2a-93a925d7332e",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/57523cf0-4574-968b-9f17-168e3bdb6d0d/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/RGB/HMG_RGB_PrimaryAsset",

        "chromas": [

          {
            "uuid": "156158a5-4eb2-79ef-49e9-16a680fe93a9",
            "displayName": "Lightwave Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/156158a5-4eb2-79ef-49e9-16a680fe93a9/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/156158a5-4eb2-79ef-49e9-16a680fe93a9/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/156158a5-4eb2-79ef-49e9-16a680fe93a9/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/RGB/Chromas/Standard/HMG_RGB_Standard_PrimaryAsset"
          },

          {
            "uuid": "a5a25319-4159-072f-5555-48824316ef00",
            "displayName": "Lightwave Odin (Variant 1 Blue)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/a5a25319-4159-072f-5555-48824316ef00/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/a5a25319-4159-072f-5555-48824316ef00/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/a5a25319-4159-072f-5555-48824316ef00/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/RGB/Chromas/v1/HMG_RGB_v1_PrimaryAsset"
          },

          {
            "uuid": "4609dfdc-4d4e-463f-8fc9-c8a4c83369ce",
            "displayName": "Lightwave Odin (Variant 2 Red)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/4609dfdc-4d4e-463f-8fc9-c8a4c83369ce/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/4609dfdc-4d4e-463f-8fc9-c8a4c83369ce/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/4609dfdc-4d4e-463f-8fc9-c8a4c83369ce/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/RGB/Chromas/v2/HMG_RGB_v2_PrimaryAsset"
          },

          {
            "uuid": "488f90c1-47e2-84dc-586d-609e53b5fe5b",
            "displayName": "Lightwave Odin (Variant 3 Gray)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/488f90c1-47e2-84dc-586d-609e53b5fe5b/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/488f90c1-47e2-84dc-586d-609e53b5fe5b/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/488f90c1-47e2-84dc-586d-609e53b5fe5b/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/RGB/Chromas/v3/HMG_RGB_v3_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "162beb92-4ab7-4383-da51-4b94ba90bd5d",
            "displayName": "Lightwave Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/162beb92-4ab7-4383-da51-4b94ba90bd5d/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/RGB/Levels/HMG_RGB_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "02cce94a-4dc2-d11a-33cf-d8aba4e36202",
        "displayName": "Schema Odin",
        "themeUuid": "820b86ef-494c-d8f5-604b-07ae66c53c4c",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/02cce94a-4dc2-d11a-33cf-d8aba4e36202/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Schema/HMG_Schema_PrimaryAsset",

        "chromas": [

          {
            "uuid": "46afaf58-410c-661b-85d1-9eaafb4185b2",
            "displayName": "Schema Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/46afaf58-410c-661b-85d1-9eaafb4185b2/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/46afaf58-410c-661b-85d1-9eaafb4185b2/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Schema/Chromas/Standard/HMG_Schema_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "15a5516d-412f-2db0-6bb3-3cbe40a2355f",
            "displayName": "Schema Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/15a5516d-412f-2db0-6bb3-3cbe40a2355f/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Schema/Levels/HMG_Schema_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "468fdc95-443f-f1c2-bd22-fc8e1af0de39",
        "displayName": "Lycan's Bane Odin",
        "themeUuid": "ac3b20fe-423e-2f58-3baf-2cadeef47230",
        "contentTierUuid": "0cebb8be-46d7-c12a-d306-e9907bfc5a25",
        "displayIcon": "https://media.valorant-api.com/weaponskins/468fdc95-443f-f1c2-bd22-fc8e1af0de39/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/SilverWolf/HMG_SilverWolf_PrimaryAsset",

        "chromas": [

          {
            "uuid": "42bdb11e-4d51-27eb-37e5-5c91c5c94a61",
            "displayName": "Lycan's Bane Odin",

            "displayIcon": '',
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/42bdb11e-4d51-27eb-37e5-5c91c5c94a61/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/SilverWolf/Chromas/Standard/HMG_SilverWolf_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "e1a05cb4-4ac5-b15a-e86e-bab0f7e093ad",
            "displayName": "Lycan's Bane Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/e1a05cb4-4ac5-b15a-e86e-bab0f7e093ad/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/SilverWolf/Levels/HMG_SilverWolf_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "8dda01a6-4237-f430-ac70-c3ba677963e9",
        "displayName": "Reaver Odin",
        "themeUuid": "42110a3e-4363-50cc-5a1f-e4bc80f97916",
        "contentTierUuid": "60bca009-4182-7998-dee7-b8a2558dc369",
        "displayIcon": "https://media.valorant-api.com/weaponskins/8dda01a6-4237-f430-ac70-c3ba677963e9/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/HMG_Soulstealer2_PrimaryAsset",

        "chromas": [

          {
            "uuid": "cf42ad75-43db-5426-0645-a7a3fac452c5",
            "displayName": "Reaver Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/cf42ad75-43db-5426-0645-a7a3fac452c5/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/cf42ad75-43db-5426-0645-a7a3fac452c5/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/cf42ad75-43db-5426-0645-a7a3fac452c5/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Chromas/Standard/HMG_Soulstealer2_Standard_PrimaryAsset"
          },

          {
            "uuid": "0c643904-4cbc-8806-3198-eb86c22472bf",
            "displayName": "Reaver Odin Level 4 (Variant 1 Red)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/0c643904-4cbc-8806-3198-eb86c22472bf/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/0c643904-4cbc-8806-3198-eb86c22472bf/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/0c643904-4cbc-8806-3198-eb86c22472bf/swatch.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_04_chroma_01.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Chromas/v1/HMG_Soulstealer2_v1_PrimaryAsset"
          },

          {
            "uuid": "c8a7b6ae-4aaa-ba5b-9fad-0da1c8b25f9e",
            "displayName": "Reaver Odin Level 4 (Variant 2 Black)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/c8a7b6ae-4aaa-ba5b-9fad-0da1c8b25f9e/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/c8a7b6ae-4aaa-ba5b-9fad-0da1c8b25f9e/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/c8a7b6ae-4aaa-ba5b-9fad-0da1c8b25f9e/swatch.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_04_chroma_02.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Chromas/v2/HMG_Soulstealer2_v2_PrimaryAsset"
          },

          {
            "uuid": "2f6c84b9-40dd-4c58-8f29-a6af6a31a09f",
            "displayName": "Reaver Odin Level 4 (Variant 3 White)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/2f6c84b9-40dd-4c58-8f29-a6af6a31a09f/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/2f6c84b9-40dd-4c58-8f29-a6af6a31a09f/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/2f6c84b9-40dd-4c58-8f29-a6af6a31a09f/swatch.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_04_chroma_03.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Chromas/v3/HMG_Soulstealer2_v3_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "f5ce6297-4cd4-4b09-3931-5f8b20a4317d",
            "displayName": "Reaver Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/f5ce6297-4cd4-4b09-3931-5f8b20a4317d/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_01.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Levels/HMG_Soulstealer2_Lv1_PrimaryAsset"
          },

          {
            "uuid": "2bb3b930-48d4-c32a-2972-6ba60f1e3d96",
            "displayName": "Reaver Odin Level 2",
            "levelItem": "EEquippableSkinLevelItem::VFX",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_02.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Levels/HMG_Soulstealer2_Lv2_PrimaryAsset"
          },

          {
            "uuid": "2a4c3d8a-44ec-0097-5afc-1bb1044605b4",
            "displayName": "Reaver Odin Level 3",
            "levelItem": "EEquippableSkinLevelItem::Animation",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_03.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Levels/HMG_Soulstealer2_Lv3_PrimaryAsset"
          },

          {
            "uuid": "606a2388-440f-7858-e5e3-5a94d7aeb64f",
            "displayName": "Reaver Odin Level 4",
            "levelItem": "EEquippableSkinLevelItem::Finisher",

            "displayIcon": '',
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/VALskinpreview_Reaver_02_Odin_04.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Soulstealer2/Levels/HMG_Soulstealer2_Lv4_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "f454efd1-49cb-372f-7096-d394df615308",
        "displayName": "Standard Odin",
        "themeUuid": "5a629df4-4765-0214-bd40-fbb96542941f",

        "contentTierUuid": '',
        "displayIcon": "https://media.valorant-api.com/weaponskins/f454efd1-49cb-372f-7096-d394df615308/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Standard/HeavyMachineGun_Standard_PrimaryAsset",

        "chromas": [

          {
            "uuid": "2f93861d-4b2f-2175-af0c-3ba0c736e257",
            "displayName": "Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/2f93861d-4b2f-2175-af0c-3ba0c736e257/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/2f93861d-4b2f-2175-af0c-3ba0c736e257/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Standard/Chromas/Standard/HeavyMachineGun_Standard_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "d91fb318-4e40-b4c9-8c0b-bb9da28bac55",
            "displayName": "Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/d91fb318-4e40-b4c9-8c0b-bb9da28bac55/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Standard/HeavyMachineGun_Standard_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "befa2f32-410f-a418-d8d3-b194dcf2ec6d",
        "displayName": "Aerosol Odin",
        "themeUuid": "625f8165-44d8-0104-33da-e38da60cdb11",
        "contentTierUuid": "12683d76-48d7-84a3-4e09-6985794f0445",
        "displayIcon": "https://media.valorant-api.com/weaponskins/befa2f32-410f-a418-d8d3-b194dcf2ec6d/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/StreetArt/HMG_StreetArt_PrimaryAsset",

        "chromas": [

          {
            "uuid": "309941f1-48b5-edc2-5e07-eaa7a435fedc",
            "displayName": "Aerosol Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/309941f1-48b5-edc2-5e07-eaa7a435fedc/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/309941f1-48b5-edc2-5e07-eaa7a435fedc/fullrender.png",

            "swatch": '',

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/StreetArt/Chromas/Standard/HMG_StreetArt_Standard_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "657b3476-4919-7b4b-be54-aeaedad999e6",
            "displayName": "Aerosol Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/657b3476-4919-7b4b-be54-aeaedad999e6/displayicon.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/StreetArt/Levels/HMG_StreetArt_Lv1_PrimaryAsset"
          }
        ]
      },

      {
        "uuid": "85ed3f9d-4e59-a709-8faf-bc86effb3a07",
        "displayName": "BlastX Odin",
        "themeUuid": "40a12450-468d-4632-8374-3abd1d4d5eb9",
        "contentTierUuid": "e046854e-406c-37f4-6607-19a9ba8426fc",
        "displayIcon": "https://media.valorant-api.com/weaponskins/85ed3f9d-4e59-a709-8faf-bc86effb3a07/displayicon.png",

        "wallpaper": '',
        "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/HeavyMachineGun_URF_PrimaryAsset",

        "chromas": [

          {
            "uuid": "f55aac92-4420-7038-634a-8fb3fc9a936d",
            "displayName": "BlastX Odin",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/f55aac92-4420-7038-634a-8fb3fc9a936d/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/f55aac92-4420-7038-634a-8fb3fc9a936d/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/f55aac92-4420-7038-634a-8fb3fc9a936d/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Chromas/Standard/HeavyMachineGun_URF_Standard_PrimaryAsset"
          },

          {
            "uuid": "3b809ee0-4af3-b604-9ac4-a799241289e7",
            "displayName": "BlastX Odin Level 4 (Variant 1 Black)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/3b809ee0-4af3-b604-9ac4-a799241289e7/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/3b809ee0-4af3-b604-9ac4-a799241289e7/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/3b809ee0-4af3-b604-9ac4-a799241289e7/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Chromas/v1/HeavyMachineGun_URF_v1_PrimaryAsset"
          },

          {
            "uuid": "027dda2f-491d-e55e-1d32-acb7f55008f9",
            "displayName": "BlastX Odin Level 4 (Variant 2 Yellow)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/027dda2f-491d-e55e-1d32-acb7f55008f9/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/027dda2f-491d-e55e-1d32-acb7f55008f9/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/027dda2f-491d-e55e-1d32-acb7f55008f9/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Chromas/v2/HeavyMachineGun_URF_v2_PrimaryAsset"
          },

          {
            "uuid": "e2c992bc-4099-eeac-9e3f-2e9d6a6bf757",
            "displayName": "BlastX Odin Level 4 (Variant 3 Pink)",
            "displayIcon": "https://media.valorant-api.com/weaponskinchromas/e2c992bc-4099-eeac-9e3f-2e9d6a6bf757/displayicon.png",
            "fullRender": "https://media.valorant-api.com/weaponskinchromas/e2c992bc-4099-eeac-9e3f-2e9d6a6bf757/fullrender.png",
            "swatch": "https://media.valorant-api.com/weaponskinchromas/e2c992bc-4099-eeac-9e3f-2e9d6a6bf757/swatch.png",

            "streamedVideo": '',
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Chromas/v3/HeavyMachineGun_URF_v3_PrimaryAsset"
          }
        ],

        "levels": [

          {
            "uuid": "5123ed96-48de-aeab-eaea-2b8ea689f5a2",
            "displayName": "BlastX Odin",

            "levelItem": '',
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/5123ed96-48de-aeab-eaea-2b8ea689f5a2/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/BlastX_Odin_Lv1.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Levels/HeavyMachineGun_URF_Lv1_PrimaryAsset"
          },

          {
            "uuid": "35e89d1a-477c-3d54-82aa-3599a832fe0b",
            "displayName": "BlastX Odin Level 2",
            "levelItem": "EEquippableSkinLevelItem::VFX",
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/35e89d1a-477c-3d54-82aa-3599a832fe0b/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/BlastX_Odin_Lv2_Update.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Levels/HeavyMachineGun_URF_Lv2_PrimaryAsset"
          },

          {
            "uuid": "31201e02-4873-a6db-1ce6-6e93a620370c",
            "displayName": "BlastX Odin Level 3",
            "levelItem": "EEquippableSkinLevelItem::Animation",
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/31201e02-4873-a6db-1ce6-6e93a620370c/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/BlastX_Odin_Lv3.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Levels/HeavyMachineGun_URF_Lv3_PrimaryAsset"
          },

          {
            "uuid": "7637fff1-4275-590a-6181-be95eae8786a",
            "displayName": "BlastX Odin Level 4",
            "levelItem": "EEquippableSkinLevelItem::Finisher",
            "displayIcon": "https://media.valorant-api.com/weaponskinlevels/7637fff1-4275-590a-6181-be95eae8786a/displayicon.png",
            "streamedVideo": "https://media.valorant-api.com/streamedvideos/BlastX_Odin_Lv4_Update.mp4",
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Urf/Levels/HeavyMachineGun_URF_Lv4_PrimaryAsset"
          }
        ]
      }
    ]
  }

}
