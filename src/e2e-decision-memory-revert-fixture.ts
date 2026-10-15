if (raw === null) {
    throw new Error('Missing config value');
}
const parsed = parseInt(raw, 10);
if (Number.isNaN(parsed)) {
    throw new Error(`Invalid config value: ${raw}`);
}
return parsed;
