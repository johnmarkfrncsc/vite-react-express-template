#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log('🚀 Initializing fullstack template...');

  try {
    const templateConfig = JSON.parse(
      await fs.readFile(path.join(__dirname, 'template.json'), 'utf8')
    );

    const variables = {};

    // Get user input for each variable
    for (const [key, config] of Object.entries(templateConfig.variables)) {
      const answer = await question(`${config.description} (default: ${config.default}): `);
      variables[key] = answer || config.default;
    }

    console.log('\n🔧 Configuring project with your settings...');

    // Process all files recursively
    await processDirectory(__dirname, variables);

    // Remove template-specific files
    await fs.unlink(path.join(__dirname, 'template.json'));
    await fs.unlink(path.join(__dirname, 'init-template.js'));

    console.log('\n✅ Template initialized successfully!');
    console.log('\nTo start development:');
    console.log('1. Run: npm run install-all');
    console.log('2. Run: npm run dev');
  } catch (error) {
    console.error('Error initializing template:', error);
  } finally {
    rl.close();
  }
}

async function processDirectory(dirPath, variables) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    // Skip node_modules and .git directories
    if (entry.isDirectory() && !['node_modules', '.git'].includes(entry.name)) {
      await processDirectory(fullPath, variables);
    }
    else if (entry.isFile() &&
      !['template.json', 'init-template.js'].includes(entry.name) &&
      ['.js', '.jsx', '.json', '.html', '.md', '.css'].some(ext => entry.name.endsWith(ext))) {
      await processFile(fullPath, variables);
    }
  }
}

async function processFile(filePath, variables) {
  try {
    let content = await fs.readFile(filePath, 'utf8');

    // Replace variables
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      content = content.replace(regex, value);
    }

    await fs.writeFile(filePath, content, 'utf8');
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

main();
