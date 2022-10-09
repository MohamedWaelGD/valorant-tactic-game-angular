import { Agent } from "./agent";

export interface Team {
    Id: number;
    Name: string;
    Mission: Mission | undefined;
    Agents: Array<Agent>;
    maxTeamSize: number;
}

export interface Mission {
    Uuid: string;
    DurationInMin: number;
    Reward: number;
    TeamsAssignedIn: Array<Team>;
}
