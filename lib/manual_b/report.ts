// Relatório simples de uso — código novo para review.
export function buildReport(items) {
    console.log('building report', items);
    const total = items.length;
    console.log('total', total);
    return { total, generatedAt: Date.now() };
}
