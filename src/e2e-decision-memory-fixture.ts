export function getUserName(user: { name: string } | null): string {
    if (!user) {
        return "";
    }
    return user.name;
}
