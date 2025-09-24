export class ActivityLevelDTO {
    public LevelID: number;
    public LevelName: string;
    public ActivityTypeID: number;

    constructor(level: any) {
        this.LevelID = level.LevelID;
        this.LevelName = level.LevelName;
        this.ActivityTypeID = level.ActivityTypeID;
    }
}
