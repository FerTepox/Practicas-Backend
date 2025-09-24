export class CourseMemberDTO {
    public CourseMemberID: number;
    public CourseID: number;
    public UserID: number;

    constructor(member: any) {
        this.CourseMemberID = member.CourseMemberID;
        this.CourseID = member.CourseID;
        this.UserID = member.UserID;
    }
}
