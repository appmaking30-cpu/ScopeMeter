import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(x => x[1]).filter(x => x.trim());
if (!scripts.length) throw new Error('No inline JavaScript found in index.html');
for (const [i, source] of scripts.entries()) new vm.Script(source, { filename: 'index.html:inline-script-' + (i + 1) });
for (const marker of ['function renderScopeGuard', 'function renderQuote', 'function downloadBackup', 'function importBackup', 'scopemeter_v2']) {
  if (!html.includes(marker)) throw new Error('Missing expected feature: ' + marker);
}
console.log('ScopeMeter inline JavaScript syntax and required feature checks passed.');
