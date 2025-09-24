export class CourseActivityDTO {
    public CourseActivityID: number;
    public CourseID: number;
    public ActivityID: number;

    constructor(courseActivity: any) {
        this.CourseActivityID = courseActivity.CourseActivityID;
        this.CourseID = courseActivity.CourseID;
        this.ActivityID = courseActivity.ActivityID;
    }
}
