export class UserDto {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.emailVerifiedAt = data.email_verified_at;
    this.hireDate = data.hire_date;
    this.position = data.position;
    this.isActive = Boolean(data.is_active);
    this.isAdmin = Boolean(data.is_admin);
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;

    this.permissions = data.permissions?.map((p) => p.name) || [];
    this.companies = data.companies?.map((c) => ({ id: c.id, name: c.name })) || [];
  }

  static fromArray(users) {
    return users.map((user) => new UserDto(user));
  }
}
