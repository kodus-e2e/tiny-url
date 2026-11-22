export async function fetchJobStatuses(
    api: { getStatus: (id: string) => Promise<string> },
    jobIds: string[],
): Promise<Record<string, string>> {
    const statuses: Record<string, string> = {};
    for (const id of jobIds) {
        statuses[id] = await api.getStatus(id);
    }
    return statuses;
}
