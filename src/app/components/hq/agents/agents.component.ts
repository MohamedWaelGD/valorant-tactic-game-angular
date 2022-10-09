import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agent } from 'src/app/models/agent';
import { HttpRequestService } from 'src/app/services/api/http-request.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  isLoadout: boolean = false;
  selectedAgent!: any;
  agentList!: Array<Agent>;
  
  constructor(private modelService: NgbModal, private httpRequestService:HttpRequestService) {
  }
  
  ngOnInit(): void {
    this.httpRequestService.getPlayerAgents().subscribe(result => {
      this.agentList = new Array<Agent>;
      for (let i = 0; i < result.data.length; i++)
      {
        var data = JSON.parse(result.data[i]);
        this.agentList.push(data.data);
      }
    });
  }

  toggleAgentLoadout() {
    this.isLoadout = !this.isLoadout;
  }
  
  openModal(agent:Agent, content:any) {
    this.httpRequestService.getAgent(agent.uuid).subscribe(result => {
      this.selectedAgent = agent;
      this.selectedAgent.price = result.data.price;
      const modalRef = this.modelService.open(content);
    })
  }

  closeModal() {
    this.modelService.dismissAll();
  }

  setBackgroundStyles(gradients:Array<string>) {
    return StyleService.GetGradientAndHeightShopItemStyle(gradients);
  }

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
