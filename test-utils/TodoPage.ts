import { Page, APIRequestContext, expect } from "@playwright/test";
// 页面URl
const pageUrl = "http://localhost:3000";
// apiURL
const apiUrl = "http://localhost:3000/api";

export class TodoPage {
  constructor(private readonly page: Page) {}
  // 接收请求,然后向后台发出请求,清除所有当前项目
  async claerTodos(request: APIRequestContext) {
    await request.put(`${apiUrl}/set-all`, { data: { item: [] } });
  }

  // 提供访问页面
  async visit() {
    await this.page.goto(pageUrl);
  }

  // 每个函数之前,先清除再访问页面
  async clearTodosAndVisit(request: APIRequestContext) {
    await this.claerTodos(request);
    await this.visit();
  }

  // 简单获取页面上的Input
  get newTodoInput() {
    return this.page.locator(".new-todo");
  }

  // 添加的Todo
  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press("Enter");
    await this.page.waitForResponse(/add/);
    await expect(this.newTodoInput).toHaveValue("");
  }

  // 得到的todos结果,定义明确的契约
  async expectTodos(todos: string[]) {
    await expect(this.page.locator(".todo-list label")).toHaveText(todos);
  }
}
