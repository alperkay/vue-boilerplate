import ApiClient from "../api-client";

export interface TestServiceInterface {
  get(id: number): Promise<any>;
}

class TestService implements TestServiceInterface {
  private basePath = "https://jsonplaceholder.typicode.com";

  public async get(id: number) {
    const response = await ApiClient.get(`${this.basePath}/posts/${id}`);
    return response;
  }
}

export default new TestService() as TestServiceInterface;
