export class CourseDTO {
    public CourseID: number;
    public CourseName: string;

    constructor(course: any) {
        this.CourseID = course.CourseID;
        this.CourseName = course.CourseName;
    }
}
