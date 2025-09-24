export class LevelStrategyDTO {
    public StrategyID: number;
    public StrategyName: string;
    public LevelID: number;

    constructor(strategy: any) {
        this.StrategyID = strategy.StrategyID;
        this.StrategyName = strategy.StrategyName;
        this.LevelID = strategy.LevelID;
    }
}
