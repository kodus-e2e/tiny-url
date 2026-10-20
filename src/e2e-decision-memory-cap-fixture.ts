const MAX_FANOUT = 50;
for (const id of jobIds.slice(0, MAX_FANOUT)) {
    statuses[id] = await api.getStatus(id);
}
