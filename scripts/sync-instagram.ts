import fs from 'fs';
import https from 'https';
import path from 'path';

const VIDEOS = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4'
];

const TARGET_DIR = path.join(process.cwd(), 'public', 'assets', 'instagram');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

async function downloadVideo(url: string, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      // Handle simple redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location!, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', (err) => {
            fs.unlink(filename, () => {});
            reject(err);
        });
        return;
      }

      if (response.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
          return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log(`Downloading ${VIDEOS.length} videos to ${TARGET_DIR}...`);
  for (let i = 0; i < VIDEOS.length; i++) {
    const filename = path.join(TARGET_DIR, `${i + 1}.mp4`);
    console.log(`Downloading to ${filename}...`);
    try {
      await downloadVideo(VIDEOS[i], filename);
      console.log(`Successfully downloaded ${filename}`);
    } catch (err) {
      console.error(`Failed to download ${filename}:`, err);
    }
  }
  console.log('Done!');
}

main();
