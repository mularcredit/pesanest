#!/usr/bin/env node
// Runs prisma migrate deploy. If the database is not empty (P3005),
// baselines all known migrations first, then deploys.
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
    run('npx prisma migrate deploy');
} catch (err) {
    const output = (err.stdout || '') + (err.stderr || '') + (err.message || '');
    if (output.includes('P3005')) {
        console.log('\nBaselining existing database — marking all migrations as applied...');
        for (const m of MIGRATIONS) {
            try {
                run(`npx prisma migrate resolve --applied ${m}`);
            } catch {
                // already marked — ignore
            }
        }
        console.log('\nRunning prisma migrate deploy after baseline...');
        run('npx prisma migrate deploy');
    } else {
        throw err;
    }
}
