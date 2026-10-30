const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\DELL3511\\.gemini\\antigravity\\brain\\3bc13a23-2e0b-4935-82c8-0b13cd209c6f';
const projectDir = __dirname;
const screenshotsOut = path.join(projectDir, 'screenshots');

async function waitForAllImages(page) {
  await page.evaluate(async () => {
    // Force eager loading on all images
    document.querySelectorAll('img').forEach(img => {
      img.loading = 'eager';
    });
    const imgs = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      imgs.map(img => {
        if (img.complete && img.naturalHeight !== 0) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
          setTimeout(resolve, 3000);
        });
      })
    );
  });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // 1. Hero
  console.log('Capturing Hero...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await waitForAllImages(page);
  await new Promise(r => setTimeout(r, 1000));
  const heroPath = path.join(screenshotsOut, '01_royal_dine_hero.png');
  await page.screenshot({ path: heroPath });
  fs.copyFileSync(heroPath, path.join(artifactDir, '01_royal_dine_hero.png'));

  // 2. Specials
  console.log('Capturing Specials...');
  await page.evaluate(() => {
    const el = document.getElementById('specials');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await waitForAllImages(page);
  await new Promise(r => setTimeout(r, 1500));
  const specialsPath = path.join(screenshotsOut, '02_royal_dine_specials.png');
  await page.screenshot({ path: specialsPath });
  fs.copyFileSync(specialsPath, path.join(artifactDir, '02_royal_dine_specials.png'));

  // 3. Digital Menu
  console.log('Capturing Menu...');
  await page.evaluate(() => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await waitForAllImages(page);
  await new Promise(r => setTimeout(r, 1500));
  const menuPath = path.join(screenshotsOut, '03_royal_dine_digital_menu.png');
  await page.screenshot({ path: menuPath });
  fs.copyFileSync(menuPath, path.join(artifactDir, '03_royal_dine_digital_menu.png'));

  // 4. Gallery
  console.log('Capturing Gallery...');
  await page.evaluate(() => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await waitForAllImages(page);
  await new Promise(r => setTimeout(r, 1500));
  const galleryPath = path.join(screenshotsOut, '04_royal_dine_gallery.png');
  await page.screenshot({ path: galleryPath });
  fs.copyFileSync(galleryPath, path.join(artifactDir, '04_royal_dine_gallery.png'));

  // 5. Location
  console.log('Capturing Location...');
  await page.evaluate(() => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await waitForAllImages(page);
  await new Promise(r => setTimeout(r, 1500));
  const locationPath = path.join(screenshotsOut, '05_royal_dine_location.png');
  await page.screenshot({ path: locationPath });
  fs.copyFileSync(locationPath, path.join(artifactDir, '05_royal_dine_location.png'));

  // 6. Mobile Table QR Menu
  console.log('Capturing Mobile QR Menu...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await page.evaluate(() => {
    window.location.hash = 'qrmenu';
  });
  await new Promise(r => setTimeout(r, 1000));
  await waitForAllImages(page);
  await new Promise(r => setTimeout(r, 1500));
  const qrMenuPath = path.join(screenshotsOut, '06_royal_dine_table_qr_menu.png');
  await page.screenshot({ path: qrMenuPath });
  fs.copyFileSync(qrMenuPath, path.join(artifactDir, '06_royal_dine_table_qr_menu.png'));

  console.log('All screenshots ready!');
  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
