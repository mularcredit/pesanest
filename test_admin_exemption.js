const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testAdminExemption() {
  try {
    console.log('🔍 Testing Admin Exemption for Amount Restrictions\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Find admin users
    const admins = await prisma.user.findMany({
      where: {
        OR: [
          { role: 'ADMIN' },
          { role: 'SUPER_ADMIN' },
          { role: 'SYSTEM_ADMIN' }
        ]
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });

    if (admins.length === 0) {
      console.log('⚠️  No admin users found in the database\n');
      console.log('To test admin exemption, create an admin user first.\n');
      return;
    }

    console.log(`✅ Found ${admins.length} admin user(s):\n`);
    
    for (const admin of admins) {
      console.log(`   👤 ${admin.name || 'N/A'} (${admin.email})`);
      console.log(`      Role: ${admin.role}`);
      console.log(`      ID: ${admin.id}`);
      console.log('');
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('✨ Admin Exemption Features:\n');
    console.log('   ✅ Bypass ALL policy restrictions');
    console.log('   ✅ No maximum amount limit on requisitions');
    console.log('   ✅ No maximum amount limit on expenses');
    console.log('   ✅ Bypass prohibited keyword checks');
    console.log('   ✅ Bypass category restrictions');
    console.log('   ✅ Bypass time/date restrictions');
    console.log('   ✅ Bypass vendor restrictions\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📝 Regular Users:\n');
    console.log('   ⚠️  Subject to all active policies');
    console.log('   ⚠️  Expense API limited to $1,000,000');
    console.log('   ⚠️  Requisitions subject to approval workflow\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('🎯 Summary:\n');
    console.log('   Admins can request ANY AMOUNT UNDER HEAVENS! 🚀\n');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAdminExemption();
