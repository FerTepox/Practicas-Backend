export class RoleDTO {
    public RoleID: number;
    public RoleName: string;
    public IsActive: boolean;

    constructor(role: any) {
        this.RoleID = role.RoleID;    
        this.RoleName = role.RoleName;     
        this.IsActive = role.IsActive;     
    }
}