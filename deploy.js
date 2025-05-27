// deploy.js
const { execSync } = require('child_process');
const ghpages = require('gh-pages');

const repoName = 'ai-chef'; // 🔁 Replace with your repo name
const username = 'jacobchase';  // 🔁 Replace with your GitHub username

// Set base in vite.config.js if needed (manual step)

try {
  console.log('📦 Building the app...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('🚀 Deploying to GitHub Pages...');
  ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: `https://github.com/${username}/${repoName}.git`,
    message: 'Deploy Vite app to GitHub Pages',
  }, (err) => {
    if (err) {
      console.error('❌ Deployment failed:', err);
    } else {
      console.log(`✅ Deployed! View at: https://${username}.github.io/${repoName}/`);
    }
  });

} catch (error) {
  console.error('❌ Error during deployment:', error);
}
