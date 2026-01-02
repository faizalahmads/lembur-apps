const fs = require('fs');
const path = require('path');

// Copy .env from root to apps
const rootEnv = path.join(__dirname, '..', '.env');
const destinations = [
  path.join(__dirname, '..', 'apps', 'web', '.env.local'),
  path.join(__dirname, '..', 'apps', 'api', '.env.local'),
];

if (fs.existsSync(rootEnv)) {
  const envContent = fs.readFileSync(rootEnv, 'utf8');
  destinations.forEach(dest => {
    fs.writeFileSync(dest, envContent);
  });
}