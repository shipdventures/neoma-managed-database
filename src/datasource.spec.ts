import { managedDatasourceInstance } from "@neoma/managed-database"
import { User } from "./user.entity"
import { Post } from "./post.entity"

describe("managedDatasourceInstance", () => {
  it("it should return a Datasource instance with all the project's entities loaded", async () => {
    const dataSource = managedDatasourceInstance()
    const entities = dataSource.entityMetadatas
    expect(entities).toMatchObject([{ target: User }, { target: Post }])
  })

  it("it should return the same instance on subsequent calls", async () => {
    expect(managedDatasourceInstance()).toBe(managedDatasourceInstance())
  })
})
