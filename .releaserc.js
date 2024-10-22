module.exports = {
  branches: ['main'],  // ou 'master' se for o seu branch principal
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
};
