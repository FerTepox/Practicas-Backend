export class AttributeDetailDTO {
    public AttributeDetailID: number;
    public StrategyID: number;
    public LevelAttributeID: number;
    public Value: string;
    public HasScore: boolean;
    public Score: number;

    constructor(detail: any) {
        this.AttributeDetailID = detail.AttributeDetailID;
        this.StrategyID = detail.StrategyID;
        this.LevelAttributeID = detail.LevelAttributeID;
        this.Value = detail.Value;
        this.HasScore = detail.HasScore;
        this.Score = detail.Score;
    }
}
