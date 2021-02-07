import axios from 'axios';

const WORKSPACE_ENDPOINT = '/api/workspace';

async function createWorkspace(userId, subdomain) {
  const {data} = await axios.post(WORKSPACE_ENDPOINT, {userId, subdomain});
  return data;
}

async function getWorkspaces(userId) {
  const {data} = await axios.get(WORKSPACE_ENDPOINT); // TODO: add userId in headers
  return data;
}

async function getWorkspace(workspaceId, userId) {
  const {data} = await axios.get(`WORKSPACE_ENDPOINT/${workspaceId}`); // TODO: add userId in headers
  return data;
}

async function updateWorkspaces(workspaceId) {
  const {data} = await axios.put(`WORKSPACE_ENDPOINT/${workspaceId}`); // TODO: add userId in headers
  return data;
}

async function deleteWorkspace(workspaceId) {
  const {data} = await axios.delete(`WORKSPACE_ENDPOINT$/{workspaceId}`);
  return data;
}

export default {createWorkspace, getWorkspaces, getWorkspace, updateWorkspaces, deleteWorkspace};
