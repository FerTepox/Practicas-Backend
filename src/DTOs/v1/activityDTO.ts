export class ActivityDTO {
    public ActivityID: number;
    public ActivityName: string;
    public ActivityTypeID: number;
    public CourseID: number;
    public Deadline: Date | null;

    constructor(activity: any) {
        this.ActivityID = activity.ActivityID;
        this.ActivityName = activity.ActivityName;
        this.ActivityTypeID = activity.ActivityTypeID;
        this.CourseID = activity.CourseID;
        this.Deadline = activity.Deadline;
    }
}
