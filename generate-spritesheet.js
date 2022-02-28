const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const logger = console;

logger.info('Creating spritesheet from files in `svgs/`');

const $ = cheerio.load(
  '<svg xmlns="http://www.w3.org/2000/svg"><defs></defs></symbol>',
  { xmlMode: true }
);

const $defs = $('defs');

const svgPaths = fs.readdirSync(path.resolve(__dirname, './svgs'));

const svgs = svgPaths.reduce((previousMap, svgPath) => {
  const svg = fs.readFileSync(path.resolve(__dirname, 'svgs', svgPath), 'utf8');
  previousMap.set(svgPath.replace('.svg', ''), svg);

  return previousMap;
}, new Map());

[...svgs.entries()].forEach(([name, svg]) => {
  logger.info(`Adding svg ${name}.svg`);
  const $doc = cheerio.load(svg, { xmlMode: true });
  const $svg = $doc.root().find('svg');
  const viewBox = $svg.attr('viewBox');
  const content = $svg.html();
  const $symbol = $('<symbol></symbol>');
  $symbol.attr('id', name);
  $symbol.attr('viewBox', viewBox);
  $symbol.html(content);
  $symbol.prepend(`<title>${name}</title>`);
  $defs.append($symbol);
});

const spritesheet = $.html();

fs.writeFileSync(
  path.resolve(__dirname, 'src/images/svg-sprites.svg'),
  spritesheet,
  'utf8'
);

logger.info('Spritesheet successfully written to disk!');
