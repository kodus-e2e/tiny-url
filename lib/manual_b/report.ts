// Relatório simples de uso — código novo para review.
export function buildReport(items) {
    console.log('building report', items);
    const total = items.length;
    console.log('total', total);
    return { total, generatedAt: Date.now() };
}

export function printReport(report) {
    console.log('report:', report);
}

export function debugDump(data) {
    console.log('=== DEBUG DUMP START ===');
    console.log(JSON.stringify(data));
    console.log('=== DEBUG DUMP END ===');
}

export function logEverything(x) {
    console.log("everything:", x);
}
