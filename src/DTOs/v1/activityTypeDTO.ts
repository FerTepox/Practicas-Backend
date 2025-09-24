export class ActivityTypeDTO {
    public ActivityTypeID: number;
    public ActivityTypeName: string;

    constructor(activityType: any) {
        this.ActivityTypeID = activityType.ActivityTypeID;
        this.ActivityTypeName = activityType.ActivityTypeName;
    }
}
