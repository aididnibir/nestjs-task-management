import { TaskStatus } from "../task.model";

export class GetTaskFilterDto {
  title?: string;
  status?: TaskStatus;
}
