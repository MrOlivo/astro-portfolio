import fs from 'fs/promises';
import sharp from "sharp"

async function listDir(path: string): Promise<string[]> {
  try {
    return await fs.readdir(path)
  } catch (err) {
    console.error('Error occurred while reading directory:', err)
  }
}

const directoryPath = __dirname;
const files = await listDir(directoryPath)
const onlyImages = files.filter(file => ["png", "jpg"].includes(file.split(".").pop()))

if(onlyImages.length === 0) {
  console.error("No images were found.");
  process.exit();
}

const promises: Array<sharp.Sharp> = [];
const width: number = 567;

onlyImages.forEach(file => {
  const fileName = directoryPath + "/_" + file.split(".")[0];
  const sharpStream = sharp(`${directoryPath}/${file}`);

  promises.push(
    sharpStream
      .resize(width)
      .png({ quality: 80 })
      .toFile(fileName + '.png', function (err) {
        console.error(err);
      }))

  promises.push(
    sharpStream
      .resize(width)
      .webp()
      .toFile(fileName + '.webp', function (err) {
        console.error(err);
      })
  )
  promises.push(
    sharpStream
      .resize(width)
      .avif()
      .toFile(fileName + '.avif', function (err) {
        console.error(err);
      })
  )
});

Promise.all(promises)
  .then(res => { console.log("Done!", res); })
  .catch(err => {
    console.error("Error processing files, let's clean it up", err);
  });
