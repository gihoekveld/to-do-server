import { v4 as uuidV4 } from 'uuid';

type TStatus = 'to-do' | 'doing' | 'done';

class Task {
  id: string;
  created_at: string;
  title: string;
  status: TStatus;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Task, TStatus };