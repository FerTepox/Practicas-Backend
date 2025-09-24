export class UserAnswerDTO {
    public UserAnswerID: number;
    public UserID: number;
    public ActivityID: number;
    public AttributeDetailID: number;
    public AnswerValue: string;
    public IsCorrect: boolean;
    public Score: number;

    constructor(answer: any) {
        this.UserAnswerID = answer.UserAnswerID;
        this.UserID = answer.UserID;
        this.ActivityID = answer.ActivityID;
        this.AttributeDetailID = answer.AttributeDetailID;
        this.AnswerValue = answer.AnswerValue;
        this.IsCorrect = answer.IsCorrect;
        this.Score = answer.Score;
    }
}
