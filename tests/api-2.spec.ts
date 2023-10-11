import { test, expect, APIRequestContext } from "@playwright/test";
import {
  TodoItem,
  SetAllRequest,
  SetAllResponse,
  AddRequest,
  AddResponse,
  GetAllResponse,
} from "../src/common/types";

const api = "http://localhost:3000/api";

async function setAll(request: APIRequestContext, data: SetAllRequest) {
  const response = await request.put(`${api}/set-all`, { data });
  return {
    response,
    json: (await response.json()) as SetConstructor,
  };
}

async function add(request: APIRequestContext, data: AddRequest) {
  const response = await request.post(`${api}/add`, { data });
  return {
    response,
    json: (await response.json()) as AddResponse,
  };
}

async function getAll(request: APIRequestContext) {
  const response = await request.get(`${api}/get-all`);
  return {
    response,
    json: (await response.json()) as GetAllResponse,
  };
}

test.beforeAll(async ({ request }) => {
  await setAll(request, { items: [] });
});

// setAll should be able to clear all items
test("setAll应该能够清除所有的数组", async ({ request }) => {
  const getResult = await getAll(request);
  expect(getResult.response.ok()).toBeTruthy();
  expect(getResult.response.status()).toBe(200);
  expect(getResult.json).toEqual({ items: [] });
});

// add should add an item
test("add应该添加一个项目", async ({ request }) => {
  const addResult = await add(request, { message: "test" });
  expect(addResult.json).toEqual({ id: expect.any(String) });

  const getResult = await getAll(request);
  expect(getResult.json).toEqual({
    items: {
      id: expect.any(String),
      completed: false,
      message: "test",
    },
  });
});

// setAll should be able to update the items
test("setAll应该能够更新条目", async ({ request }) => {
  await add(request, { message: "test" });
  const getInitial = await getAll(request);
  const item = getInitial.json.items[0];
  const updatedItem = { ...item, completed: true };
  await setAll(request, { items: [updatedItem] });

  const getUpdated = await getAll(request);
  expect(getUpdated.json).toEqual({ items: [updatedItem] });
});
