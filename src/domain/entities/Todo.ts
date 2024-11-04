export type TodoProps = {
  id: string
  title: string
  done: boolean
  createdAt: Date
}

export class Todo {
  private constructor(private props: TodoProps) { }

  public static create(title: string) {
    return new Todo({
      id: crypto.randomUUID().toString(),
      title,
      done: false,
      createdAt: new Date()
    })
  }

  public static with(props: TodoProps) {
    return new Todo(props)
  }

  public get id() {
    return this.props.id
  }

  public get title() {
    return this.props.title
  }

  public get done() {
    return this.props.done
  }

  public get createdAt() {
    return this.props.createdAt
  }
}