import {
  Issue,
  IssueCreateInput,
  IssueFragment,
  Node,
  IssueImport,
} from "@linear/sdk/dist/_generated_documents";

export const createIssue: IssueCreateInput & Issue & IssueImport = {
  attachments: undefined,
  branchName: "",
  children: undefined,
  comments: undefined,
  history: undefined,
  identifier: "",
  integrationResources: undefined,
  inverseRelations: undefined,
  labels: undefined,
  relations: undefined,
  service: "",
  state: undefined,
  status: "",
  subscribers: undefined,
  team: undefined,
  url: "",
  id: "236e0fe8-xxxx-xxxx-xxxx-b2df06e33810",
  createdAt: new Date("2021-01-30T11:19:39.427Z"),
  updatedAt: new Date("2021-01-30T11:19:39.427Z"),
  number: 11,
  title: "webhook test",
  priority: 0,
  boardOrder: -86.81,
  previousIdentifiers: [],
  priorityLabel: "No priority",
  teamId: "eeaa0cbd-xxxx-xxxx-xxxx-1c701c3485f1",
  stateId: "c02edc3a-xxxx-xxxx-xxxx-85c349766a13",
  subscriberIds: ["80e102b0-xxxx-xxxx-xxxx-044bcfb4cd39"],
  creatorId: "80e102b0-xxxx-xxxx-xxxx-044bcfb4cd39",
  labelIds: [],
};
