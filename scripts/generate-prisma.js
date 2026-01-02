const { execSync } = require('child_process');
const path = require('path');

// Generate Prisma client
console.log('Generating Prisma client...');
execSync('npx prisma generate', { 
  cwd: path.join(__dirname, '..'),
  stdio: 'inherit' 
});

// Copy Prisma client to node_modules of each app
const apps = ['web', 'api', 'mobile'];
apps.forEach(app => {
  console.log(`Setting up Prisma for ${app}...`);
  const targetPath = path.join(__dirname, '..', 'apps', app, 'node_modules', '.prisma');
  execSync(`mkdir -p ${targetPath}`);
  execSync(`cp -r ${path.join(__dirname, '..', 'node_modules', '.prisma')}/* ${targetPath}`);
});