export function getUserName(user: { name: string } | null): string {
    return user ? user.name : '';
}
