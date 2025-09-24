export class LevelAttributeDTO {
    public LevelAttributeID: number;
    public AttributeName: string;
    public StrategyID: number;

    constructor(attribute: any) {
        this.LevelAttributeID = attribute.LevelAttributeID;
        this.AttributeName = attribute.AttributeName;
        this.StrategyID = attribute.StrategyID;
    }
}
