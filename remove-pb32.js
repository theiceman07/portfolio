const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'sections');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/ section-padding pb-32/g, ' section-padding');
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Removed pb-32 from all sections.');
