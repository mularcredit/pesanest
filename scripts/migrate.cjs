#!/usr/bin/env node
const { execSync } = require('child_process');

const MIGRATIONS = [
    '20260131084908_init_neon',
    '20260205032111_add_password_reset_fields',
    '20260205034050_add_schedules',
    '20260207190059_add_period_and_tax_management',
];

function run(cmd) {
    execSync(cmd, { stdio: 'inherit' });
}

try {
    // Capture output so we can detect P3005
    execSync('npx prisma migrate deploy', { stdio: 'pipe' });
    console.log('Migrations applied successfully.');
} catch (err) {
    const output = String(err.stdout || '') + String(err.stderr || '');
    console.error(output);

    if (output.includes('P3005')) {
        console.log('\nDatabase not empty — baselining all migrations as applied...');
        for (const m of MIGRATIONS) {
            try {
                run(`npx prisma migrate resolve --applied ${m}`);
            } catch {
                // already marked — safe to ignore
            }
        }
        console.log('\nRe-running prisma migrate deploy...');
        run('npx prisma migrate deploy');
    } else {
        process.exit(1);
    }
}
