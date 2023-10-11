import { test, expect } from "../test-utils/test";

//should be able to add todos
test("应该能够添加待办事项", async ({ todoPage }) => {
  await todoPage.addTodo("Buy milk");
  await todoPage.expectTodos(["Buy milk"]);

  await todoPage.addTodo("Feed the cat");
  await todoPage.expectTodos(["Buy milk", "Feed the cat"]);
});
