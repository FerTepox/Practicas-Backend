export class UserDTO {
    public UserID: number;
    public Username: string;
    public Email: string;
    public Password: string;
    public RoleID: number;

    constructor(user: any) {
        this.UserID = user.UserID;
        this.Username = user.Username;
        this.Email = user.Email;
        this.Password = user.Password;
        this.RoleID = user.RoleID;
    }
}
