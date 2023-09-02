export declare enum UserRole {
    admin = "ADMINISTRATOR",
    user = "USER",
    supplier = "SUPPLIER"
}
export declare class User {
    idUser: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    role: UserRole;
    points: number;
    profileImage: string;
}
