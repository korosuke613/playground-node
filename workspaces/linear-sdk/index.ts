import { LinearClient } from "@linear/sdk";

const apiKey = process.env.LINEAR_API_KEY;
const linearClient = new LinearClient({ apiKey });

const getCurrentUser = async () => {
  console.log(await linearClient.viewer);
};

async function getMyIssues() {
  const me = await linearClient.viewer;
  const myIssues = await me.assignedIssues();
  console.log(myIssues);
}

(async () => {
  await getMyIssues();
})();
