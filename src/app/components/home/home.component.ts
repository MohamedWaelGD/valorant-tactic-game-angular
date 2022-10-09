import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent';
import { Mission } from 'src/app/models/map';
import { Team } from 'src/app/models/team';
import { HttpRequestService } from 'src/app/services/api/http-request.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedMission!: any;

  @ViewChild('content') content: any;

  private map!: google.maps.Map;

  constructor(private router: Router, private serviceModel: NgbModal, private httpRequestService:HttpRequestService) { }

  ngOnInit(): void {
    this.tempTeam = undefined;
    this.constructMap();
  }

  constructMap()
  {
    let loader = new Loader({
      apiKey: "AIzaSyD4wbh2RaGIeUfJpTjt4s8qGVakSERpvAM"
    });

    loader.load().then(() => {
      console.log("loaded gmaps");

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: { lat: 0, lng: 0 },
        zoom: 2
      });

      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.generateControlButton(this.map, { lat: 0, lng: 0 }, 2, "Reset Zoom"));

      this.httpRequestService.getMissionsDetails().subscribe((result: { data: any; }) => {
        console.log(result);
        var json = JSON.parse(result.data);
        this.tempMaps = json.data;
        console.log(this.tempMaps);
        this.tempMaps.forEach(element => {
          if (element.displayName != "The Range")
          {
            var locationString = element.coordinates.trim().replace(' ', '').replace(',', '').split("N");
            var lat = Number.parseInt(locationString[0].split('°')[0]);
            var lng = Number.parseInt(locationString[1].split('°')[0]);
    
            var location = { lat: lat, lng: lng };
            console.log(location);
    
            var label = {
              text: element.displayName,
              className: 'marker-label'
            };
    
            const marker = new google.maps.Marker({
              position: location,
              map: this.map,
              label: label,
              icon: '../../../assets/red-flag.png'
            });
    
            marker.addListener("click", () => {
              this.openModal(element, this.content);
            })
    
            this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.generateControlButton(this.map, location, 8, element.displayName));
          }
        });
      })
    })
  }

  generateControlButton(map: google.maps.Map, location: any, zoom: number, title: string): HTMLElement {
    const controlBtn = document.createElement("button");

    controlBtn.classList.add("btn", "btn-danger", "me-2", "mt-2");

    controlBtn.innerHTML = title;
    controlBtn.addEventListener("click", () => {
      console.log("Hello World");
      this.map.setZoom(zoom);
      map.setCenter(location);
    })

    return controlBtn;
  }

  setBackgroundStyles(gradients:Array<string>) {
    return StyleService.GetGradientAndHeightShopItemStyle(gradients);
  }

  openModal(mission: Mission, content: any) {
    this.httpRequestService.getMission(mission.uuid).subscribe(result => {
      var data = result.data;
      this.selectedMission = mission;
      this.selectedMission.durationInMin = data.durationInMin;
      this.selectedMission.reward = data.reward;
      this.selectedMission.teamsAssignedIn = data.teamsAssignedIn;
      console.log(this.selectedMission);
      this.serviceModel.open(content);
    })
  }

  closeModal() {
    this.serviceModel.dismissAll();
  }

  tempMaps!: Array<any>;
  /*
  tempMaps: Array<Mission> = [
    {
      "uuid": "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319",
      "displayName": "Ascent",
      "coordinates": "45°26'BF'N,12°20'Q'E",
      "displayIcon": "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png",
      "listViewIcon": "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/listviewicon.png",
      "splash": "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
      "assetPath": "ShooterGame/Content/Maps/Ascent/Ascent_PrimaryAsset",
      "mapUrl": "/Game/Maps/Ascent/Ascent",
      "xMultiplier": 0.00007,
      "yMultiplier": -0.00007,
      "xScalarToAdd": 0.813895,
      "yScalarToAdd": 0.573242,

      "callouts": [

        {
          "regionName": "Tree",
          "superRegionName": "A",

          "location": {
            "x": 3980.9062,
            "y": -5938.758
          }
        },

        {
          "regionName": "Lobby",
          "superRegionName": "A",

          "location": {
            "x": 4489.032,
            "y": -3014.0515
          }
        },

        {
          "regionName": "Main",
          "superRegionName": "A",

          "location": {
            "x": 5321.6206,
            "y": -4710.1274
          }
        },

        {
          "regionName": "Window",
          "superRegionName": "A",

          "location": {
            "x": 4023.0244,
            "y": -8180.692
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "A",

          "location": {
            "x": 6153.585,
            "y": -6626.2114
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Attacker Side",

          "location": {
            "x": 60,
            "y": 50
          }
        },

        {
          "regionName": "Lobby",
          "superRegionName": "B",

          "location": {
            "x": -1490.5864,
            "y": -1389.9706
          }
        },

        {
          "regionName": "Main",
          "superRegionName": "B",

          "location": {
            "x": -1983.6713,
            "y": -5840.8125
          }
        },

        {
          "regionName": "Boat House",
          "superRegionName": "B",

          "location": {
            "x": -4484.774,
            "y": -7763.3584
          }
        },

        {
          "regionName": "Bottom",
          "superRegionName": "Mid",

          "location": {
            "x": 1122.2262,
            "y": -5951.704
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "B",

          "location": {
            "x": -2344.065,
            "y": -7548.511
          }
        },

        {
          "regionName": "Catwalk",
          "superRegionName": "Mid",

          "location": {
            "x": 2315.7944,
            "y": -4127.2554
          }
        },

        {
          "regionName": "Cubby",
          "superRegionName": "Mid",

          "location": {
            "x": 3387.3167,
            "y": -5129.764
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Defender Side",

          "location": {
            "x": 1995.2354,
            "y": -9744.923
          }
        },

        {
          "regionName": "Garden",
          "superRegionName": "A",

          "location": {
            "x": 3773.6653,
            "y": -7551.3535
          }
        },

        {
          "regionName": "Market",
          "superRegionName": "Mid",

          "location": {
            "x": 1089.1044,
            "y": -7363.1914
          }
        },

        {
          "regionName": "Courtyard",
          "superRegionName": "Mid",

          "location": {
            "x": 1222.7029,
            "y": -4586.6
          }
        },

        {
          "regionName": "Link",
          "superRegionName": "Mid",

          "location": {
            "x": -632.0929,
            "y": -4280.2573
          }
        },

        {
          "regionName": "Pizza",
          "superRegionName": "Mid",

          "location": {
            "x": 1801.5667,
            "y": -7262.1704
          }
        },

        {
          "regionName": "Rafters",
          "superRegionName": "A",

          "location": {
            "x": 6129.893,
            "y": -8210
          }
        },

        {
          "regionName": "Top",
          "superRegionName": "Mid",

          "location": {
            "x": 2753.9297,
            "y": -2129.6155
          }
        },

        {
          "regionName": "Wine",
          "superRegionName": "A",

          "location": {
            "x": 7358.7407,
            "y": -4689.2705
          }
        }
      ]
    },
    {
      "uuid": "d960549e-485c-e861-8d71-aa9d1aed12a2",
      "displayName": "Split",
      "coordinates": "35°41'CD'N,139°41'WX'E",
      "displayIcon": "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/displayicon.png",
      "listViewIcon": "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/listviewicon.png",
      "splash": "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png",
      "assetPath": "ShooterGame/Content/Maps/Bonsai/Bonsai_PrimaryAsset",
      "mapUrl": "/Game/Maps/Bonsai/Bonsai",
      "xMultiplier": 0.000078,
      "yMultiplier": -0.000078,
      "xScalarToAdd": 0.842188,
      "yScalarToAdd": 0.697578,

      "callouts": [

        {
          "regionName": "Back",
          "superRegionName": "A",

          "location": {
            "x": 7345.049,
            "y": -7858.0405
          }
        },

        {
          "regionName": "Lobby",
          "superRegionName": "A",

          "location": {
            "x": 6814.217,
            "y": -2457.7468
          }
        },

        {
          "regionName": "Main",
          "superRegionName": "A",

          "location": {
            "x": 6279.9795,
            "y": -4492.833
          }
        },

        {
          "regionName": "Rafters",
          "superRegionName": "A",

          "location": {
            "x": 5434.726,
            "y": -6258.442
          }
        },

        {
          "regionName": "Ramps",
          "superRegionName": "A",

          "location": {
            "x": 4330,
            "y": -4750
          }
        },

        {
          "regionName": "Screens",
          "superRegionName": "A",

          "location": {
            "x": 5648.7144,
            "y": -8868.611
          }
        },

        {
          "regionName": "Sewer",
          "superRegionName": "A",

          "location": {
            "x": 4862.6064,
            "y": -2367.2578
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "A",

          "location": {
            "x": 6588.6597,
            "y": -6761.131
          }
        },

        {
          "regionName": "Tower",
          "superRegionName": "A",

          "location": {
            "x": 4636.7925,
            "y": -6748.2334
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Attacker Side",

          "location": {
            "x": 1901.97,
            "y": 59.588867
          }
        },

        {
          "regionName": "Alley",
          "superRegionName": "B",

          "location": {
            "x": -1158.0048,
            "y": -8066.301
          }
        },

        {
          "regionName": "Back",
          "superRegionName": "B",

          "location": {
            "x": -3107.181,
            "y": -7417.2607
          }
        },

        {
          "regionName": "Link",
          "superRegionName": "B",

          "location": {
            "x": -27.670135,
            "y": -2369.784
          }
        },

        {
          "regionName": "Garage",
          "superRegionName": "B",

          "location": {
            "x": -2190.7827,
            "y": -3848.0293
          }
        },

        {
          "regionName": "Rafters",
          "superRegionName": "B",

          "location": {
            "x": -637.1397,
            "y": -6070.6167
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "B",

          "location": {
            "x": -2167.2456,
            "y": -6264.7715
          }
        },

        {
          "regionName": "Stairs",
          "superRegionName": "B",

          "location": {
            "x": 1061.493,
            "y": -6760.976
          }
        },

        {
          "regionName": "Tower",
          "superRegionName": "B",

          "location": {
            "x": 168.89589,
            "y": -5290.194
          }
        },

        {
          "regionName": "Lobby",
          "superRegionName": "B",

          "location": {
            "x": -1271.6421,
            "y": -1983.6248
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Defender Side",

          "location": {
            "x": 2142.3635,
            "y": -8964.969
          }
        },

        {
          "regionName": "Bottom",
          "superRegionName": "Mid",

          "location": {
            "x": 1922.6552,
            "y": -2899.4626
          }
        },

        {
          "regionName": "Mail",
          "superRegionName": "Mid",

          "location": {
            "x": 1155.3333,
            "y": -4808.6436
          }
        },

        {
          "regionName": "Top",
          "superRegionName": "Mid",

          "location": {
            "x": 2021.9575,
            "y": -4596.936
          }
        },

        {
          "regionName": "Vent",
          "superRegionName": "Mid",

          "location": {
            "x": 3155.1648,
            "y": -5338.5215
          }
        }
      ]
    },
    {
      "uuid": "b529448b-4d60-346e-e89e-00a4c527a405",
      "displayName": "Fracture",
      "coordinates": "35°48'BI\"N 106°08'YQ\"W",
      "displayIcon": "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/displayicon.png",
      "listViewIcon": "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/listviewicon.png",
      "splash": "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png",
      "assetPath": "ShooterGame/Content/Maps/Canyon/Canyon_PrimaryAsset",
      "mapUrl": "/Game/Maps/Canyon/Canyon",
      "xMultiplier": 0.000078,
      "yMultiplier": -0.000078,
      "xScalarToAdd": 0.556952,
      "yScalarToAdd": 1.155886,

      "callouts": [

        {
          "regionName": "Bridge",
          "superRegionName": "Attacker Side",

          "location": {
            "x": 13204,
            "y": -756
          }
        },

        {
          "regionName": "Bench",
          "superRegionName": "B",

          "location": {
            "x": 11473,
            "y": -2897
          }
        },

        {
          "regionName": "Arcade",
          "superRegionName": "B",

          "location": {
            "x": 10181,
            "y": -4179
          }
        },

        {
          "regionName": "Tower",
          "superRegionName": "B",

          "location": {
            "x": 9155,
            "y": -5601
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "B",

          "location": {
            "x": 8178,
            "y": -5942
          }
        },

        {
          "regionName": "Generator",
          "superRegionName": "B",

          "location": {
            "x": 8362,
            "y": -3380
          }
        },

        {
          "regionName": "Link",
          "superRegionName": "B",

          "location": {
            "x": 9198,
            "y": -2741
          }
        },

        {
          "regionName": "Canteen",
          "superRegionName": "B",

          "location": {
            "x": 7111,
            "y": -3138
          }
        },

        {
          "regionName": "Link",
          "superRegionName": "A",

          "location": {
            "x": 8578,
            "y": 1302
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Defender Side",

          "location": {
            "x": 9156,
            "y": -677
          }
        },

        {
          "regionName": "Main",
          "superRegionName": "B",

          "location": {
            "x": 5967,
            "y": -5343
          }
        },

        {
          "regionName": "Tree",
          "superRegionName": "B",

          "location": {
            "x": 4965,
            "y": -4109
          }
        },

        {
          "regionName": "Tunnel",
          "superRegionName": "B",

          "location": {
            "x": 7402,
            "y": -4058
          }
        },

        {
          "regionName": "Hall",
          "superRegionName": "A",

          "location": {
            "x": 5063.5464,
            "y": 2057.6648
          }
        },

        {
          "regionName": "Door",
          "superRegionName": "A",

          "location": {
            "x": 5807.855,
            "y": 1940.4603
          }
        },

        {
          "regionName": "Rope",
          "superRegionName": "A",

          "location": {
            "x": 6638.828,
            "y": 1052.6461
          }
        },

        {
          "regionName": "Main",
          "superRegionName": "A",

          "location": {
            "x": 5878.792,
            "y": 3450.9639
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "A",

          "location": {
            "x": 8125.7627,
            "y": 3373.7861
          }
        },

        {
          "regionName": "Drop",
          "superRegionName": "A",

          "location": {
            "x": 9306.803,
            "y": 2826.1626
          }
        },

        {
          "regionName": "Dish",
          "superRegionName": "A",

          "location": {
            "x": 11296.665,
            "y": 2059.077
          }
        },

        {
          "regionName": "Gate",
          "superRegionName": "A",

          "location": {
            "x": 12962,
            "y": 1565
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Attacker Side",

          "location": {
            "x": 4345.554,
            "y": -948.4505
          }
        }
      ]
    },
    {
      "uuid": "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba",
      "displayName": "Bind",
      "coordinates": "34°2'A'N,6°51'Z'W",
      "displayIcon": "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/displayicon.png",
      "listViewIcon": "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/listviewicon.png",
      "splash": "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png",
      "assetPath": "ShooterGame/Content/Maps/Duality/Duality_PrimaryAsset",
      "mapUrl": "/Game/Maps/Duality/Duality",
      "xMultiplier": 0.000059,
      "yMultiplier": -0.000059,
      "xScalarToAdd": 0.576941,
      "yScalarToAdd": 0.967566,

      "callouts": [

        {
          "regionName": "Exit",
          "superRegionName": "A",

          "location": {
            "x": 5875.4106,
            "y": 4924.497
          }
        },

        {
          "regionName": "Link",
          "superRegionName": "A",

          "location": {
            "x": 6365.635,
            "y": -1007.0208
          }
        },

        {
          "regionName": "Lobby",
          "superRegionName": "A",

          "location": {
            "x": 6113.239,
            "y": 3158.823
          }
        },

        {
          "regionName": "Short",
          "superRegionName": "A",

          "location": {
            "x": 7983.3467,
            "y": 803.96063
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "A",

          "location": {
            "x": 10747.902,
            "y": 2664.4436
          }
        },

        {
          "regionName": "Teleporter",
          "superRegionName": "A",

          "location": {
            "x": 9432.303,
            "y": 489.8803
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Attacker Side",

          "location": {
            "x": 161.64832,
            "y": 77.51108
          }
        },

        {
          "regionName": "Exit",
          "superRegionName": "B",

          "location": {
            "x": 8921.412,
            "y": -1763.2295
          }
        },

        {
          "regionName": "Hall",
          "superRegionName": "B",

          "location": {
            "x": 12981.879,
            "y": -4941.7544
          }
        },

        {
          "regionName": "Link",
          "superRegionName": "B",

          "location": {
            "x": 6361.57,
            "y": -2621.1829
          }
        },

        {
          "regionName": "Fountain",
          "superRegionName": "B",

          "location": {
            "x": 5737.1484,
            "y": -5390.446
          }
        },

        {
          "regionName": "Long",
          "superRegionName": "B",

          "location": {
            "x": 7666.669,
            "y": -6512.8022
          }
        },

        {
          "regionName": "Short",
          "superRegionName": "B",

          "location": {
            "x": 7424.1313,
            "y": -3056.4531
          }
        },

        {
          "regionName": "Site",
          "superRegionName": "B",

          "location": {
            "x": 11108.108,
            "y": -4831.4585
          }
        },

        {
          "regionName": "Teleporter",
          "superRegionName": "B",

          "location": {
            "x": 9027.776,
            "y": -7223.8066
          }
        },

        {
          "regionName": "Window",
          "superRegionName": "B",

          "location": {
            "x": 8826.788,
            "y": -4309.4116
          }
        },

        {
          "regionName": "Bath",
          "superRegionName": "A",

          "location": {
            "x": 9106.541,
            "y": 4449.6587
          }
        },

        {
          "regionName": "Cave",
          "superRegionName": "Attacker Side",

          "location": {
            "x": 3920.3887,
            "y": 256.94193
          }
        },

        {
          "regionName": "Cubby",
          "superRegionName": "A",

          "location": {
            "x": 8605.168,
            "y": 174.89832
          }
        },

        {
          "regionName": "Spawn",
          "superRegionName": "Defender Side",

          "location": {
            "x": 14641.918,
            "y": -1017.6743
          }
        },

        {
          "regionName": "Elbow",
          "superRegionName": "B",

          "location": {
            "x": 11212.901,
            "y": -7095.3335
          }
        },

        {
          "regionName": "Garden",
          "superRegionName": "B",

          "location": {
            "x": 9144.103,
            "y": -5598.1274
          }
        },

        {
          "regionName": "Lamps",
          "superRegionName": "A",

          "location": {
            "x": 10649.471,
            "y": 79.904434
          }
        },

        {
          "regionName": "Tower",
          "superRegionName": "A",

          "location": {
            "x": 12872.583,
            "y": 2556.7708
          }
        }
      ]
    }
  ]
  */

  tempTeam: Team | undefined = {
    Id: 1,
    Name: "Team1",
    Mission: undefined,
    Agents: [],
    maxTeamSize: 5
  };

  tempAgentData: Agent = {
    "uuid": "dade69b4-4f5a-8528-247b-219e5a1facd6",
    "displayName": "Fade",
    "description": "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
    "developerName": "BountyHunter",
    "characterTags": null,
    "displayIcon": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
    "displayIconSmall": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png",
    "bustPortrait": null,
    "fullPortrait": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
    "fullPortraitV2": null,
    "killfeedPortrait": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/killfeedportrait.png",
    "background": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png",
    "backgroundGradientColors": [
      "b1414cff",
      "5589bdff",
      "18344cff",
      "66376cff"
    ],
    "assetPath": "ShooterGame/Content/Characters/BountyHunter/BountyHunter_PrimaryAsset",
    "isFullPortraitRightFacing": false,
    "isPlayableCharacter": true,
    "isAvailableForTest": false,
    "isBaseContent": false,
    "role": {
      "uuid": "1b47567f-8f7b-444b-aae3-b0c634622d10",
      "displayName": "Initiator",
      "description": "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.",
      "displayIcon": "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
      "assetPath": "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset"
    },
    "abilities": [
      {
        "slot": "Ability1",
        "displayName": "Seize",
        "description": "EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed.",
        "displayIcon": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png"
      },
      {
        "slot": "Ability2",
        "displayName": "Haunt",
        "description": "EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.",
        "displayIcon": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png"
      },
      {
        "slot": "Grenade",
        "displayName": "Prowler",
        "description": "EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact.",
        "displayIcon": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png"
      },
      {
        "slot": "Ultimate",
        "displayName": "Nightfall",
        "description": "EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are marked by terror trails, deafened, and decayed.",
        "displayIcon": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png"
      }
    ],
    "voiceLine": {
      "minDuration": 2.578,
      "maxDuration": 2.578,
      "mediaList": [
        {
          "id": 963067082,
          "wwise": "https://media.valorant-api.com/sounds/963067082.wem",
          "wave": "https://media.valorant-api.com/sounds/963067082.wav"
        }
      ]
    }
  };
}
