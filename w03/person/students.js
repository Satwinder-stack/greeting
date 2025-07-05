var record = require('../logs/records.js');

const names = ['student1', 'student2', 'student3', 'student4', 'student5'];

const ages = ['18', '19', '20', '21', '22'];

const sections = ['WD-301', 'WD-302', 'WD-303', 'WD-304', 'WD-305'];

for (let i = 0; i < names.length; i++) {
  record.info(names[i], ages[i], sections[i]);
  console.log('___________________________');
}
record.warning('This is a warning');
record.error('This is for error testing');
