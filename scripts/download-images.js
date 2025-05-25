const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

// Updated Unsplash image IDs for bakery-related images
const IMAGES = {
  'hero-bg.jpg': 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=2000&fit=crop', // Beautiful cake display with warm lighting
  'chocolate-cake.jpg': 'https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=800',
  'red-velvet.jpg': 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=800',
  'fruit-cake.jpg': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800',
  'vanilla-ice-cream.jpg': 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=800',
  'chocolate-ice-cream.jpg': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800',
  'strawberry-ice-cream.jpg': 'https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=800',
  'croissant.jpg': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800',
  'eclair.jpg': 'https://images.unsplash.com/photo-1581404569456-fcd251596a93?q=80&w=800',
  'danish.jpg': 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800'
};

// Create images directory if it doesn't exist
async function init() {
  try {
    await mkdirAsync(IMAGES_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error('Error creating directory:', error);
      process.exit(1);
    }
  }
}

// Download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          const filepath = path.join(IMAGES_DIR, filename);
          await writeFileAsync(filepath, buffer);
          console.log(`Downloaded ${filename}`);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

// Download all images
async function downloadAllImages() {
  await init();
  
  for (const [filename, url] of Object.entries(IMAGES)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error);
    }
  }
}

downloadAllImages().catch(console.error); 