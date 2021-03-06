import { LinearClient, Issue } from "@linear/sdk";
import { IssueFragment } from "@linear/sdk/dist/_generated_documents";
import { createIssue } from "./createIssueWebhook";

const apiKey = process.env.LINEAR_API_KEY;
const linearClient = new LinearClient({ apiKey });

const getCurrentUser = async () => {
  console.log(await linearClient.viewer);
};

async function getMyIssues() {
  const me = await linearClient.viewer;
  const myIssues = await me.assignedIssues();
  for (const issue of myIssues.nodes) {
    console.log(`タイトルは${issue.title}`);
  }
}

(async () => {
  await getMyIssues();
  const issue: IssueFragment = createIssue.data;
})();
