const asana = require('asana');
require('dotenv').config();

const ASANA_SECRET = process.env.ASANA_SECRET;
const ASANA_PROJECT = process.env.ASANA_PROJECT;
const ASANA_SECTION = process.env.ASANA_SECTION;
const GITHUB_CONTEXT = process.env.GITHUB_CONTEXT;

const client = asana.Client.create().useAccessToken(ASANA_SECRET);

const name = GITHUB_CONTEXT.event.issue.title;
const url = GITHUB_CONTEXT.event.issue.html_url;

// docs for creating tasks:
// https://developers.asana.com/docs/create-a-task
client.tasks.createTask({
    name,
    notes: `Github issue URL: ${url}`,
    projects: [ASANA_PROJECT],
}).then((result) => {
    // docs for moving to specific sections:
    // https://developers.asana.com/docs/add-task-to-section
    client.sections.addTaskForSection(ASANA_SECTION, {
        task: result.gid
    })
});
