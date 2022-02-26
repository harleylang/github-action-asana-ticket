const asana = require('asana');
require('dotenv').config();

const ASANA_SECRET = process.env.ASANA_SECRET;
const ASANA_PROJECT = process.env.ASANA_PROJECT;
const ASANA_SECTION = process.env.ASANA_SECTION;
const GITHUB_CONTEXT = process.env.GITHUB_CONTEXT;

const client = asana.Client.create().useAccessToken(ASANA_SECRET);

console.log(GITHUB_CONTEXT);

// docs for creating tasks:
// https://developers.asana.com/docs/create-a-task
client.tasks.createTask({
    name: 'TEST',
    projects: [ASANA_PROJECT],
}).then((result) => {
    // docs for moving to specific sections:
    // https://developers.asana.com/docs/add-task-to-section
    client.sections.addTaskForSection(ASANA_SECTION, {
        task: result.gid
    })
});
